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
      <div id="hero">
        <Hero />
      </div>

      <div id="services">
        <Service />
      </div>

      <div id="gallery">
        <Gallery />
      </div>

      <div id="aboutme">
        <About />
      </div>

      <div id="blog">
        <BlogSection />
      </div>

      <div id="digitaltherapy">
        <DigitalTherapy />
      </div>

      <div id="faq">
        <FAQSection />
      </div>

      <div id="psychotips">
        <PsychologicalTips />
      </div>

      <FreeEvaluation formularioUrl="" />

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="contact">
        <ContactForm />
      </div>

      <WhatsappButton phoneNumber="" />
    </main>
  );
}
