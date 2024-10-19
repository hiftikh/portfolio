import Icon from "@/components/Icon";
import Artwork from "../Artwork";

export default function Lionheart() {
  return (
    <>
      <h2>Process</h2>
      <p>
        The logo was created using&nbsp;
        <a
          href="https://www.adobe.com/ca/products/illustrator.html"
          target="_blank"
        >
          Adobe Illustrator
          <Icon name="external-link" />
        </a>
        &nbsp; and the website with&nbsp;
        <a href="https://wordpress.com/" target="_blank">
          Wordpress
          <Icon name="external-link" />
        </a>
        .
      </p>
      <h3>Logo</h3>
      <p>
        The client had provided a rough sketch on paper of what they wanted the
        logo to like. The choice of the color red was inspired by the word
        &quot;Heart&quot; in the wordmark logo.
      </p>
      <Artwork
        imageURL="/img/artwork/work/lionheart-logo-mock-up.png"
        alt="Lionheart Logo Mock Up"
        caption="Top: Primary Logo | Bottom: Alternate Logo"
      />
      <h3>Website</h3>
      <p>
        The website would be used by potional customers to look at the
        client&apos;s artwork, learn about tattoo care, and/or being able to
        contact the business with ease. Having this in mind, I decided to create
        a simple website.
      </p>
      <p>
        Since the client wanted to do their own updates after the completion of
        this work, I decided to go with EasyWP(Managed WordPress Hosting)
        by&nbsp;
        <a href="https://www.namecheap.com/" target="_blank">
          Namecheap
          <Icon name="external-link" />
        </a>
        . The reason why I went with NameCheap is because they offer free SSL
        and Supersonic CDN.
      </p>
      <p>
        A basic Wordpress template was purchased and then modified to meet the
        needs of the business.
      </p>
      <p>The following tools were added:</p>
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
        imageURL="/img/artwork/work/lionheart-webpage.jpg"
        alt="Lionheart Webpage"
        caption="Lionheart Webpage"
      />
    </>
  );
}
