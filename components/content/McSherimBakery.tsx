import Icon from "@/components/Icon";
import Artwork from "../Artwork";

export default function McSherimBakery() {
  return (
    <>
      <h2>Process</h2>
      <p>
        The logo and sticker were created in&nbsp;
        <a
          href="https://www.adobe.com/ca/products/illustrator.html"
          target="_blank"
        >
          Adobe Illustrator
          <Icon name="external-link" />
        </a>
        &nbsp; and&nbsp;
        <a
          href="https://www.adobe.com/ca/products/photoshop.html"
          target="_blank"
        >
          Adobe Photoshop
          <Icon name="external-link" />
        </a>
        &nbsp; respectively.
      </p>
      <h3>Logo</h3>
      <Artwork
        imageURL="/img/artwork/mcsherim-logo.jpg"
        alt="McSherim Logo"
        caption="McSherim Logo"
      />
      <h3>Sticker</h3>
      <p>The sticker would be placed on a plastic bag containing pita bread.</p>
      <Artwork
        imageURL="/img/artwork/mcsherim-sticker.jpg"
        alt="McSherim Sticker"
        caption="McSherim Sticker"
      />
    </>
  );
}
