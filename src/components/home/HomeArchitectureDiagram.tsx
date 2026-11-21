import React from 'react';
import { useApp } from '../../context/AppContext';
import { ScrollReveal } from '../common/MotionPrimitives';

export const HomeArchitectureDiagram: React.FC = () => {
  const { lang } = useApp();

  // Components strictly already named on the site; each Latin term written ONCE.
  const stages = [
    {
      id: 'internet',
      title: 'Internet',
      sublabel: 'DDoS (L3/L4/L7)',
      captionAr: 'فلترة الترافيك الخارجي',
      captionEn: 'Edge traffic filtering',
    },
    {
      id: 'firewall',
      title: 'Firewall',
      sublabel: 'Fortinet NGFW · IPsec VPN',
      captionAr: 'فحص وربط الفروع',
      captionEn: 'Inspection & site tunnels',
    },
    {
      id: 'vlans',
      title: 'VLANs',
      sublabel: '802.1Q · Cat6A',
      captionAr: 'عزل شبكات الأقسام',
      captionEn: 'Isolated work subnets',
    },
    {
      id: 'servers',
      title: 'Servers',
      sublabel: 'KVM · NVMe RAID-10',
      captionAr: 'التطبيقات والـ Databases',
      captionEn: 'Apps & databases',
    },
    {
      id: 'backup',
      title: 'Backup',
      sublabel: '3-2-1 · Immutable',
      captionAr: 'نسخ احتياطي معزول',
      captionEn: 'Off-site storage',
    },
  ];

  const diagramTitle =
    lang === 'ar'
      ? 'مخطط معمارية التشغيل: Internet إلى Firewall إلى VLANs إلى Servers إلى Backup'
      : 'Architecture diagram: Internet to Firewall to VLANs to Servers to Backup';

  return (
    <section
      data-testid="home-architecture-section"
      className="section-spacing-home bg-surface-band border-y border-token"
    >
      <div className="container-nuzul">
        <ScrollReveal className="max-w-2xl mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-main">
            {lang === 'ar' ? 'إزاي بنأمن مسار الشبكة والبيانات' : 'How We Structure Your Network & Data Path'}
          </h2>
          <p className="text-muted mt-2.5 text-base leading-relaxed">
            {lang === 'ar'
              ? 'نفس التصميم العملي اللي بننفذه في مواقع عملائنا: من خط الإنترنت والفايروول لحد السيرفرات والـ Backup المعزول.'
              : 'The standard topology we deploy across client sites—from public ingress and firewall to servers and isolated off-site backups.'}
          </p>
        </ScrollReveal>

        <div
          data-testid="architecture-svg-wrapper"
          className="glass-panel p-4 sm:p-6 overflow-hidden"
        >
          {/* Desktop / Tablet Horizontal SVG (>= 768px) */}
          <svg
            viewBox="0 0 960 190"
            role="img"
            aria-label={diagramTitle}
            data-testid="architecture-svg-desktop"
            className="hidden md:block w-full h-auto select-none"
            style={{ direction: 'ltr' }}
          >
            <title>{diagramTitle}</title>
            <defs>
              <marker
                id="arch-arrow-h"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto"
              >
                <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--accent)" />
              </marker>
            </defs>

            {/* Subtle blueprint grid */}
            <g stroke="var(--border)" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.55">
              <line x1="0" y1="45" x2="960" y2="45" />
              <line x1="0" y1="95" x2="960" y2="95" />
              <line x1="0" y1="145" x2="960" y2="145" />
            </g>

            {stages.map((stage, idx) => {
              const boxW = 166;
              const boxH = 122;
              const gap = 26;
              const x = 12 + idx * (boxW + gap);
              const y = 34;
              const isHighlighted = idx === 1 || idx === 3;

              return (
                <g key={stage.id} data-testid={`arch-svg-node-${stage.id}`}>
                  {/* Connector Arrow */}
                  {idx < stages.length - 1 && (
                    <line
                      x1={x + boxW}
                      y1={y + boxH / 2}
                      x2={x + boxW + gap - 4}
                      y2={y + boxH / 2}
                      stroke="var(--accent)"
                      strokeWidth="2"
                      markerEnd="url(#arch-arrow-h)"
                    />
                  )}

                  {/* Node Box */}
                  <rect
                    x={x}
                    y={y}
                    width={boxW}
                    height={boxH}
                    rx="12"
                    fill={isHighlighted ? 'var(--surface-2)' : 'var(--surface)'}
                    stroke={isHighlighted ? 'var(--accent)' : 'var(--border)'}
                    strokeWidth={isHighlighted ? '1.75' : '1.25'}
                  />

                  {/* Top Accent Bar */}
                  <rect
                    x={x + 14}
                    y={y + 14}
                    width="28"
                    height="3.5"
                    rx="1.75"
                    fill="var(--accent)"
                  />

                  {/* Primary Latin Component Label */}
                  <text
                    x={x + 14}
                    y={y + 42}
                    textAnchor="start"
                    fill="var(--text)"
                    fontSize="15"
                    fontWeight="700"
                    fontFamily="Inter, IBM Plex Sans Arabic, sans-serif"
                    direction="ltr"
                    unicodeBidi="isolate"
                  >
                    {stage.title}
                  </text>

                  {/* Sublabel (Verified Tech Stack) */}
                  <text
                    x={x + 14}
                    y={y + 64}
                    textAnchor="start"
                    fill="var(--accent)"
                    fontSize="10.5"
                    fontWeight="600"
                    fontFamily="Inter, IBM Plex Sans Arabic, sans-serif"
                    direction="ltr"
                    unicodeBidi="isolate"
                  >
                    {stage.sublabel}
                  </text>

                  {/* Divider */}
                  <line
                    x1={x + 14}
                    y1={y + 78}
                    x2={x + boxW - 14}
                    y2={y + 78}
                    stroke="var(--border)"
                    strokeWidth="1"
                  />

                  {/* Role Caption — centered to avoid Chromium RTL SVG text-anchor clipping */}
                  <text
                    x={x + boxW / 2}
                    y={y + 100}
                    textAnchor="middle"
                    fill="var(--text-muted)"
                    fontSize="10.5"
                    fontWeight="500"
                    fontFamily="IBM Plex Sans Arabic, Inter, sans-serif"
                  >
                    {lang === 'ar' ? stage.captionAr : stage.captionEn}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Mobile Vertical SVG (< 768px / 375px) — Crisp, High-Readability Vertical Flow */}
          <svg
            viewBox="0 0 340 530"
            role="img"
            aria-label={diagramTitle}
            data-testid="architecture-svg-mobile"
            className="block md:hidden w-full h-auto select-none"
            style={{ direction: 'ltr' }}
          >
            <title>{diagramTitle}</title>
            <defs>
              <marker
                id="arch-arrow-v"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto"
              >
                <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--accent)" />
              </marker>
            </defs>

            {stages.map((stage, idx) => {
              const boxW = 316;
              const boxH = 82;
              const gap = 24;
              const x = 12;
              const y = 10 + idx * (boxH + gap);
              const isHighlighted = idx === 1 || idx === 3;

              return (
                <g key={`m-${stage.id}`} data-testid={`arch-svg-mobile-node-${stage.id}`}>
                  {/* Vertical Connector Arrow */}
                  {idx < stages.length - 1 && (
                    <line
                      x1={170}
                      y1={y + boxH}
                      x2={170}
                      y2={y + boxH + gap - 4}
                      stroke="var(--accent)"
                      strokeWidth="2"
                      markerEnd="url(#arch-arrow-v)"
                    />
                  )}

                  {/* Node Box */}
                  <rect
                    x={x}
                    y={y}
                    width={boxW}
                    height={boxH}
                    rx="12"
                    fill={isHighlighted ? 'var(--surface-2)' : 'var(--surface)'}
                    stroke={isHighlighted ? 'var(--accent)' : 'var(--border)'}
                    strokeWidth={isHighlighted ? '1.75' : '1.25'}
                  />

                  {/* Left Accent Strip */}
                  <rect
                    x={x + 12}
                    y={y + 18}
                    width="4"
                    height="46"
                    rx="2"
                    fill="var(--accent)"
                  />

                  {/* Latin Label */}
                  <text
                    x={x + 28}
                    y={y + 30}
                    textAnchor="start"
                    fill="var(--text)"
                    fontSize="15"
                    fontWeight="700"
                    fontFamily="Inter, IBM Plex Sans Arabic, sans-serif"
                    direction="ltr"
                    unicodeBidi="isolate"
                  >
                    {stage.title}
                  </text>

                  {/* Tech Stack Sublabel */}
                  <text
                    x={x + boxW - 14}
                    y={y + 30}
                    textAnchor="end"
                    fill="var(--accent)"
                    fontSize="11.5"
                    fontWeight="600"
                    fontFamily="Inter, IBM Plex Sans Arabic, sans-serif"
                    direction="ltr"
                    unicodeBidi="isolate"
                  >
                    {stage.sublabel}
                  </text>

                  {/* Role Caption — centered to avoid Chromium RTL SVG text-anchor clipping */}
                  <text
                    x={x + boxW / 2}
                    y={y + 58}
                    textAnchor="middle"
                    fill="var(--text-muted)"
                    fontSize="12"
                    fontWeight="500"
                    fontFamily="IBM Plex Sans Arabic, Inter, sans-serif"
                  >
                    {lang === 'ar' ? stage.captionAr : stage.captionEn}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
};
