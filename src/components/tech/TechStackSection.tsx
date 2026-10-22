import React from 'react';
import { useApp } from '../../context/AppContext';
import { RevealOnScroll, StaggerContainer, StaggerItem } from '../common/RevealOnScroll';

export const TechStackSection: React.FC = () => {
  const { locale, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const technologies = [
    { name: 'Cisco', category: 'Enterprise Routing & Switching' },
    { name: 'Fortinet', category: 'Next-Gen Hardware Firewalls' },
    { name: 'VMware ESXi', category: 'Enterprise Virtualization' },
    { name: 'Proxmox VE', category: 'High Availability Hypervisors' },
    { name: 'Docker', category: 'Containerized Microservices' },
    { name: 'Kubernetes', category: 'Container Orchestration' },
    { name: 'Prometheus & Grafana', category: 'Real-Time Observability & Telemetry' },
    { name: 'Sophos', category: 'Perimeter Cybersecurity' },
    { name: 'PostgreSQL', category: 'Enterprise Relational DB' },
    { name: 'React 19 & Vite', category: 'Executive Dashboards' },
    { name: 'Node.js', category: 'High-Throughput Core APIs' },
    { name: 'Linux KVM', category: 'Hardened Operating Systems' },
    { name: 'TrueNAS & ZFS', category: 'Immutable Hybrid Storage' },
  ];

  return (
    <section
      className={`border-y px-5 py-12 sm:px-6 lg:px-8 transition-colors ${
        isDark ? 'border-white/10 bg-[#070c14]' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll direction="up" threshold={0.3}>
          <p className="mb-8 text-center font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
            {isAr
              ? 'التقنيات العالمية المعتمدة في بنيتنا التحتية وأنظمتنا'
              : 'Enterprise Technology Stack Powering Our Deployments'}
          </p>
        </RevealOnScroll>

        <StaggerContainer staggerDelay={0.05} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-8">
          {technologies.map((tech) => (
            <StaggerItem key={tech.name} distance={16} scale={0.94}>
              <div
                title={tech.category}
                className={`group flex items-center gap-2 rounded-xl border px-3.5 py-2 transition-all duration-200 hover:-translate-y-0.5 ${
                  isDark
                    ? 'border-white/10 bg-[#0d1524] hover:border-emerald-500/40 text-slate-200'
                    : 'border-slate-200 bg-slate-50 hover:border-emerald-500 text-slate-800 shadow-sm'
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                <span className="font-mono text-xs font-bold group-hover:text-emerald-500 transition-colors">
                  {tech.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
