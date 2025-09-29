import React, { useState, useEffect, useCallback } from 'react';
import { db } from '@/firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, writeBatch } from 'firebase/firestore';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, type DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { PlusCircle, GripVertical, Pencil, Trash2, X, Save, AlertCircle } from 'lucide-react';

// --- INTERFACES & REUSABLE COMPONENTS ---

interface BrandingItem {
  id: string;
  name: string;
  description: string;
  image: string;
  order: number;
}

interface SortableItemUIProps extends React.HTMLAttributes<HTMLLIElement> {
    item: BrandingItem;
    onEdit: (item: BrandingItem) => void;
    onRemove: (id: string) => void;
    listeners?: React.HTMLAttributes<HTMLElement>;
}

const Toast = ({ message, type, onDismiss }: { message: string, type: 'success' | 'error', onDismiss: () => void}) => {
    useEffect(() => {
        const timer = setTimeout(onDismiss, 3000);
        return () => clearTimeout(timer);
    }, [onDismiss]);

    return (
        <div className={`fixed top-5 right-5 p-4 rounded-lg shadow-lg text-white ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} animate-fade-in-right z-50`}>
            {message}
        </div>
    );
};

const EditModal = ({ item, isOpen, onClose, onSave, loading }: { item: BrandingItem | null; isOpen: boolean; onClose: () => void; onSave: (item: BrandingItem) => void; loading: boolean }) => {
    const [formData, setFormData] = useState(item);
    
    useEffect(() => { setFormData(item); }, [item]);
    
    if (!isOpen || !formData) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => { onSave(formData); };
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40 animate-fade-in">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-slate-800">{formData.id ? 'Edit' : 'Add'} Branding Item</h3>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100"><X size={20} /></button>
                </div>
                <div className="space-y-4">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full px-4 py-2 border border-slate-300 rounded-lg" />
                    <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full px-4 py-2 border border-slate-300 rounded-lg" />
                    <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="w-full px-4 py-2 border border-slate-300 rounded-lg" />
                </div>
                <div className="mt-6 flex justify-end gap-3">
                    <button onClick={onClose} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200">Cancel</button>
                    <button onClick={handleSave} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-indigo-400" disabled={loading}>
                        {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </div>
        </div>
    );
};

const SortableItemUI = React.forwardRef<HTMLLIElement, SortableItemUIProps>(
    ({ item, onEdit, onRemove, listeners, ...props }, ref) => (
        <li ref={ref} {...props} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center gap-4">
                <button {...listeners} className="cursor-grab text-slate-400 hover:text-slate-600"><GripVertical size={20} /></button>
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                    <p className="font-semibold text-slate-800">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.description}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <button onClick={() => onEdit(item)} className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"><Pencil size={18} /></button>
                <button onClick={() => onRemove(item.id)} className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"><Trash2 size={18} /></button>
            </div>
        </li>
    )
);
SortableItemUI.displayName = "SortableItemUI";

const SortableItem = ({ item, onEdit, onRemove }: { item: BrandingItem, onEdit: (item: BrandingItem) => void, onRemove: (id: string) => void}) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id });
    const style = { transform: CSS.Transform.toString(transform), transition };
    return <SortableItemUI ref={setNodeRef} style={style} listeners={listeners} {...attributes} item={item} onEdit={onEdit} onRemove={onRemove} />;
};


// --- MAIN COMPONENT ---

const AdminBranding = () => {
    const [brandingItems, setBrandingItems] = useState<BrandingItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [isDirty, setIsDirty] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<BrandingItem | null>(null);
    const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const showNotification = (message: string, type: 'success' | 'error') => setNotification({ message, type });

    const fetchBrandingItems = useCallback(async () => {
        setLoading(true);
        const snapshot = await getDocs(collection(db, 'branding'));
        const items = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as BrandingItem));
        items.sort((a, b) => a.order - b.order);
        setBrandingItems(items);
        setLoading(false);
        setIsDirty(false);
    }, []);

    useEffect(() => { fetchBrandingItems(); }, [fetchBrandingItems]);

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (over && active.id !== over.id) {
            setBrandingItems((items) => arrayMove(items, items.findIndex(i => i.id === active.id), items.findIndex(i => i.id === over.id)));
            setIsDirty(true);
        }
    };

    const handleSaveOrder = async () => {
        setLoading(true);
        const batch = writeBatch(db);
        brandingItems.forEach((item, index) => {
            batch.update(doc(db, 'branding', item.id), { order: index });
        });
        try {
            await batch.commit();
            showNotification('Order saved successfully!', 'success');
            setIsDirty(false);
        } catch {
            showNotification('Failed to save order.', 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleOpenModal = (item: BrandingItem | null = null) => {
        setEditingItem(item || { id: '', name: '', description: '', image: '', order: brandingItems.length });
        setIsModalOpen(true);
    };

    const handleSaveItem = async (itemToSave: BrandingItem) => {
        setLoading(true);
        try {
            if (itemToSave.id) {
                await updateDoc(doc(db, 'branding', itemToSave.id), { ...itemToSave });
                showNotification('Item updated successfully!', 'success');
            } else {
                await addDoc(collection(db, 'branding'), itemToSave);
                showNotification('Item added successfully!', 'success');
            }
            setIsModalOpen(false);
            setEditingItem(null);
            fetchBrandingItems();
        } catch {
            showNotification('Failed to save item.', 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveItem = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            try {
                await deleteDoc(doc(db, 'branding', id));
                showNotification('Item removed successfully.', 'success');
                fetchBrandingItems();
            } catch {
                showNotification('Failed to remove item.', 'error');
            }
        }
    };

    const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }));
    
    return (
        <div className="animate-fade-in">
            {notification && <Toast message={notification.message} type={notification.type} onDismiss={() => setNotification(null)} />}
            <EditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} item={editingItem} onSave={handleSaveItem} loading={loading} />
            
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-slate-800">Manage Branding</h2>
                <div className="flex items-center gap-3">
                    <button 
                        onClick={() => window.location.href = '/looklike/admin'}
                        className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200"
                    >
                        ← Back to Admin
                    </button>
                    {isDirty && (
                        <button onClick={handleSaveOrder} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-sm" disabled={loading}>
                            <Save size={18} /> Save Order
                        </button>
                    )}
                    <button onClick={() => handleOpenModal()} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm">
                        <PlusCircle size={18} /> Add Item
                    </button>
                </div>
            </div>

            {loading && brandingItems.length === 0 ? (
                <ul className="space-y-3">
                    {[...Array(3)].map((_, i) => <div key={i} className="h-20 bg-slate-200 rounded-lg animate-pulse"></div>)}
                </ul>
            ) : brandingItems.length > 0 ? (
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={brandingItems.map(m => m.id)} strategy={verticalListSortingStrategy}>
                        <ul className="space-y-3">
                            {brandingItems.map(item => <SortableItem key={item.id} item={item} onRemove={handleRemoveItem} onEdit={handleOpenModal} />)}
                        </ul>
                    </SortableContext>
                </DndContext>
            ) : (
                <div className="text-center py-16 bg-white rounded-xl shadow-md border border-slate-200">
                    <AlertCircle className="mx-auto h-12 w-12 text-slate-400" />
                    <h3 className="mt-2 text-xl font-semibold text-slate-700">No Branding Items Found</h3>
                    <p className="mt-1 text-sm text-slate-500">Click "Add Item" to get started.</p>
                </div>
            )}
        </div>
    );
};

export default AdminBranding;