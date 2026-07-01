import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StripeDivider from "@/components/StripeDivider";
import ServicesSection from "@/components/ServicesSection";
import MachineTypesSection from "@/components/MachineTypesSection";
import BrandsSection from "@/components/BrandsSection";
import WhyOzentekSection from "@/components/WhyOzentekSection";
import ReferencesSection from "@/components/ReferencesSection";
import RegionSection from "@/components/RegionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";

export default function HomePage() {
  return (
    <div style={{ paddingBottom: 0 }} className="page-wrap">
      <Header />
      <HeroSection />
      <StripeDivider />
      <ServicesSection />
      <MachineTypesSection />
      <BrandsSection />
      <WhyOzentekSection />
      <ReferencesSection />
      <RegionSection />
      <ContactSection />
      <Footer />
      <StickyCtaBar />

      <style>{`
        @media (max-width: 900px) {
          .page-wrap {
            padding-bottom: 78px;
          }
        }
      `}</style>
    </div>
  );
}
