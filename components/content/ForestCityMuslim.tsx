import Link from "next/link";
import Icon from "../Icon";
import { Button } from "../ui/button";
import Artwork from "../Artwork";

export default function ForestCityMuslim() {
  return (
    <>
      <p>
        The magazine was previously named&nbsp;
        <Link href="/work/forest-city-ramadan">Forest City Ramadan</Link> due
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
        . Some of the cover photos and headshots were taken by me using a Canon
        EOS 80D DSLR.
      </p>
      <h3>Magazine</h3>
      <p>
        Created and designed 4 print magazine issues (
        <Link
          href="https://issuu.com/forestcitylondon/docs/fcm_eid_edition"
          target="_blank"
        >
          Eid ul-Adha 2020
          <Icon name="external-link" />
        </Link>
        ,&nbsp;
        <Link
          href="https://issuu.com/forestcitylondon/docs/fcm_winter_2021"
          target="_blank"
        >
          Winter 2021
          <Icon name="external-link" />
        </Link>
        ,&nbsp;
        <Link
          href="https://issuu.com/forestcitylondon/docs/fcm_ramadan_2021_61875a3ebcbd64"
          target="_blank"
        >
          Ramadan 2021
          <Icon name="external-link" />
        </Link>
        , and&nbsp;
        <Link
          href="https://issuu.com/forestcitylondon/docs/fcm_eid_2021"
          target="_blank"
        >
          Eid ul-Fitr 2021
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
        <li>Book Reviews</li>
        <li>Recipes</li>
      </ul>

      <Artwork
        imageURL="/img/artwork/work/fcm-magazines.jpg"
        alt="Forest City Muslim Magazines"
        caption="Left to Right: Eid ul-Adha 2020,  Winter 2021, Ramadan 2021, and Eid ul-Fitr 2021"
      />
      <h3>Logo</h3>
      <p>
        The font used was a sans-serif typeface to create a clean and modern
        feeling.
      </p>
      <Artwork
        imageURL="/img/artwork/work/fcm-logo-mockup.jpg"
        alt="Forest City Ramadan Magazine"
        caption="Left: Primary Logo | Right: Alternate Logo"
      />
    </>
  );
}
