import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";
import { Testimonials } from "./components/sections/Testimonials";
import { CTA } from "./components/sections/CTA";
import { Pricing } from "./components/sections/Pricing";
import { Integration } from "./components/sections/Integration";
import { Enterprise } from "./components/sections/Enterprise";
import { Globe } from "./components/ui/Globe";
import { CodeDemo } from "./components/sections/CodeDemo";
import { FAQ } from "./components/sections/FAQ";
import StarsCanvas from "./components/ui/StarBackground";

function App() {
  return (
    <main className="h-screen w-full bg-[#030014] overflow-y-auto overflow-x-hidden">
      <StarsCanvas />
      <Navbar />
      <div className="flex flex-col gap-20">
        <Hero />
        <CodeDemo />
        <Features />
        <Globe />
        <Integration />
        <Pricing />
        <Enterprise />
        <FAQ />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}

export default App;
