import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/src/components/home/Hero";

const AboutPreview = dynamic(() => import("@/src/components/home/AboutPreview").then(mod => ({ default: mod.AboutPreview })));
const ProgramsOverview = dynamic(() => import("@/src/components/home/ProgramsOverview").then(mod => ({ default: mod.ProgramsOverview })));
const WhySmdj = dynamic(() => import("@/src/components/home/WhySmdj").then(mod => ({ default: mod.WhySmdj })));
const Campus = dynamic(() => import("@/src/components/home/Campus").then(mod => ({ default: mod.Campus })));
const TestimonialsSection = dynamic(() => import("@/src/components/home/TestimonialsSection").then(mod => ({ default: mod.TestimonialsSection })));
const NewsPreview = dynamic(() => import("@/src/components/home/NewsPreview").then(mod => ({ default: mod.NewsPreview })));
const ContactStrip = dynamic(() => import("@/src/components/home/ContactStrip").then(mod => ({ default: mod.ContactStrip })));

export const metadata: Metadata = { title: "Asosiy sahifa", description: "SMDJ Group xususiy maktabi - zamonaviy ta'lim va individual yondashuv." };

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProgramsOverview />
      <WhySmdj />
      <Campus />
      <TestimonialsSection />
      <NewsPreview />
      <ContactStrip />
    </>
  );
}
