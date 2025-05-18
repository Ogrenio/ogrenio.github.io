"use client";

import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
// src/app/page.tsx
import dynamic from "next/dynamic";

// Header bileşenini dinamik olarak yükleyin
const Header = dynamic(() => import("@/components/Header"), { ssr: false });

const HomePage: React.FC = () => {

  return (
    <>
      <Header /> {/* Header'ı buraya ekliyoruz */}
      <Hero />
      <Logos />
      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Fiyatlandırma"
          description="Basit, şeffaf fiyatlandırma. Sürpriz yok."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="Müşterilerimiz Ne Diyor?"
          description="Bizimle çalışanların yorumlarını dinleyin."
        >
          <Testimonials />
        </Section>

        <FAQ />

        <Stats />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
