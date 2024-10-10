"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Image from "next/image";
import About from "@/components/About";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "@/components/Contact";


export default function Home() {
  useEffect(() => {
    AOS.init({ 
      easing:"ease-out-back",
      duration: 1200,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    });
    AOS.refresh();
  }, []);

  return (
        <main>
          <Hero/>
          <Projects/>
          <Contact/>
          <About/>

        </main>


  );
}
