export default interface Card {
  id: number;
  show: boolean;
  name: string;
  slug: string;
  description: {
    company: string;
    whatIDid: string[];
  };
  url: string;
  img: {
    logo: {
      url: string;
      alt: string;
    };
    banner: {
      url: string;
      alt: string;
    };
    artwork: [
      {
        url: string;
        alt: string;
        caption: string;
      }
    ];
  };
  keywords: string[];
  dateAdded: string;
}
