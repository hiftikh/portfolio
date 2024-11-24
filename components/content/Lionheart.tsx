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
        Using a rough sketch that the client had provided on paper for what they
        wanted their logo to resemble, I developed a few different mockups. I
        selected the color red based on the word &quot;Heart&quot; in the
        wordmark logo. The bold line work and weight is meant to inspire
        confidence and trust.
      </p>
      <Artwork
        imageURL="/img/artwork/work/lionheart-logo-mock-up.png"
        alt="Lionheart Logo Mock Up"
        caption="Top: Primary Logo | Bottom: Alternate Logo"
      />
      <h3>Website</h3>
      <p>
        The website would be accessed by potential customers to view the
        tattooers&apos; artwork and portfolios, learn about tattoo care, and/or
        contact the business with ease. My client wanted to be able to update
        the website easily themselves.
      </p>
      <p>
        With that in mind, I decided to create a simple website using EasyWP
        (Managed WordPress Hosting) by{" "}
        <a href="https://www.namecheap.com/" target="_blank">
          Namecheap
          <Icon name="external-link" />
        </a>
        . NameCheap offers free SSL and Supersonic CDN.
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
