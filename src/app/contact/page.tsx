import type { Metadata } from "next";
import { CONTACT_EMAIL as EMAIL, ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/ui";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <section className="mx-auto grid max-w-6xl items-start gap-12 px-5 pt-14 pb-20 md:pt-20 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <PageIntro eyebrow="Contact" title="Have a local problem software could help with?">
          <p>Tell us about it. We read everything and reply within a couple of working days.</p>
        </PageIntro>
        <dl className="mt-10 space-y-6">
          <div>
            <dt className="caption">Email</dt>
            <dd className="mt-1 font-serif text-2xl">
              <a href={`mailto:${EMAIL}`} className="text-green hover:underline">
                {EMAIL}
              </a>
            </dd>
          </div>
          <div>
            <dt className="caption">Location</dt>
            <dd className="mt-1 font-serif text-2xl">Cambridge, United Kingdom</dd>
          </div>
        </dl>
      </div>
      <ContactForm email={EMAIL} />
    </section>
  );
}
