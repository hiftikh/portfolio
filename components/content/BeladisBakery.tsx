import Artwork from "../Artwork";
import Icon from "../Icon";

export default function BeladisBakery() {
  return (
    <>
      <h2>Process</h2>
      <p>
        The menus and graphics were created in&nbsp;
        <a
          href="https://www.adobe.com/ca/products/photoshop.html"
          target="_blank"
        >
          Adobe Photoshop
          <Icon name="external-link" />
        </a>
        &nbsp; and the video of the slide animation was created in&nbsp;
        <a href="https://www.adobe.com/products/premiere.html" target="_blank">
          Adobe Premiere Pro
          <Icon name="external-link" />
        </a>
        .
      </p>
      <h3>TV Menus</h3>
      <p>
        Created 3 animated video menus for 3 seperate TV screens(left, center,
        and right).
      </p>

      <Artwork
        imageURL="/img/artwork/beladis-leftscreen.png"
        alt="TV Menu"
        caption="TV Menu (Left Screen)"
        bgColor="bg-slate-700"
      />

      <Artwork
        imageURL="/img/artwork/beladis-centerscreen.png"
        alt="TV Menu"
        caption="TV Menu (Center Screen)"
        bgColor="bg-slate-700"
      />
      <Artwork
        imageURL="/img/artwork/beladis-rightscreen.png"
        alt="TV Menu"
        caption="TV Menu (Right Screen)"
        bgColor="bg-slate-700"
      />
    </>
  );
}
