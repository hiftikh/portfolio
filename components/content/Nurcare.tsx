import Icon from "@/components/Icon";
import Artwork from "../Artwork";

export default function Nurcare() {
  return (
    <>
      <h2 className="text-2xl font-bold">Process</h2>
      <p>
        Designed the logo/icon business card using&nbsp;
        <a
          href="https://www.adobe.com/ca/products/illustrator.html"
          target="_blank"
        >
          Adobe Illustrator
          <Icon name="external-link" />
        </a>
        &nbsp; and&nbsp;
        <a
          href="https://www.adobe.com/ca/products/indesign.html"
          target="_blank"
        >
          Adobe InDesign
          <Icon name="external-link" />
        </a>
        , respectively.
      </p>
      <h3 className="text-xl font-bold">Logo</h3>
      <p>
        For the color scheme and font, I took inspiration from the business
        name, Nurcare, which is a mashup of the words Noor (meaning light in
        Arabic), Nurture, and Care. I used a green pastel color to evoke a calm
        nurturing atmosphere and a yellow accent color for warmth. The
        typography is in lowercase and rounded to convey comfort and softness.
        In psychotherapy, it&apos;s important to create a space where clients
        feel comfortable and safe to share their thoughts and feelings. Having a
        logo that conveys that was necessary. Finally, the diamond shapes on the
        letter &quot;u&quot; were drawn from the{" "}
        <a href="https://en.wikipedia.org/wiki/Arabic_alphabet" target="_blank">
          Arabic Alphabet
          <Icon name="external-link" />
        </a>{" "}
        which was a unique touch as most of the clinic&apos;s clientele are
        Arab/Middle Eastern. Coincidentally, the dotted &quot;u&quot; also
        appears as a smiling face which is warm and inviting.
      </p>
      <h3 className="text-xl font-bold">Icon</h3>
      <p>
        To convey a sense of positivity, openness, and welcoming presence, I
        created the upward-facing open palms design with rays of light behind
        it. The heart being cradled within the palms was added to show that the
        clinic was a space where clients were safe and secure.
      </p>
      <Artwork
        imageURL="/img/artwork/work/nurcare-logo-mock-up.png"
        alt="Nurcare Logo Mock Up"
        caption="Left: Primary Logo |  Right: Alternate Logo"
      />
      <h3 className="text-xl font-bold">Business Card</h3>
      <p>
        The front of the business card showcases information about the client.
        Using yellow dots on their name to reaffirm the branding. The heart icon
        on the right displaying rays of sunshines.
      </p>
      <p>
        The back of the business card shows the main logo with a tagline of
        &quot;Rekindle your inner light&quot;.
      </p>
      <Artwork
        imageURL="/img/artwork/work/nurcare-business-card-mock-up.jpg"
        alt="Business Card Mock Up"
        caption="Business card mock up."
      />
    </>
  );
}
