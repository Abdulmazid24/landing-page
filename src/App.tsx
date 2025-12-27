import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";
import StarsCanvas from "./components/ui/StarBackground";

function App() {
  return (
    <main className="h-screen w-full bg-[#030014] overflow-y-auto overflow-x-hidden">
      <StarsCanvas />
      <Navbar />
      <div className="flex flex-col gap-20">
        <Hero />
        <Features />
        {/* Placeholder for future sections */}
        <div className="h-[500px] w-full z-[20] flex items-center justify-center text-white/20 text-4xl font-bold">
          More Content Coming Soon...
        </div>
      </div>
    </main>
  );
}

export default App;
