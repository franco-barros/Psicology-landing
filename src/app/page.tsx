import Hero from "../components/hero";
import Service from "../components/service";
import About from "../components/aboutme";
import { Testimonials } from "../components/testimonials";
import { ContactForm } from "../components/contact";

import WhatsappButton from "../components/whatsappbutton";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Service />
      <About />
      <Testimonials />
      <ContactForm />
      <WhatsappButton phoneNumber="" />
    </main>
  );
}
