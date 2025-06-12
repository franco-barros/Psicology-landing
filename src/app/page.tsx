import Hero from "../components/hero";
import Service from "../components/service";
import About from "../components/aboutme";
import { BlogSection } from "../components/blogsection";
import { DigitalTherapy } from "../components/digitaltherapy";
import { FAQSection } from "../components/FAQsection";
import { PsychologicalTips } from "../components/psychologicaltips";
import { Testimonials } from "../components/testimonials";
import { FreeEvaluation } from "../components/freeevaluation";
import { Gallery } from "../components/gallery";
import { ContactForm } from "../components/contact";

import WhatsappButton from "../components/whatsappbutton";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Service />
      <Gallery />
      <About />
      <BlogSection />
      <DigitalTherapy />
      <FAQSection />
      <PsychologicalTips />
      <FreeEvaluation formularioUrl="" />
      <Testimonials />
      <ContactForm />
      <WhatsappButton phoneNumber="" />
    </main>
  );
}
