import { About } from "@/components/site/about";
import { Projects } from "@/components/site/benefits";
import { ContactCta } from "@/components/site/cta";
import { SiteFooter } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";
import { Stats } from "@/components/site/stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Stats />
        <Process />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
