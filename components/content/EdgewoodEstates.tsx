import Icon from "@/components/Icon";
import Artwork from "../Artwork";

export default function EdgewoodEstates() {
  return (
    <>
      <h2>Process</h2>
      <p>
        The website was created using{" "}
        <a href="https://wordpress.com/" target="_blank">
          Wordpress
          <Icon name="external-link" />
        </a>
        .
      </p>
      <h3>Website</h3>
      <p>
        The main users of the website would be future homeowners who would want
        to get more information about the builder and the Edgewood Estates
        project.
      </p>
      <p>
        Since this was just a simple landing page with minor information, I
        decided to create a single page website. The client was already hosting
        other websites on{" "}
        <a href="https://www.godaddy.com/" target="_blank">
          GoDaddy
          <Icon name="external-link" />
        </a>
        , so I decided to stick with it for hosting and domain.
      </p>
      <p>
        A Wordpress template was purchased and then altered to better fit the
        information.
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
        <li>
          <a
            href="https://en-ca.wordpress.org/plugins/contact-form-7/"
            target="_blank"
          >
            Contact Form 7 (Plugin)
            <Icon name="external-link" />
          </a>
        </li>
      </ul>
      <Artwork
        imageURL="/img/artwork/edgewood-webpage-screenshot.jpg"
        alt="Edgewood Estates Webpage"
        caption="Edgewood Estates Website (Desktop) Screenshot"
      />
    </>
  );
}
