import type { Translations } from '@/types/translations';

export type Language = 'en' | 'ar';

export const translations: Translations = {
  en: {
    aboutUsMain: {
      hero: {
        title: {
          innovative: "INNOVATIVE",
          outstanding: "OUTSTANDING",
          results: "RESULTS"
        },
        description: "At LookLike, we're more than just a marketing agency – we're your strategic partner in success. Explore our world of innovative solutions and discover how we can transform your brand's digital presence.",
        button: "Learn More"
      },
      companies: {
        title: "Trusted by Companies Worldwide"
      },
      sections: {
        story: {
          title: "Our Story",
          content: "LookLike began with a vision to revolutionize digital marketing. Since our inception, we've grown into a full-service agency, delivering cutting-edge solutions that drive real results for our clients. Our journey is marked by innovation, dedication, and a relentless pursuit of excellence."
        },
        vision: {
          title: "Our Vision",
          content: "To be the leading force in digital transformation, empowering businesses to thrive in the digital age through innovative marketing solutions and exceptional service."
        },
        mission: {
          title: "Our Mission",
          content: "To deliver outstanding results through creative, data-driven marketing strategies that help our clients achieve their business goals and stand out in their industries."
        }
      },
      whyChooseUs: {
        seeTeam: {
          title: "See Our Team",
          description: [
            "Meet the creative minds behind our success",
            "Each team member brings unique expertise and passion"
          ]
        },
        heading: {
          part1: "Why",
          part2: "Choose",
          part3: "Us?"
        },
        description: "We combine creativity, technology, and strategy to deliver exceptional results. Our approach is built on:",
        features: [
          "Data-Driven Strategy",
          "Creative Excellence",
          "Innovative Solutions",
          "Proven Results",
          "Expert Team",
          "Client Focus"
        ]
      },
      cta: {
        title: {
          part1: "Ready to",
          part2: "Transform",
          part3: "Your Digital",
          part4: "Presence?"
        },
        description: "Join the ranks of successful businesses who have partnered with LookLike to achieve their marketing goals.",
        button: "Contact Us Today"
      }
    },
    navigation: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      portfolio: 'Portfolio',
      team: 'Our Team',
      contact: 'Contact Us',
    },
    hero: {
      expectMore: 'Expect More With Us!',
      welcome: 'Welcome to Look Like Advertising & Marketing',
      subtitle: 'your partner for creative advertising solutions!',
      exploreMore: 'Explore More',
      needsTitle: 'Everything you need',
      needsDescription: 'From branding and graphic design to social media, digital ads, and outdoor campaigns — we plan, design, and execute strategies that get you noticed. Set goals, assign tasks, and watch your brand grow — effortlessly.',
    },
    services: {
      title: 'Our Services',
      socialMedia: {
        title: 'Social Media Management',
        description: "In the age of social media, we build your brand's presence across all major platforms. Our team creates and manages compelling content that engages your audience and drives results, focusing on strategies that convert followers into customers."
      },
      branding: {
        title: 'Branding Service',
        description: 'We help establish and evolve your brand identity through strategic design and positioning.'
      },
      mediaProduction: {
        title: {
          part1: 'Media',
          part2: 'Production'
        },
        description: "We bring your brand's story to life through high-quality media production. Whether it's a promotional video, professional photography, or eye-catching motion graphics, our production team delivers stunning visuals that captivate your audience. From concept and scripting to filming and post-production, we ensure every frame reflects your brand's vision and professionalism.",
        fallbackTitle: "Looklike Production Video",
        staticVideoTitle: "Looklike YouTube Video 1",
        showcase: {
          title: {
            part1: 'Our Work in',
            part2: 'Motion'
          },
          description: 'We bring stories to life with cinematic quality and creative passion. Every frame is crafted to captivate, engage, and deliver your message with impact. Explore more of our work in motion.',
          button: 'Explore More'
        }
      },
      outdoor: {
        title: 'Outdoor Advertising',
        description: 'Impactful outdoor advertising campaigns that capture attention.'
      },
      socialMediaManagement: {
        title: {
          part1: 'Social Media',
          part2: 'Management'
        },
        description: "We manage your platforms with purpose and strategy — creating content that connects, engages, and converts. From planning and copywriting to design and analytics, our team handles every detail to keep your brand active, aligned, and always ahead. Whether you're building awareness or driving sales, we turn your social media into a powerful growth engine.",
        getInTouch: 'Get In Touch !',
        staticItems: [
          {
            id: "squeeze",
            name: "Squeeze Social Media Campaign",
            description: "Fresh, bold, product-driven visuals",
            behanceLink:
              "https://www.behance.net/gallery/202140597/SQUUSE-SOCIAL-MEDIA-CAMPAIN",
          },
          {
            id: "cariby2",
            name: "Cariby Social Media Campaign",
            description: "Designed to melt attention",
            behanceLink:
              "https://www.behance.net/gallery/177043275/cariby-dairy-social-media-campaign",
          },
          {
            id: "qemam",
            name: "Qemam Social Media Campaign",
            description: "Architecture meets confident design",
            behanceLink:
              "https://www.behance.net/gallery/165396653/QIMAM-REALESTATE-LOGO",
          },
          {
            id: "cariby",
            name: "Cariby Social Media Campaign",
            description: "Designed to melt attention",
            behanceLink:
              "https://www.behance.net/gallery/202139479/RATB-ALA-ALBK-SOCIAL-MEDIA-CAMPAIGN",
          },
          {
            id: "dahabia",
            name: "Dahabia Social Media Campaign",
            description: "Designed to build appetite",
            behanceLink:
              "https://www.behance.net/gallery/202141925/DAHABIA-NEW-CAMPIAGN",
          },
          {
            id: "altakamol",
            name: "Takamol Social Media Campaign",
            description: "Architecture meets confident design",
            behanceLink:
              "https://www.behance.net/gallery/172599549/TAKAMOL-SOCIAL-MEDIA-CAMPAIGN",
          },
        ],
        portfolio: {
          description: 'At Looklike, we craft every social media campaign with attention to the smallest detail — from content strategy to visual design and engagement metrics. Explore more of our social media management projects.',
          button: 'Explore More'
        }
      },
      outdoorAdvertising: {
        title: {
          part1: 'Outdoor',
          part2: 'Advertising'
        },
        description: 'Make your brand impossible to ignore with our outdoor advertising solutions. From billboards and transit ads to street furniture and digital displays, we create impactful campaigns that reach your audience where they live, work, and play.',
        getInTouch: 'Get In Touch !',
        fallbackTitle: 'Outdoor Advertising Video',
        showcase: {
          title: {
            part1: 'Campaigns in',
            part2: 'the Wild'
          },
          description: 'Our strategic placement and creative designs ensure maximum visibility. See how we bring brands to the forefront with high-impact outdoor campaigns.',
          button: 'Explore More'
        }
      },
      brandingIdentityDesign: {
        title: {
          part1: "Brand ",
          part2: "Identity &",
          part3: " Design",
        },
        description:
          "Your brand identity is what makes you stand out. We craft visual identities that capture the essence of your business and ensure consistency across all media. Our design team creates everything from memorable logos and comprehensive brand guidelines to compelling company profiles and eye-catching digital designs, all tailored to make your brand instantly recognizable and impactful.",
        getInTouch: "Get In Touch !",
        staticItems: [
          {
            id: "centromall",
            name: "Centro Mall Brand Identity",
            description: "Modern. Simple. Family vibes",
          },
          {
            id: "ihome",
            name: "i home Brand Identity",
            description:
              "a sleek, modern identity that brings out i home's unique style",
          },
          {
            id: "zodiac",
            name: "Zodiac Brand Identity",
            description: "inspired by cosmic energy and timeless elegance",
          },
          {
            id: "cinnarolls",
            name: "CinnaRolls Brand Identity",
            description: "A soft, sweet, and stylish brand.",
          },
          {
            id: "elmassa",
            name: "Elmassa Brand Identity",
            description:
              "Sharp. Elegant. Confident. A brand that leads by design.",
          },
          {
            id: "aamen",
            name: "Aamen Brand Identity",
            description: "Simple. Safe. Smart. Designed by Looklike for AAMEN.",
          },
        ],
        footerDescription:
          "At Looklike, we craft every brand with attention to the smallest detail — from the logo to the colors and tone of voice. Explore more of our visual identity projects.",
        exploreMore: "Explore More",
      },
      seeMore: 'See More',
      seeLess: 'See Less'
    },
    companies: {
      title: 'Trusted by most innovative Companies',
      list: ['Babel', 'iHome', 'Al Rehab Development', 'El Massa', 'Villarose', 'Plaza Street', 'Zodiac', 'RE/MAX']
    },
    portfolio: {
      title: 'Check Our Last Work',
      subtitle: 'Take a look at our latest projects where creativity meets strategy.',
      ihomeProject: 'We crafted a modern and clean visual identity for i Home, reflecting the brand\'s focus on smart living and contemporary design.',
      elmassaProject: 'Developed a refined and modern brand identity that reflects luxury, trust, and elegance. The design captures the brand\'s premium positioning through a sophisticated logo, elegant typography, and a timeless color palette. This comprehensive brand system ensures consistency across all touchpoints while maintaining the sophisticated aesthetic that defines the Elmassa experience.',
      zodiacProject: 'We developed a bold and professional visual identity for Zodiac, capturing the essence of trust, growth, and real estate expertise. The design reflects the brand\'s ambition to lead in the property marketing sector.',
      cinnarollsProject: 'We developed a bold and professional visual identity for CinnaRolls, capturing the warmth and comfort of freshly baked goods. The design combines playful elements with professional execution, creating a brand that feels both approachable and premium. Our comprehensive approach included logo design, packaging concepts, and brand guidelines that reflect the artisanal quality and delicious experience that CinnaRolls represents.',
      centromallProject: 'Modern and clean brand identity for Centro Mall, reflecting the brand\'s focus on family shopping and contemporary retail experience.'
    },
    team: {
      title: 'Meet Our Creative Team',
      members: {
        ceo: 'Hassan Edrees | Founder / CEO',
        artDirector: 'Nagwa Salah | Art Director',
        accountant: 'Mohamed Eldeeb | Accountant'
      }
    },
    whyUs: {
      title: 'Why Choose Us for Your Marketing Needs?',
      description: 'At Looklike, we don\'t just market — we build success stories. With a mix of creativity, experience, and market insight, we craft powerful campaigns tailored to each brand. Our team is dedicated to delivering real results through smart, impactful advertising and marketing solutions.'
    },
    footer: {
      getInTouch: 'Get In Touch !',
      contact: {
        email: 'info@looklike.adv',
        phone: '+971505045287',
        address: 'Dubai Investment Park - Dubai'
      },
      copyright: '© 2025 LookLike. All rights reserved. and beyond'
    },
    contactUsMain: {
      title: {
        part1: "Why Choose Us for",
        part2: "Your",
        part3: "Marketing",
        part4: "Needs?"
      },
      description: "At Looklike, we don't just market — we build success stories. With a mix of creativity, experience, and market insight, we craft powerful campaigns tailored to each brand. Our team is dedicated to delivering real results through smart, impactful advertising and marketing solutions.",
      form: {
        title: "Get in Touch",
        description: "Interested in elevating your brand or have a business inquiry? Complete the form below, and our team will connect with you to discuss how we can help achieve your marketing goals.",
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        button: "Send Message",
        sending: "Sending...",
        success: "Thank you for reaching out! We'll be in touch soon.",
        error: "Sorry, there was an error sending your message. Please try again."
      }
    },
    mediaProduction: {
      title: {
        part1: 'Media',
        part2: 'Production'
      },
      description: "We bring your brand's story to life through high-quality media production. Whether it's a promotional video, professional photography, or eye-catching motion graphics, our production team delivers stunning visuals that captivate your audience. From concept and scripting to filming and post-production, we ensure every frame reflects your brand's vision and professionalism.",
      fallbackTitle: "Looklike Production Video",
      staticVideoTitle: "Looklike YouTube Video 1",
      showcase: {
        title: {
          part1: 'Our Work in',
          part2: 'Motion'
        },
        description: 'We bring stories to life with cinematic quality and creative passion. Every frame is crafted to captivate, engage, and deliver your message with impact. Explore more of our work in motion.',
        button: 'Explore More'
      }
    },
    socialMediaManagement: {
      title: {
        part1: 'Social Media',
        part2: 'Management'
      },
      description: "We manage your platforms with purpose and strategy — creating content that connects, engages, and converts. From planning and copywriting to design and analytics, our team handles every detail to keep your brand active, aligned, and always ahead. Whether you're building awareness or driving sales, we turn your social media into a powerful growth engine.",
      getInTouch: 'Get In Touch !',
      staticItems: [
        {
          id: "squeeze",
          name: "Squeeze Social Media Campaign",
          description: "Fresh, bold, product-driven visuals",
          behanceLink:
            "https://www.behance.net/gallery/202140597/SQUUSE-SOCIAL-MEDIA-CAMPAIN",
        },
        {
          id: "cariby2",
          name: "Cariby Social Media Campaign",
          description: "Designed to melt attention",
          behanceLink:
            "https://www.behance.net/gallery/177043275/cariby-dairy-social-media-campaign",
        },
        {
          id: "qemam",
          name: "Qemam Social Media Campaign",
          description: "Architecture meets confident design",
          behanceLink:
            "https://www.behance.net/gallery/165396653/QIMAM-REALESTATE-LOGO",
        },
        {
          id: "cariby",
          name: "Cariby Social Media Campaign",
          description: "Designed to melt attention",
          behanceLink:
            "https://www.behance.net/gallery/202139479/RATB-ALA-ALBK-SOCIAL-MEDIA-CAMPAIGN",
        },
        {
          id: "dahabia",
          name: "Dahabia Social Media Campaign",
          description: "Designed to build appetite",
          behanceLink:
            "https://www.behance.net/gallery/202141925/DAHABIA-NEW-CAMPIAGN",
        },
        {
          id: "altakamol",
          name: "Takamol Social Media Campaign",
          description: "Architecture meets confident design",
          behanceLink:
            "https://www.behance.net/gallery/172599549/TAKAMOL-SOCIAL-MEDIA-CAMPAIGN",
        },
      ],
      portfolio: {
        description: 'At Looklike, we craft every social media campaign with attention to the smallest detail — from content strategy to visual design and engagement metrics. Explore more of our social media management projects.',
        button: 'Explore More'
      }
    },
    outdoorAdvertising: {
      title: {
        part1: 'Outdoor',
        part2: 'Advertising'
      },
      description: 'Make your brand impossible to ignore with our outdoor advertising solutions. From billboards and transit ads to street furniture and digital displays, we create impactful campaigns that reach your audience where they live, work, and play.',
      getInTouch: 'Get In Touch !',
      fallbackTitle: 'Outdoor Advertising Video',
      showcase: {
        title: {
          part1: 'Campaigns in',
          part2: 'the Wild'
        },
        description: 'Our strategic placement and creative designs ensure maximum visibility. See how we bring brands to the forefront with high-impact outdoor campaigns.',
        button: 'Explore More'
      }
    },
    brandingIdentityDesign: {
      title: {
        part1: "Brand ",
        part2: "Identity &",
        part3: " Design",
      },
      description:
        "Your brand identity is what makes you stand out. We craft visual identities that capture the essence of your business and ensure consistency across all media. Our design team creates everything from memorable logos and comprehensive brand guidelines to compelling company profiles and eye-catching digital designs, all tailored to make your brand instantly recognizable and impactful.",
      getInTouch: "Get In Touch !",
      staticItems: [
        {
          id: "centromall",
          name: "Centro Mall Brand Identity",
          description: "Modern. Simple. Family vibes",
        },
        {
          id: "ihome",
          name: "i home Brand Identity",
          description:
            "a sleek, modern identity that brings out i home's unique style",
        },
        {
          id: "zodiac",
          name: "Zodiac Brand Identity",
          description: "inspired by cosmic energy and timeless elegance",
        },
        {
          id: "cinnarolls",
          name: "CinnaRolls Brand Identity",
          description: "A soft, sweet, and stylish brand.",
        },
        {
          id: "elmassa",
          name: "Elmassa Brand Identity",
          description:
            "Sharp. Elegant. Confident. A brand that leads by design.",
        },
        {
          id: "aamen",
          name: "Aamen Brand Identity",
          description: "Simple. Safe. Smart. Designed by Looklike for AAMEN.",
        },
      ],
      footerDescription:
        "At Looklike, we craft every brand with attention to the smallest detail — from the logo to the colors and tone of voice. Explore more of our visual identity projects.",
      exploreMore: "Explore More",
    },
    ourTeamMain: {
      title: {
        part1: "Meet Our",
        part2: "Creative Team",
      },
      cta: {
        title: {
          part1: "Why Choose Us for",
          part2: "Your ",
          part3: "Marketing",
          part4: " Needs?",
        },
        description: "At Looklike, we don't just market — we build success stories. With a mix of creativity, experience, and market insight, we craft powerful campaigns tailored to each brand. Our team is dedicated to delivering real results through smart, impactful advertising and marketing solutions.",
        button: "Get In Touch !",
      },
    },
  },
  ar: {
    aboutUsMain: {
      companies: {
        title: "نحظى بثقة الشركات الأكثر تميّزاً وابتكاراً"
      },
      hero: {
        title: {
          innovative: "نبتكر",
          outstanding: "نتميّز",
          results: "نحقق"
        },
        description: "في لوك لايك، نتجاوز كوننا مجرد وكالة تسويق - نحن شريكك الاستراتيجي في رحلة النجاح. اكتشف عالمنا من الحلول الإبداعية ونقلتنا النوعية في تطوير حضور علامتك التجارية في العالم الرقمي.",
        button: "اكتشف المزيد"
      },
      
      sections: {
        story: {
          title: "قصتنا",
          content: "انطلقت لوك لايك برؤية طموحة لإحداث ثورة في عالم التسويق الرقمي. منذ تأسيسنا، نمونا لنصبح وكالة خدمات متكاملة، نقدم حلولاً إبداعية تحقق نتائج ملموسة تتجاوز توقعات عملائنا. تتميز مسيرتنا بالابتكار المستمر والتفاني في العمل والسعي الدائم نحو التميز."
        },
        vision: {
          title: "رؤيتنا",
          content: "أن نكون القوة المحركة الرائدة في التحول الرقمي، نمكّن الشركات من التألق والازدهار في العصر الرقمي من خلال حلول تسويقية مبتكرة وخدمات استثنائية ترسم معالم المستقبل."
        },
        mission: {
          title: "رسالتنا",
          content: "تحقيق نتائج استثنائية من خلال استراتيجيات تسويقية إبداعية مدعومة بالبيانات والتكنولوجيا الحديثة، نساعد عملاءنا على تجاوز أهدافهم وتحقيق الريادة في أسواقهم."
        }
      },
      whyChooseUs: {
        seeTeam: {
          title: "تعرّف على فريقنا",
          description: [
            "تعرّف على العقول المبدعة وراء نجاحاتنا",
            "كل عضو في فريقنا يجلب خبرات فريدة وشغفاً لا حدود له"
          ]
        },
        heading: {
          part1: "لماذا",
          part2: "تختار",
          part3: "لوك لايك؟"
        },
        description: "نجمع بين الإبداع والتكنولوجيا والاستراتيجية لتحقيق نتائج تتجاوز التوقعات. يرتكز نهجنا على:",
        features: [
          "استراتيجيات مبنية على تحليل البيانات",
          "إبداع يتجاوز الحدود",
          "حلول مبتكرة وفعّالة",
          "نتائج ملموسة ومضمونة",
          "فريق محترف ومتخصص",
          "تركيز كامل على نجاح عملائنا"
        ]
      },
      cta: {
        title: {
          part1: "هل أنت جاهز",
          part2: "للارتقاء",
          part3: "بحضورك",
          part4: "الرقمي؟"
        },
        description: "انضم إلى نخبة الشركات الرائدة التي حققت نجاحات متميزة بالشراكة مع لوك لايك.",
        button: "ابدأ رحلة النجاح"
      }
    },
    navigation: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      portfolio: 'أعمالنا',
      team: 'فريقنا',
      contact: 'تواصل معنا',
    },
    hero: {
      expectMore: 'توقع المزيد معنا!',
      welcome: 'مرحباً بك في لوك لايك للدعاية والتسويق',
      subtitle: 'شريكك في حلول الإعلان الإبداعية!',
      exploreMore: 'اكتشف المزيد',
      needsTitle: 'كل ما تحتاجه',
      needsDescription: 'من الهوية التجارية والتصميم الجرافيكي إلى وسائل التواصل الاجتماعي والإعلانات الرقمية والحملات الخارجية — نخطط ونصمم وننفذ استراتيجيات تجعلك ملحوظاً. حدد الأهداف، وأسند المهام، وشاهد علامتك التجارية تنمو — بسهولة تامة.'
    },
    services: {
      title: 'خدماتنا',
      socialMedia: {
        title: 'إدارة وسائل التواصل الاجتماعي',
        description: 'في عصر وسائل التواصل الاجتماعي، نبني حضور علامتك التجارية عبر جميع المنصات الرئيسية. يقوم فريقنا بإنشاء وإدارة محتوى جذاب يشرك جمهورك ويحقق النتائج، مع التركيز على استراتيجيات تحول المتابعين إلى عملاء.'
      },
      branding: {
        title: 'خدمات العلامة التجارية',
        description: 'نساعد في تأسيس وتطوير هوية علامتك التجارية من خلال التصميم والتموضع الاستراتيجي.'
      },
      mediaProduction: {
        title: {
          part1: 'الإنتاج',
          part2: 'الإعلامي'
        },
        description: "نحن نُحيي قصة علامتك التجارية من خلال إنتاج إعلامي عالي الجودة. سواء كان فيديو ترويجي، أو تصوير فوتوغرافي احتراfi، أو رسوم متحركة جذابة، فإن فريق الإنتاج لدينا يقدم صورًا مذهلة تأسر جمهورك. من المفهوم والسيناريو إلى التصوير وما بعد الإنتاج، نضمن أن كل إطار يعكس رؤية علامتك التجارية واحترافيتها.",
        fallbackTitle: "فيديو إنتاج لوكلايك",
        staticVideoTitle: "فيديو يوتيوب لوكلايك 1",
        showcase: {
          title: {
            part1: 'أعمالنا في',
            part2: 'الحركة'
          },
          description: 'نحن نُحيي القصص بجودة سينمائية وشغف إبداعي. يتم تصميم كل إطار ليأسر ويشرك ويوصل رسالتك بقوة. استكشف المزيد من أعمالنا المتحركة.',
          button: 'استكشف المزيد'
        }
      },
      outdoor: {
        title: 'الإعلانات الخارجية',
        description: 'حملات إعلانية خارجية مؤثرة تجذب الانتباه.'
      },
      socialMediaManagement: {
        title: {
          part1: 'إدارة وسائل',
          part2: 'التواصل الاجتماعي'
        },
        description: "نحن ندير منصاتك بهدف واستراتيجية - نخلق محتوى يتصل ويشرك ويحول. من التخطيط وكتابة النصوص إلى التصميم والتحليلات، يتعامل فريقنا مع كل التفاصيل للحفاظ على علامتك التجارية نشطة ومتوافقة ودائمًا في المقدمة. سواء كنت تبني الوعي أو تدفع المبيعات، فإننا نحول وسائل التواصل الاجتماعي الخاصة بك إلى محرك نمو قوي.",
        getInTouch: 'تواصل معنا !',
        staticItems: [
          {
            id: "squeeze",
            name: "حملة سكويز على وسائل التواصل الاجتماعي",
            description: "مرئيات جديدة وجريئة وموجهة نحو المنتج",
            behanceLink:
              "https://www.behance.net/gallery/202140597/SQUUSE-SOCIAL-MEDIA-CAMPAIN",
          },
          {
            id: "cariby2",
            name: "حملة كاريبي على وسائل التواصل الاجتماعي",
            description: "مصممة لتذويب الانتباه",
            behanceLink:
              "https://www.behance.net/gallery/177043275/cariby-dairy-social-media-campaign",
          },
          {
            id: "qemam",
            name: "حملة قمم على وسائل التواصل الاجتماعي",
            description: "الهندسة المعمارية تلتقي بالتصميم الواثق",
            behanceLink:
              "https://www.behance.net/gallery/165396653/QIMAM-REALESTATE-LOGO",
          },
          {
            id: "cariby",
            name: "حملة كاريبي على وسائل التواصل الاجتماعي",
            description: "مصممة لتذويب الانتباه",
            behanceLink:
              "https://www.behance.net/gallery/202139479/RATB-ALA-ALBK-SOCIAL-MEDIA-CAMPAIGN",
          },
          {
            id: "dahabia",
            name: "حملة الذهبية على وسائل التواصل الاجتماعي",
            description: "مصممة لفتح الشهية",
            behanceLink:
              "https://www.behance.net/gallery/202141925/DAHABIA-NEW-CAMPIAGN",
          },
          {
            id: "altakamol",
            name: "حملة تكامل على وسائل التواصل الاجتماعي",
            description: "الهندسة المعمارية تلتقي بالتصميم الواثق",
            behanceLink:
              "https://www.behance.net/gallery/172599549/TAKAMOL-SOCIAL-MEDIA-CAMPAIGN",
          },
        ],
        portfolio: {
          description: 'في لوكلايك، نصنع كل حملة على وسائل التواصل الاجتماعي مع الاهتمام بأدق التفاصيل - من استراتيجية المحتوى إلى التصميم المرئي ومقاييس المشاركة. استكشف المزيد من مشاريعنا في إدارة وسائل التواصل الاجتماعي.',
          button: 'استكشف المزيد'
        }
      },
      outdoorAdvertising: {
        title: {
          part1: 'الإعلانات',
          part2: 'الخارجية'
        },
        description: 'اجعل علامتك التجارية من المستحيل تجاهلها مع حلولنا للإعلانات الخارجية. من اللوحات الإعلانية وإعلانات وسائل النقل إلى أثاث الشوارع والشاشات الرقمية، نبتكر حملات مؤثرة تصل إلى جمهورك حيث يعيشون ويعملون ويلعبون.',
        getInTouch: 'تواصل معنا !',
        fallbackTitle: 'فيديو إعلانات خارجية',
        showcase: {
          title: {
            part1: 'حملات في',
            part2: 'الطبيعة'
          },
          description: 'يضمن وضعنا الاستراتيجي وتصميماتنا الإبداعية أقصى قدر من الرؤية. شاهد كيف نبرز العلامات التجارية في المقدمة من خلال حملات خارجية عالية التأثير.',
          button: 'استكشف المزيد'
        }
      },
      brandingIdentityDesign: {
        title: {
          part1: "هوية ",
          part2: "العلامة التجارية و",
          part3: " التصميم",
        },
        description:
          "هوية علامتك التجارية هي ما يميزك. نحن نصنع هويات بصرية تلتقط جوهر عملك وتضمن الاتساق عبر جميع الوسائط. يقوم فريق التصميم لدينا بإنشاء كل شيء بدءًا من الشعارات القابلة للتذكر وإرشادات العلامة التجارية الشاملة إلى ملفات تعريف الشركات الجذابة والتصميمات الرقمية اللافتة للنظر، وكلها مصممة لجعل علامتك التجارية معروفة وقوية على الفور.",
        getInTouch: "تواصل معنا !",
        staticItems: [
          {
            id: "centromall",
            name: "هوية علامة سنترومال",
            description: "عصرية. بسيطة. أجواء عائلية",
          },
          {
            id: "ihome",
            name: "هوية علامة آي هوم",
            description:
              "هوية أنيقة وعصرية تبرز أسلوب آي هوم الفريد",
          },
          {
            id: "zodiac",
            name: "هوية علامة زودياك",
            description: "مستوحاة من الطاقة الكونية والأناقة الخالدة",
          },
          {
            id: "cinnarolls",
            name: "هوية علامة سينارولز",
            description: "علامة تجارية ناعمة وحلوة وأنيقة.",
          },
          {
            id: "elmassa",
            name: "هوية علامة المسّة",
            description:
              "حادة. أنيقة. واثقة. علامة تجارية تقودها التصميم.",
          },
          {
            id: "aamen",
            name: "هوية علامة آمين",
            description: "بسيطة. آمنة. ذكية. مصممة بواسطة لوكلايك لأمين.",
          },
        ],
        footerDescription:
          "في لوكلايك، نحن نصنع كل علامة تجارية مع الاهتمام بأدق التفاصيل - من الشعار إلى الألوان ونبرة الصوت. استكشف المزيد من مشاريعنا في الهوية البصرية.",
        exploreMore: "استكشف المزيد",
      },
      seeMore: 'اكتشف المزيد',
      seeLess: 'أقل'
    },
    
    portfolio: {
      title: 'تصفح أحدث أعمالنا',
      subtitle: 'ألق نظرة على مشاريعنا الأخيرة حيث يلتقي الإبداع بالاستراتيجية.',
      ihomeProject: 'قمنا بتصميم هوية بصرية حديثة ونظيفة لـ آي هوم، تعكس تركيز العلامة التجارية على الحياة الذكية والتصميم المعاصر.',
      elmassaProject: 'تم تطوير هوية علامة تجارية راقية وحديثة تعكس الفخامة والثقة والأناقة. يلتقط التصميم مكانة العلامة التجارية المتميزة من خلال شعار متطور وطباعة أنيقة ولوحة ألوان خالدة. يضمن نظام العلامة التجارية الشامل هذا الاتساق عبر جميع نقاط الاتصال مع الحفاظ على الجمالية المتطورة التي تحدد تجربة المسّة.',
      zodiacProject: 'لقد قمنا بتطوير هوية بصرية جريئة واحترافية لشركة زودياك، تجسد جوهر الثقة والنمو والخبرة العقارية. يعكس التصميم طموح العلامة التجارية لقيادة قطاع تسويق العقارات.',
      cinnarollsProject: 'لقد قمنا بتطوير هوية بصرية جريئة واحترافية لسينارولز، تجسد دفء وراحة المخبوزات الطازجة. يجمع التصميم بين العناصر المرحة والتنفيذ الاحترافي، مما يخلق علامة تجارية تبدو ودودة ومتميزة في نفس الوقت. شمل نهجنا الشامل تصميم الشعار ومفاهيم التعبئة والتغليف وإرشادات العلامة التجارية التي تعكس الجودة الحرفية والتجربة اللذيذة التي تمثلها سينارولز.',
      centromallProject: 'هوية علامة تجارية حديثة ونظيفة لسنترو مول، تعكس تركيز العلامة التجارية على التسوق العائلي وتجربة البيع بالتجزئة المعاصرة.'
    },
    team: {
      title: 'تعرف على فريقنا الإبداعي',
      members: {
        ceo: 'حسن إدريس | المؤسس / الرئيس التنفيذي',
        artDirector: 'نجوى صلاح | المدير الفني',
        accountant: 'محمد الديب | المحاسب'
      }
    },
    whyUs: {
      title: 'لماذا تختارنا لاحتياجاتك التسويقية؟',
      description: 'في لوك لايك، نحن لا نقوم بالتسويق فحسب — بل نبني قصص نجاح. من خلال مزيج من الإبداع والخبرة ورؤية السوق، نصمم حملات قوية مخصصة لكل علامة تجارية. فريقنا ملتزم بتقديم نتائج حقيقية من خلال حلول إعلانية وتسويقية ذكية ومؤثرة.'
    },
    companies: {
      title: 'نحظى بثقة الشركات الأكثر ابتكارًا',
      list: ['Babel', 'iHome', 'Al Rehab Development', 'El Massa', 'Villarose', 'Plaza Street', 'Zodiac', 'RE/MAX']
    },
    footer: {
      getInTouch: '!تواصل معنا',
      contact: {
        email: 'info@looklike.adv',
        phone: '+971505045287',
        address: 'Dubai Investment Park - Dubai'
      },
      copyright: '© 2025 LookLike. All rights reserved.'
    },
    contactUsMain: {
      title: {
        part1: "لماذا تختارنا",
        part2: "لتلبية احتياجاتك",
        part3: "التسويقية",
        part4: "؟"
      },
      description: "في لوك لايك، نحن لا نسوق فقط - بل نبني قصص نجاح. بمزيج من الإبداع والخبرة ورؤية السوق، نصنع حملات قوية مصممة خصيصًا لكل علامة تجارية. فريقنا مكرس لتقديم نتائج حقيقية من خلال حلول إعلانية وتسويقية ذكية ومؤثرة.",
      form: {
        title: "تواصل معنا",
        description: "هل تريد الارتقاء بعلامتك التجارية أو لديك استفسار تجاري؟ املأ النموذج أدناه، وسيتواصل معك فريقنا لمناقشة كيف يمكننا المساعدة في تحقيق أهدافك التسويقية.",
        name: "اسمك",
        email: "بريدك الإلكتروني",
        message: "رسالتك",
        button: "إرسال الرسالة",
        sending: "جاري الإرسال...",
        success: "شكراً لتواصلك معنا! سنرد عليك قريباً.",
        error: "عذراً، حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى."
      }
    },
    mediaProduction: {
      title: {
        part1: 'الإنتاج',
        part2: 'الإعلامي'
      },
      description: "نحن نُحيي قصة علامتك التجارية من خلال إنتاج إعلامي عالي الجودة. سواء كان فيديو ترويجي، أو تصوير فوتوغرافي احترافي، أو رسوم متحركة جذابة، فإن فريق الإنتاج لدينا يقدم صورًا مذهلة تأسر جمهورك. من المفهوم والسيناريو إلى التصوير وما بعد الإنتاج، نضمن أن كل إطار يعكس رؤية علامتك التجارية واحترافيتها.",
      fallbackTitle: "فيديو إنتاج لوكلايك",
      staticVideoTitle: "فيديو يوتيوب لوكلايك 1",
      showcase: {
        title: {
          part1: 'أعمالنا في',
          part2: 'الحركة'
        },
        description: 'نحن نُحيي القصص بجودة سينمائية وشغف إبداعي. يتم تصميم كل إطار ليأسر ويشرك ويوصل رسالتك بقوة. استكشف المزيد من أعمالنا المتحركة.',
        button: 'استكشف المزيد'
      }
    },
    socialMediaManagement: {
      title: {
        part1: 'إدارة وسائل',
        part2: 'التواصل الاجتماعي'
      },
      description: "نحن ندير منصاتك بهدف واستراتيجية - نخلق محتوى يتصل ويشرك ويحول. من التخطيط وكتابة النصوص إلى التصميم والتحليلات، يتعامل فريقنا مع كل التفاصيل للحفاظ على علامتك التجارية نشطة ومتوافقة ودائمًا في المقدمة. سواء كنت تبني الوعي أو تدفع المبيعات، فإننا نحول وسائل التواصل الاجتماعي الخاصة بك إلى محرك نمو قوي.",
      getInTouch: 'تواصل معنا !',
      staticItems: [
        {
          id: "squeeze",
          name: "حملة سكويز على وسائل التواصل الاجتماعي",
          description: "مرئيات جديدة وجريئة وموجهة نحو المنتج",
          behanceLink:
            "https://www.behance.net/gallery/202140597/SQUUSE-SOCIAL-MEDIA-CAMPAIN",
        },
        {
          id: "cariby2",
          name: "حملة كاريبي على وسائل التواصل الاجتماعي",
          description: "مصممة لتذويب الانتباه",
          behanceLink:
            "https://www.behance.net/gallery/177043275/cariby-dairy-social-media-campaign",
        },
        {
          id: "qemam",
          name: "حملة قمم على وسائل التواصل الاجتماعي",
          description: "الهندسة المعمارية تلتقي بالتصميم الواثق",
          behanceLink:
            "https://www.behance.net/gallery/165396653/QIMAM-REALESTATE-LOGO",
        },
        {
          id: "cariby",
          name: "حملة كاريبي على وسائل التواصل الاجتماعي",
          description: "مصممة لتذويب الانتباه",
          behanceLink:
            "https://www.behance.net/gallery/202139479/RATB-ALA-ALBK-SOCIAL-MEDIA-CAMPAIGN",
        },
        {
          id: "dahabia",
          name: "حملة الذهبية على وسائل التواصل الاجتماعي",
          description: "مصممة لفتح الشهية",
          behanceLink:
            "https://www.behance.net/gallery/202141925/DAHABIA-NEW-CAMPIAGN",
        },
        {
          id: "altakamol",
          name: "حملة تكامل على وسائل التواصل الاجتماعي",
          description: "الهندسة المعمارية تلتقي بالتصميم الواثق",
          behanceLink:
            "https://www.behance.net/gallery/172599549/TAKAMOL-SOCIAL-MEDIA-CAMPAIGN",
        },
      ],
      portfolio: {
        description: 'في لوكلايك، نصنع كل حملة على وسائل التواصل الاجتماعي مع الاهتمام بأدق التفاصيل - من استراتيجية المحتوى إلى التصميم المرئي ومقاييس المشاركة. استكشف المزيد من مشاريعنا في إدارة وسائل التواصل الاجتماعي.',
        button: 'استكشف المزيد'
      }
    },
    outdoorAdvertising: {
      title: {
        part1: 'الإعلانات',
        part2: 'الخارجية'
      },
      description: 'اجعل علامتك التجارية من المستحيل تجاهلها مع حلولنا للإعلانات الخارجية. من اللوحات الإعلانية وإعلانات وسائل النقل إلى أثاث الشوارع والشاشات الرقمية، نبتكر حملات مؤثرة تصل إلى جمهورك حيث يعيشون ويعملون ويلعبون.',
      getInTouch: 'تواصل معنا !',
      fallbackTitle: 'فيديو إعلانات خارجية',
      showcase: {
        title: {
          part1: 'حملات في',
          part2: 'الطبيعة'
        },
        description: 'يضمن وضعنا الاستراتيجي وتصميماتنا الإبداعية أقصى قدر من الرؤية. شاهد كيف نبرز العلامات التجارية في المقدمة من خلال حملات خارجية عالية التأثير.',
        button: 'استكشف المزيد'
      }
    },
    brandingIdentityDesign: {
      title: {
        part1: "هوية ",
        part2: "العلامة التجارية و",
        part3: " التصميم",
      },
      description:
        "هوية علامتك التجارية هي ما يميزك. نحن نصنع هويات بصرية تلتقط جوهر عملك وتضمن الاتساق عبر جميع الوسائط. يقوم فريق التصميم لدينا بإنشاء كل شيء بدءًا من الشعارات القابلة للتذكر وإرشادات العلامة التجارية الشاملة إلى ملفات تعريف الشركات الجذابة والتصميمات الرقمية اللافتة للنظر، وكلها مصممة لجعل علامتك التجارية معروفة وقوية على الفور.",
      getInTouch: "تواصل معنا !",
      staticItems: [
        {
          id: "centromall",
          name: "هوية علامة سنترومال",
          description: "عصرية. بسيطة. أجواء عائلية",
        },
        {
          id: "ihome",
          name: "هوية علامة آي هوم",
          description:
            "هوية أنيقة وعصرية تبرز أسلوب آي هوم الفريد",
        },
        {
          id: "zodiac",
          name: "هوية علامة زودياك",
          description: "مستوحاة من الطاقة الكونية والأناقة الخالدة",
        },
        {
          id: "cinnarolls",
          name: "هوية علامة سينارولز",
          description: "علامة تجارية ناعمة وحلوة وأنيقة.",
        },
        {
          id: "elmassa",
          name: "هوية علامة المسّة",
          description:
            "حادة. أنيقة. واثقة. علامة تجارية تقودها التصميم.",
        },
        {
          id: "aamen",
          name: "هوية علامة آمين",
          description: "بسيطة. آمنة. ذكية. مصممة بواسطة لوكلايك لأمين.",
        },
      ],
      footerDescription:
        "في لوكلايك، نحن نصنع كل علامة تجارية مع الاهتمام بأدق التفاصيل - من الشعار إلى الألوان ونبرة الصوت. استكشف المزيد من مشاريعنا في الهوية البصرية.",
      exploreMore: "استكشف المزيد",
    },
    ourTeamMain: {
      title: {
        part1: "تعرف على",
        part2: "فريقنا الإبداعي",
      },
      cta: {
        title: {
          part1: "لماذا تختارنا",
          part2: "لتلبية احتياجاتك",
          part3: "التسويقية؟",
          part4: "",
        },
        description: "في لوكلايك، نحن لا نسوق فقط - بل نبني قصص نجاح. بمزيج من الإبداع والخبرة ورؤية السوق، نصنع حملات قوية مصممة خصيصًا لكل علامة تجارية. فريقنا مكرس لتقديم نتائج حقيقية من خلال حلول إعلانية وتسويقية ذكية ومؤثرة.",
        button: "تواصل معنا !",
      },
    }
  }
};