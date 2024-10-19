export default interface Data {
  show: boolean;
  name: string;
  slug?: string;
  description?: string;
  componentName?: string;
  url?: {
    site?: string;
    github?: string;
  };
  img: {
    logo?: {
      url?: string;
      alt?: string;
    };
    banner?: {
      url?: string;
      alt?: string;
    };
  };
  keywords?: string[];
  dateAdded?: string;
}
