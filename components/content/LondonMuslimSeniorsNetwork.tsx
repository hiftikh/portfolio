import Icon from "@/components/Icon";
import Artwork from "../Artwork";

export default function LondonMuslimSeniorsNetwork() {
  return (
    <>
      <h2>Process</h2>
      <p>
        The logo was designed in{" "}
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
      <p>
        The font selected was a Sans Serif typeface to signify a friendly and
        modern design. This allowed for the font to be easily accessible and
        readable espically among senior citizens. The dark green color
        symbolizes growth.
      </p>
      <h3>Icon</h3>
      <p>
        Blooming flowers usually symbolizes support and growth. The individual
        leafs represents the senior members in the community. As you get closer
        to the center, the stronger they become as a community.
      </p>
      <Artwork
        imageURL="/img/artwork/lmsn-logo.png"
        alt="London Muslim Seniors Network Logo"
        caption="London Muslim Seniors Network Logo"
      />
    </>
  );
}
