"use client";

import React from "react";
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
      <style jsx global>{`
        /* Sadece logo boyutu sabit kalacak */
        /* Diğer görsel ayarları kaldırıldı */
        
        /* Sosyal medya ikonları için sabit boyut */
        .min-w-fit svg {
          width: 24px !important;
          height: 24px !important;
        }
      `}</style>
      
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
        {/*<Section
          id="testimonials"
          title="Müşterilerimiz Ne Diyor?"
          description="Bizimle çalışanların yorumlarını dinleyin."
        >
          <Testimonials />
        </Section>*/ }


        

        <FAQ />

         {/*<Stats />*/ } 

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
