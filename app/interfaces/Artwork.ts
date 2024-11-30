export default interface Artwork {
  caption?: string | undefined;
  imageURL: string;
  alt: string;
  width?: number | undefined;
  height?: number | undefined;
  bgColor?: string | undefined;
}
