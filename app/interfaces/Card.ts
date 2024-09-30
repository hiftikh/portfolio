export default interface Card {
  id: number;
  show: boolean;
  name: string;
  slug: string;
  componentName?: string;
  description?: string;
  url?: string;
  img: {
    logo?: {
      url?: string;
      alt?: string;
    };
    banner?: {
      url?: string;
      alt?: string;
    };
    artwork?: Array<{
      url?: string;
      alt?: string;
      caption?: string;
    }>;
  };
  keywords?: string[];
  dateAdded?: string;
}
