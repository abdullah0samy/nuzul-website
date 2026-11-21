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

  const documentedScopeCounters = [
    {
      id: 'cameras',
      value: 180,
      suffix: '+',
      labelAr: 'كاميرا 4K IP على الشبكة',
      labelEn: '4K IP cameras deployed',
    },
    {
      id: 'retention',
      value: 90,
      suffix: '',
      labelAr: 'يوم تسجيل متواصل على RAID-6',
      labelEn: 'Days RAID-6 NVR retention',
    },
    {
      id: 'mailboxes',
      value: 200,
      suffix: '+',
      labelAr: 'إيميل طبي وإداري مؤمّن',
      labelEn: 'Secured clinical mailboxes',
    },
  ];

  return (
    <section
      data-testid="home-featured-case-study"
      className="section-spacing-home bg-page-band"
    >
      <div className="container-nuzul">
        <div className="glass-panel p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Start Column: Project Scope & Open Typographic Stat Row */}
            <ScrollReveal className="lg:col-span-6 space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted">
                <span className="font-semibold text-accent">
                  {lang === 'ar' ? 'مشروع منفّذ' : 'Featured Deployment'}
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  {lang === 'ar'
                    ? 'مستشفى تخصصي — القاهرة'
                    : 'Private Specialized Hospital — Cairo'}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-main leading-snug">
                {lang === 'ar'
                  ? 'إعادة تأسيس شبكة مستشفى تخصصي وعزل الأجهزة الطبية وكاميرات الـ CCTV'
                  : 'Hospital Network Rebuild, Medical VLAN Isolation & 4K IP CCTV'}
              </h2>

              <p className="text-muted text-sm sm:text-base leading-relaxed">
                {lang === 'ar'
                  ? 'فصلنا شبكة أجهزة الأشعة والملفات الطبية عن شبكة الضيوف والإدارة بـ Fortinet Firewall وVLANs، وربطنا كاميرات المراقبة على RAID-6 بأرشفة 90 يوم مع إيميلات رسمية مؤمّنة بـ DMARC.'
                  : 'Separated clinical imaging and patient records from guest and admin networks using Fortinet NGFW and VLANs, paired with 90-day RAID-6 NVR storage and DMARC-authenticated mail.'}
              </p>

              {/* Open Hairline-Divided Scope Figures (No nested boxed cards) */}
              <div
                data-testid="featured-case-scope-counters"
                className="grid grid-cols-3 gap-4 pt-5 border-t border-token"
              >
                {documentedScopeCounters.map((item) => (
                  <div key={item.id}>
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
                  <span>{lang === 'ar' ? 'تفاصيل المشروع' : 'Read Case Study'}</span>
                  <ArrowIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center min-h-[44px] px-2 text-sm font-semibold text-main hover-text-accent transition-colors whitespace-nowrap"
                >
                  {lang === 'ar' ? 'كل المشاريع السابقة' : 'All Case Studies'}
                </Link>
              </div>
            </ScrollReveal>

            {/* End Column: Technical Architecture Diagram */}
            <ScrollReveal className="lg:col-span-6" delay={0.08}>
              <div className="rounded-xl overflow-hidden border border-token bg-surface-2">
                <ArchitectureDiagram caseId={featured.id} variant="detail" />
                <div className="px-5 py-3 bg-surface border-t border-token flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted">
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
      </div>
    </section>
  );
};
