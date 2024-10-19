import Icon from "@/components/Icon";
import Artwork from "../Artwork";
import Link from "next/link";

export default function Westdell() {
  return (
    <>
      <h2>Process</h2>
      <p>
        The website was created using&nbsp;
        <a href="https://wordpress.com/" target="_blank">
          Wordpress
          <Icon name="external-link" />
        </a>
        .
      </p>
      <h3>Website</h3>
      <p>
        The main users of the website would be future investors or the general
        public who would want to get more information about Westdell and their
        properties.
      </p>
      <p>
        A realtor Wordpress template was purchased and then altered to better
        fit the information. A "Recently Added Property" section was added to
        the homepage.
      </p>

      <p>The following tools/plugins were used:</p>
      <ul className="list-disc list-inside">
        <li>
          <a
            href="https://marketingplatform.google.com/about/analytics/"
            target="_blank"
          >
            Google Analytics
            <Icon name="external-link" />
          </a>
        </li>
        <li>
          <a
            href="https://search.google.com/search-console/about"
            target="_blank"
          >
            Google Search Console
            <Icon name="external-link" />
          </a>
        </li>
        <li>
          <a href="https://yoast.com/wordpress/plugins/seo/" target="_blank">
            Yoast SEO (Plugin)
            <Icon name="external-link" />
          </a>
        </li>
      </ul>
      <Artwork
        imageURL="/img/artwork/work/westdell-website-screenshot.jpg"
        alt="Westdell Webpage"
        caption="Westdell Website (Desktop) Screenshot"
      />
      <Artwork
        imageURL="/img/artwork/work/westdell-property-screenshot.jpg"
        alt="Westdell Property Webpage"
        caption="Westdell Property (Desktop) Screenshot"
      />
      <p>
        Checkout other property projects websites I worked with Westdell:&nbsp;
        <Link href="/work/canterbury-homes">Canterbury Homes</Link> and&nbsp;
        <Link href="/work/edgewood-estates">Edgewood Estates</Link>.
      </p>
    </>
  );
}
