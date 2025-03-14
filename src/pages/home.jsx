import { Article } from "../components/article";
import { Contact } from "../components/contact/contact";
import { WhatsApp } from "../components/contact/whatsapp";
import CookieConsent from "../components/cookies";
import { FeedbackComponent } from "../components/feedback";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { JoinUs } from "../components/join-us";
import { Navbar } from "../components/navbar/navbar";
import { Skills } from "../components/skills";
import { Team } from "../components/team";
import { Values } from "../components/values";
import { FaWhatsapp } from "react-icons/fa";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 text-gray-900">
        <Hero />
        <div className="max-w-7xl mb-10 space-y-16 mx-auto px-4 sm:px-8 lg:px-12">
          <Values />
          <Skills />
          <Article />
          <Team />
        </div>

        <div className="max-w-7xl mb-10 space-y-16 mx-auto px-4 sm:px-8 lg:px-12">
          <JoinUs />
          <Contact />
          {/* <FeedbackComponent /> */}
        </div>
      </div>
      <Footer />

      <WhatsApp />
    </>
  );
};
