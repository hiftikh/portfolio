import Icon from "@/components/Icon";
import Artwork from "../Artwork";

export default function CanterburyHomes() {
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
        The main users of the website would be future homeowners who would want
        to get more information the Canterbury Homes project.
      </p>
      <p>
        Since this was a &quot;Coming Soon&quot; project, only the contact
        information was provided. The clear choice was to create a landing page
        that showed the logo, &quot;Coming Soon&quot; text, and contact
        information.
      </p>
      <p>
        &nbsp; The client was already hosting other websites on&nbsp;
        <a href="https://www.godaddy.com/" target="_blank">
          GoDaddy
          <Icon name="external-link" />
        </a>
        , so I decided to stick with it for hosting and domain.
      </p>
      <p>
        A Wordpress template was purchased and then altered to better fit the
        minimal information.
      </p>
      <p>The following tools were used:</p>
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
      </ul>
      <Artwork
        imageURL="/img/artwork/work/canterbury-webpage-screenshot.jpg"
        alt="Canterbury Homes Webpage"
        caption="Canterbury Homes Website (Desktop) Screenshot"
      />
    </>
  );
}
