import Icon from "@/components/Icon";
import Artwork from "../Artwork";

export default function ShraimsSweets() {
  return (
    <>
      <h2>Process</h2>
      <p>
        The logo, dessert icons, wallpaper, and packaging were designed and
        created in&nbsp;
        <a
          href="https://www.adobe.com/ca/products/illustrator.html"
          target="_blank"
        >
          Adobe Illustrator
          <Icon name="external-link" />
        </a>
        .
      </p>
      <h3>Logo</h3>
      <Artwork
        imageURL="/img/artwork/shraimssweets-logo.jpg"
        alt="Shraim's Sweets Logo"
        caption="Shraim's Sweets Logo"
      />
      <h3>Packaging</h3>
      <Artwork
        imageURL="/img/artwork/shraimssweets-box.jpg"
        alt="Shraim's Sweets Box Mockup"
        caption="Box Mockup"
      />

      <Artwork
        imageURL="/img/artwork/shraimssweets-bigbox.jpg"
        alt="Shraim's Sweets Big Box Mockup"
        caption="Big Box Mockup"
      />
      <Artwork
        imageURL="/img/artwork/shraimssweets-familybox.jpg"
        alt="Shraim's Sweets Family Box Mockup"
        caption="Family Box Mockup"
      />
      <Artwork
        imageURL="/img/artwork/shraimssweets-bag.jpg"
        alt="Shraim's Sweets Bag Mockup"
        caption="Bag Mockup"
      />
      <h3>Wallpaper</h3>
      <Artwork
        imageURL="/img/artwork/shraimssweets-wall2.png"
        alt="Shraim's Sweets Main Wall"
        caption="Main Wallpaper"
      />
      <Artwork
        imageURL="/img/artwork/shraimssweets-wall1.png"
        alt="Shraim's Sweets Wall"
        caption="Side Wallpaper"
      />
    </>
  );
}
