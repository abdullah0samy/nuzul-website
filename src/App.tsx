import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { TopBar } from './components/layout/TopBar';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { PackagesSection } from './components/packages/PackagesSection';
import { ServicesSection } from './components/services/ServicesSection';
import { LiveDemosSection } from './components/demos/LiveDemosSection';
import { PricingSection } from './components/pricing/PricingSection';
import { DomainSearchWidget } from './components/domain/DomainSearchWidget';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { TechStackSection } from './components/tech/TechStackSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { StatsSection } from './components/stats/StatsSection';
import { ContactConsultationSection } from './components/contact/ContactConsultationSection';
import { BlogSection } from './components/blog/BlogSection';
import { CtaStepsSection } from './components/cta/CtaStepsSection';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/modals/CartDrawer';
import { ClientAreaModal } from './components/modals/ClientAreaModal';
import { ArticleModal } from './components/modals/ArticleModal';
import { PaymentModal } from './components/modals/PaymentModal';
import { ChatModal } from './components/modals/ChatModal';
import { FloatingChatTrigger } from './components/support/FloatingChatTrigger';

const MainLayout: React.FC = () => {
  const { theme } = useApp();
  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 selection:bg-emerald-500/30 ${
        isDark ? 'bg-[#070c14] text-[#c6d0dd]' : 'bg-[#f8fafc] text-slate-800'
      }`}
    >
      {/* Top Auxiliary Bar with Language, Currency, Theme Switcher & LinkedIn */}
      <TopBar />

      {/* Main Sticky Navigation with Mega Menus & Quick Actions */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section with Live Cairo Telemetry, CTA & Instant Payment Badges */}
        <HeroSection />

        {/* 2. Enterprise Packages (Starter, Business, Professional, Enterprise) */}
        <PackagesSection />

        {/* 3. 16 Full-Stack IT, Infrastructure, Cloud & Cybersecurity Services */}
        <ServicesSection />

        {/* 4. Live System Demos: HIS Hospital Information System & ClinicCore SaaS/On-Premises */}
        <LiveDemosSection />

        {/* 5. Cloud VPS, Windows RDP (1000 EGP/mo) & Managed Web Hosting */}
        <PricingSection />

        {/* 6. Interactive Real-Time Domain Search API with .eg & .com.eg */}
        <DomainSearchWidget />

        {/* 7. Strategic Case Studies & Feasibility (Cairo Cure, ABCH, Lebanon Hospital, amer-acc, etc.) */}
        <ProjectsSection />

        {/* 8. Enterprise Technology Stack Powering Our Deployments */}
        <TechStackSection />

        {/* 9. Real Client Testimonials Across Egypt */}
        <TestimonialsSection />

        {/* 10. Realistic Numbers Backed by 1,000+ Customers */}
        <StatsSection />

        {/* 11. Enterprise Consultation Form + Data Center Operations & Cairo Infrastructure HQ */}
        <ContactConsultationSection />

        {/* 12. Enterprise IT & Cloud Knowledge Base (16 Specialized Guides) */}
        <BlogSection />

        {/* 13. Turnkey Deployment CTA with 3 Steps */}
        <CtaStepsSection />
      </main>

      {/* Comprehensive Footer with Direct Contacts & Payment Methods */}
      <Footer />

      {/* Interactive Global Modals and Drawers */}
      <CartDrawer />
      <ClientAreaModal />
      <ArticleModal />
      <PaymentModal />
      <ChatModal />
      <FloatingChatTrigger />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
