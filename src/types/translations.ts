export type NavigationItemTitle = string | { part1: string; part2: string; };

export interface Translation {
  aboutUsMain: {
    hero: {
      title: {
        innovative: string;
        outstanding: string;
        results: string;
      };
      description: string;
      button: string;
    };
    companies: {
      title: string;
    };
    sections: {
      story: {
        title: string;
        content: string;
      };
      vision: {
        title: string;
        content: string;
      };
      mission: {
        title: string;
        content: string;
      };
    };
    whyChooseUs: {
      seeTeam: {
        title: string;
        description: Array<string>;
      };
      heading: {
        part1: string;
        part2: string;
        part3: string;
      };
      description: string;
      features: Array<string>;
    };
    cta: {
      title: {
        part1: string;
        part2: string;
        part3: string;
        part4: string;
      };
      description: string;
      button: string;
    };
  };
  navigation: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    team: string;
    contact: string;
  };
  contactUsMain: {
    title: {
      part1: string;
      part2: string;
      part3: string;
      part4: string;
    };
    description: string;
    form: {
      title: string;
      description: string;
      name: string;
      email: string;
      message: string;
      button: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  mediaProduction: {
    title: {
      part1: string;
      part2: string;
    };
    description: string;
    fallbackTitle: string;
    staticVideoTitle: string;
    showcase: {
      title: {
        part1: string;
        part2: string;
      };
      description: string;
      button: string;
    };
  };
  socialMediaManagement: {
    title: {
      part1: string;
      part2: string;
    };
    description: string;
    getInTouch: string;
    staticItems: Array<{
      id: string;
      name: string;
      description: string;
      behanceLink: string;
    }>;
    portfolio: {
      description: string;
      button: string;
    };
  };
  outdoorAdvertising: {
    title: {
      part1: string;
      part2: string;
    };
    description: string;
    getInTouch: string;
    fallbackTitle: string;
    showcase: {
      title: {
        part1: string;
        part2: string;
      };
      description: string;
      button: string;
    };
  };
  brandingIdentityDesign: {
    title: {
      part1: string;
      part2: string;
      part3: string;
    };
    description: string;
    getInTouch: string;
    staticItems: Array<{
      id: string;
      name: string;
      description: string;
    }>;
    footerDescription: string;
    exploreMore: string;
  };
  hero: {
    expectMore: string;
    welcome: string;
    subtitle: string;
    exploreMore: string;
    needsTitle: string;
    needsDescription: string;
  };
  services: {
    title: string;
    socialMedia: {
      title: string;
      description: string;
    };
    branding: {
      title: string;
      description: string;
    };
    mediaProduction: {
      title: {
        part1: string;
        part2: string;
      };
      description: string;
      fallbackTitle: string;
      staticVideoTitle: string;
      showcase: {
        title: {
          part1: string;
          part2: string;
        };
        description: string;
        button: string;
      };
    };
    outdoor: {
      title: string;
      description: string;
    };
    outdoorAdvertising: {
      title: {
        part1: string;
        part2: string;
      };
      description: string;
      getInTouch: string;
      fallbackTitle: string;
      showcase: {
        title: {
          part1: string;
          part2: string;
        };
        description: string;
        button: string;
      };
    };
    socialMediaManagement: {
      title: {
        part1: string;
        part2: string;
      };
      description: string;
      getInTouch: string;
      staticItems: {
        id: string;
        name: string;
        description: string;
        behanceLink: string;
      }[];
      portfolio: {
        description: string;
        button: string;
      };
    };
    brandingIdentityDesign: {
      title: {
        part1: string;
        part2: string;
        part3: string;
      };
      description: string;
      getInTouch: string;
      staticItems: {
        id: string;
        name: string;
        description: string;
      }[];
      footerDescription: string;
      exploreMore: string;
    };
    seeMore: string;
  };
  ourTeamMain: {
    title: {
      part1: string;
      part2: string;
    };
    cta: {
      title: {
        part1: string;
        part2: string;
        part3: string;
        part4: string;
      };
      description: string;
      button: string;
    };
  };
  companies: {
    title: string;
    list: string[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    ihomeProject: string;
  };
  team: {
    title: string;
    members: {
      ceo: string;
      artDirector: string;
      accountant: string;
    };
  };
  whyUs: {
    title: string;
    description: string;
  };
  footer: {
    getInTouch: string;
    contact: {
      email: string;
      phone: string;
      address: string;
    };
    copyright: string;
  };
}

export type Translations = {
  en: Translation;
  ar: Translation;
};