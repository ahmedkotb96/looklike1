const PlaceholderComponent = ({ title }: { title: string }) => (
  <div className="bg-white p-8 rounded-xl shadow-md">
    <h2 className="text-3xl font-bold text-slate-800 mb-6">{title}</h2>
    <div className="text-center text-slate-500 border-2 border-dashed border-slate-300 rounded-lg p-12">
      <p className="font-medium">Management Interface for {title}</p>
      <p className="text-sm mt-2">This section is under construction. Build it out similarly to the Team Management component.</p>
    </div>
  </div>
);

export default PlaceholderComponent;
