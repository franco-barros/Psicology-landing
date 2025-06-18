import Hero from "../components/hero";
import { Studies } from "../components/studies";
import About from "../components/aboutme";
import { BlogSection } from "../components/blogsection";
import { DigitalTherapy } from "../components/digitaltherapy";
import { FAQSection } from "../components/FAQsection";
import { PsychologicalTips } from "../components/psychologicaltips";
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
        <Studies />
      </div>

      <div id="aboutme">
        <About />
      </div>

      <div id="gallery">
        <Gallery />
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

      <FreeEvaluation formularioUrl="https://docs.google.com/forms/d/1cZXgeNQfwmVt-9WlPYR0ixRt1zXI5OYkPkHFnoncFvA/edit?usp=drivesdk" />

      <div id="contact">
        <ContactForm />
      </div>

      <WhatsappButton phoneNumber="" />
    </main>
  );
}
