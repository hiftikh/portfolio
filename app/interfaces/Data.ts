export default interface Data {
  id: number;
  show: boolean | null;
  name: string | null;
  description?: string | null;
  componentName?: string | null;
  url?: {
    slug?: string | null;
    site?: string | null;
    github?: string | null;
  };
  img: {
    logo?: {
      url?: string | null;
      alt?: string | null;
    };
    banner?: {
      url?: string | null;
      alt?: string | null;
    };
  };
  keywords?: string[] | null;
  dateAdded?: string | null;
}
