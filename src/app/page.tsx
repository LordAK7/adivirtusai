import ContactUs from "./components/ContactUs";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Security from "./components/Security";
import AthenaPage from "./athena/page";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <AthenaPage />
      <Security />
      <Pricing />
      <ContactUs />
    </>
  );
}
