import Link from "next/link";
import Icon from "../Icon";
import { Button } from "../ui/button";
import Artwork from "../Artwork";

export default function ForestCityRamadan() {
  return (
    <>
      <p>
        The magazine was later renamed to&nbsp;
        <Link href="/work/forest-city-muslim">Forest City Muslim</Link> due
        overwhelming positive responses which prompted to have the magazine be
        presented outside of the month of Ramadan.
      </p>
      <h2>Process</h2>
      <p>
        The magazines were designed and created in&nbsp;
        <a
          href="https://www.adobe.com/ca/products/indesign.html"
          target="_blank"
        >
          Adobe InDesign
          <Icon name="external-link" />
        </a>
        . All assets including certain ads within the magazine were created
        in&nbsp;
        <a
          href="https://www.adobe.com/ca/products/photoshop.html"
          target="_blank"
        >
          Adobe Photoshop
          <Icon name="external-link" />
        </a>
        . The logo was designed in&nbsp;
        <a
          href="https://www.adobe.com/ca/products/illustrator.html"
          target="_blank"
        >
          Adobe Illustrator
          <Icon name="external-link" />
        </a>
        . The cover photos and certain headshots were taken by me using a Canon
        EOS 80D DSLR.
      </p>
      <h3>Magazine</h3>
      <p>
        Created and designed 2 print magazine issues (
        <Link
          href="https://issuu.com/forestcitylondon/docs/forest_city_ramadan_magazine"
          target="_blank"
        >
          Ramadan 2020
          <Icon name="external-link" />
        </Link>
        &nbsp;and&nbsp;
        <Link
          href="https://issuu.com/forestcitylondon/docs/fcr_eid_edition"
          target="_blank"
        >
          Eid 2020
          <Icon name="external-link" />
        </Link>
        ). Printed over 1000+ issues each that were distributed to local stores
        for free pick up. The magazine size would be 11 x 8.5 inches and be
        around 40 pages in length.
      </p>
      <p>The magazines included:</p>
      <ul className="list-disc list-inside">
        <li>Ads from local businesses and politicians</li>
        <li>Articles written by members of the community and surrounding </li>
        <li>
          Interviews with celebrities such as Nazim Kadri (NHL Player) and Ilyas
          Mao (Musical Artist)
        </li>
        <li>Book Reviews</li>

        <li>Recipes</li>
      </ul>

      <Artwork
        imageURL="/img/artwork/work/fcr-magazine.jpg"
        alt="Forest City Ramadan Magazine"
        caption="Left: Ramadan 2020 | Right: Eid 2020"
      />
      <h3>Logo</h3>
      <p>
        The font used was a serif typeface to create a professional and
        reputable feeling.
      </p>
      <Artwork
        imageURL="/img/artwork/work/fcr-logo-mockup.jpg"
        alt="Forest City Ramadan Magazine"
        caption="Left: Primary Logo | Right: Alternate Logo"
      />
    </>
  );
}
