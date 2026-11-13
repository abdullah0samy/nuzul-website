import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { PROJECTS } from '../../data/nuzulData';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ArchitectureDiagram } from '../common/ArchitectureDiagram';
import { ScrollReveal, AnimatedCounter } from '../common/MotionPrimitives';

export const HomeFeaturedCaseStudy: React.FC = () => {
  const { lang } = useApp();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  const featured = PROJECTS[0];

  // 3 Documented Scope Counts from NUZUL_CASE_STUDIES[0].deliverables_ar/en (CLAIMS.md #37)
  const documentedScopeCounters = [
    {
      id: 'cameras',
      value: 180,
      suffix: '+',
      labelAr: 'كاميرا مراقبة شبكية بدقة 4K IP',
      labelEn: '4K IP surveillance cameras deployed',
    },
    {
      id: 'retention',
      value: 90,
      suffix: '',
      labelAr: 'يوماً أرشفة متصلة عبر مصفوفة RAID-6',
      labelEn: 'Days continuous RAID-6 NVR retention',
    },
    {
      id: 'mailboxes',
      value: 200,
      suffix: '+',
      labelAr: 'صندوق بريد طبي وإداري بمصادقة DMARC',
      labelEn: 'Clinical & admin mailboxes secured with DMARC',
    },
  ];

  return (
    <section
      data-testid="home-featured-case-study"
      className="section-spacing-home bg-surface-band border-y border-token"
    >
      <div className="container-nuzul">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Start Column: Case Study Context, Delivered Scope, and 3 Animated Scope Counters */}
          <ScrollReveal className="lg:col-span-6 space-y-5">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-accent">
              <span>{lang === 'ar' ? 'دراسة حالة' : 'Case Study'}</span>
              <span aria-hidden="true" className="text-muted">·</span>
              <span className="text-muted">
                {lang === 'ar'
                  ? 'مستشفى تخصصي خاص — القاهرة (قطاع الرعاية الصحية)'
                  : 'Private Specialized Hospital — Cairo (Healthcare Sector)'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-main leading-tight">
              {lang === 'ar'
                ? 'إعادة هيكلة الشبكة وتأمين السجلات الطبية ونظام المراقبة البصرية'
                : 'Network Architecture Overhaul, Medical VLAN Isolation & 4K IP Surveillance'}
            </h2>

            <p className="text-muted text-base leading-relaxed">
              {lang === 'ar'
                ? 'تمديد شبكة ألياف ضوئية وكابلات Cat6A معزولة عبر VLAN وجدار حماية Fortinet NGFW، مع ربط كاميرات المراقبة بمصفوفة RAID-6 وتأمين بريد الشركة.'
                : 'Deployed a Fiber Optic and Cat6A backbone segmented via VLANs and Fortinet NGFW, paired with RAID-6 NVR storage and authenticated corporate email.'}
            </p>

            {/* 3 Documented Scope Figures (Animated Once via AnimatedCounter per Phase 4B) */}
            <div
              data-testid="featured-case-scope-counters"
              className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-3 border-t border-token"
            >
              {documentedScopeCounters.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-page border border-token"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-accent">
                    <AnimatedCounter
                      value={item.value}
                      suffix={item.suffix}
                      testId={`case-counter-${item.id}`}
                    />
                  </div>
                  <div className="text-xs text-muted mt-1 leading-snug">
                    {lang === 'ar' ? item.labelAr : item.labelEn}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to={`/case-studies/${featured.id}`}
                className="btn-primary px-6 py-3 min-h-[44px] text-sm whitespace-nowrap hover-lift"
              >
                <span>{lang === 'ar' ? 'اقرأ دراسة الحالة كاملة' : 'Read Full Case Study'}</span>
                <ArrowIcon className="w-4 h-4 shrink-0" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center min-h-[44px] px-2 text-sm font-semibold text-main hover-text-accent transition-colors whitespace-nowrap"
              >
                {lang === 'ar' ? 'تصفح جميع المشاريع السابقة' : 'View All Case Studies'}
              </Link>
            </div>
          </ScrollReveal>

          {/* End Column: Technical Architecture Diagram (Token-Driven SVG per Section 3.9) */}
          <ScrollReveal className="lg:col-span-6" delay={0.08}>
            <div className="rounded-2xl overflow-hidden border border-token bg-surface-2">
              <ArchitectureDiagram caseId={featured.id} variant="detail" />
              <div className="px-5 py-3.5 bg-page border-t border-token flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted">
                {featured.technologies.slice(0, 4).map((tech, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <span aria-hidden="true">·</span>}
                    <bdi dir="ltr" className="ltr-num font-medium text-main whitespace-nowrap">
                      {tech}
                    </bdi>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
