import Icon from "@/components/Icon";
import Artwork from "../Artwork";

export default function CanterburyHomes() {
  return (
    <>
      <h2>Process</h2>
      <p>
        The signage was designed by{" "}
        <a
          href="https://www.adobe.com/ca/products/photoshop.html"
          target="_blank"
        >
          Adobe Photoshop
          <Icon name="external-link" />
        </a>{" "}
        and the website was created using{" "}
        <a href="https://wordpress.com/" target="_blank">
          Wordpress
          <Icon name="external-link" />
        </a>
        .
      </p>
      <h3>Billboard</h3>
      <p>
        The purpose for the billboard was to alert future customers that the
        restaurant was finally open. The daily impressions were <b>10,000+</b>{" "}
        per day as the billboard was located in a major interaction.
      </p>
      <Artwork
        imageURL="/img/artwork/yasmines-billboard.jpg"
        alt="Yasmine's Billboard"
        caption="Billboard design"
      />
      <h3>Website</h3>
      <p>
        The main users of the website would be customers who would want to get
        more information about the restaurant like menu items or hours.
      </p>
      <p>
        I decided to use Wordpress since the client wanted to edit the content
        after the completion of this project.{" "}
        <a href="https://www.godaddy.com/" target="_blank">
          GoDaddy
          <Icon name="external-link" />
        </a>{" "}
        was used for domain and hosting. A Wordpress template was purchased and
        then altered to better fit the information.
      </p>
      <p>
        The color branding was used throughout the site to better inforce its
        identity.
      </p>
      <Artwork
        imageURL="/img/artwork/yasmines-landing-screenshot.jpg"
        alt="Yasmine's Landing page"
        caption="Yasmine's Landing Page (Desktop) Screenshot"
      />
      <p>
        Instead of using a PDF to showcase the menu, I decided to convert it to
        HTML code for better accessibility and SEO.
      </p>
      <Artwork
        imageURL="/img/artwork/yasmines-menu-screenshot.jpg"
        alt="Yasmine's Menu"
        caption="Yasmine's Menu Page (Desktop) Screenshot"
      />
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
          <a href="https://aioseo.com/" target="_blank">
            All in One SEO (Plugin)
            <Icon name="external-link" />
          </a>
        </li>
        <li>
          <a href="https://wpforms.com/" target="_blank">
            WP Forms (Plugin)
            <Icon name="external-link" />
          </a>
        </li>
      </ul>
    </>
  );
}
