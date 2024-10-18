import Icon from "@/components/Icon";
import Artwork from "../Artwork";

export default function Jace() {
  return (
    <>
      <h3>Logo</h3>
      <Artwork
        imageURL="/img/logo/jace.png"
        alt="Jace Horizontal Logo"
        caption="Horizaontal Logo"
      />
      <Artwork
        imageURL="/img/logo/jace-vertical.png"
        alt="Jace Vertical Logo"
        caption="Vertical Logo"
      />
      <h3>Business Card</h3>
      <Artwork
        imageURL="/img/artwork/jace-card-front.jpg"
        alt="Jace Business Card Front"
        caption="Business Card Front"
      />
      <Artwork
        imageURL="/img/artwork/jace-card-back.jpg"
        alt="Jace Business Card Back"
        caption="Business Card Back"
      />
    </>
  );
}
