import { CtaBanner } from "@/components/cta-banner";

/** Every page in this group ends with the "Get in touch" banner; Contact sits outside it. */
export default function WithCta({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CtaBanner />
    </>
  );
}
