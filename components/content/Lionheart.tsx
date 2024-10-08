import Icon from "@/components/Icon";
import Artwork from "../Artwork";

export default function Lionheart() {
  return (
    <>
      <h2 className="text-2xl font-bold">Process</h2>
      <h3 className="text-xl font-bold">Logo</h3>
      <p>
        The client had provided a rough sketch on paper of what they wanted the
        logo to like. Using{" "}
        <a
          href="https://www.adobe.com/ca/products/illustrator.html"
          target="_blank"
        >
          Adobe Illustrator
          <Icon name="external-link" />
        </a>
        {""}, I was able to create a digital vectorized logo.
      </p>
      <Artwork
        imageURL="/img/artwork/lionheart-logo-mock-up.png"
        alt="Lionheart Logo Mock Up"
        caption="Logo mock up. (Top: Normal Logo, Bottom: Alt Logo)."
      />
      <h3 className="text-xl font-bold">Website</h3>
      <p>
        The website would be used by potional customers to look at the
        client&apos;s artwork, learn about tattoo care, and/or being able to
        contact the business with ease. Having this in mind, I decided to create
        a simple website.
      </p>
      <p>
        Since the client wanted to do their own updates after the completion of
        this work, I decided to go with EasyWP(Managed WordPress Hosting) by{" "}
        <a href="https://www.namecheap.com/" target="_blank">
          Namecheap <Icon name="external-link" />
        </a>
        . The reason why I went with NameCheap is because they offer free SSL
        and Supersonic CDN.
      </p>
      <p>
        A basic Wordpress template was purchased and then modified to meet the
        needs of the business.
      </p>
      <p>The following tools were added to the site:</p>
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
        imageURL="/img/artwork/lionheart-webpage.jpg"
        alt="Lionheart Webpage"
        caption="Lionheart Webpage"
      />
    </>
  );
}
