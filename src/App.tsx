import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { TopBar } from './components/layout/TopBar';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { PackagesSection } from './components/packages/PackagesSection';
import { ServicesSection } from './components/services/ServicesSection';
import { LiveDemosSection } from './components/demos/LiveDemosSection';
import { PricingSection } from './components/pricing/PricingSection';
import { ComparePlansSection } from './components/pricing/ComparePlansSection';
import { RealTimeStatusWidget } from './components/status/RealTimeStatusWidget';
import { DomainSearchWidget } from './components/domain/DomainSearchWidget';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { TechStackSection } from './components/tech/TechStackSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { StatsSection } from './components/stats/StatsSection';
import { ContactConsultationSection } from './components/contact/ContactConsultationSection';
import { BlogSection } from './components/blog/BlogSection';
import { ImplementationRoadmap } from './components/roadmap/ImplementationRoadmap';
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
        {/* 1. Hero Section with Executive Enterprise Architecture Showcase */}
        <HeroSection />

        {/* 2. Realistic Numbers & Trust Proof (1,000+ Clients, 99.98% Uptime, Cairo HQ) */}
        <StatsSection />

        {/* 3. 16 Full-Stack IT, Infrastructure, Cloud & Cybersecurity Services (with Instant Search) */}
        <ServicesSection />

        {/* 4. Enterprise Packages (Starter, Business, Professional, Enterprise ITaaS) */}
        <PackagesSection />

        {/* 5. Live System Demos: HIS Hospital Information System & ClinicCore SaaS/On-Premises */}
        <LiveDemosSection />

        {/* 6. Cloud VPS, Dedicated Workspaces & Managed Hosting */}
        <PricingSection />

        {/* 6b. Interactive Side-by-Side VPS & Cloud Plan Comparison */}
        <ComparePlansSection />

        {/* 6c. Real-Time Telemetry & Uptime Status Dashboard (USA vs Europe) */}
        <RealTimeStatusWidget />

        {/* 7. Interactive Real-Time Domain Search API (.eg & .com.eg) */}
        <DomainSearchWidget />

        {/* 8. Strategic Case Studies & Success Stories (Cairo Cure, ABCH, Dr. Khaled Farouk, etc.) */}
        <ProjectsSection />

        {/* 9. Enterprise Technology Stack Powering Our Deployments */}
        <TechStackSection />

        {/* 10. Real Client Testimonials Across Egypt */}
        <TestimonialsSection />

        {/* 11. Implementation Roadmap: 3-Step Deployment Cycle (Planning -> Migration -> Optimization) */}
        <ImplementationRoadmap />

        {/* 12. Enterprise IT & Cloud Knowledge Base (16 Specialized Guides) */}
        <BlogSection />

        {/* 13. Enterprise Consultation Form + Data Center Operations & Cairo Infrastructure HQ */}
        <ContactConsultationSection />
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
