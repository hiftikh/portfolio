export default interface Card {
  id: number;
  name: string;
  description: string;
  slug: string;
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
  };
  keywords: string[];
}
