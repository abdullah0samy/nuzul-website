import React from 'react';
import { TEAM_MEMBERS } from '../../data/nuzulData';
import { useApp } from '../../context/AppContext';
import { Award, ShieldCheck, Users } from 'lucide-react';
import { ImageSlot } from '../common/ImageSlot';

export const TeamSection: React.FC = () => {
  const { lang } = useApp();

  return (
    <section id="engineering-team" className="section-spacing bg-surface border-t border-token">
      <div className="container-nuzul">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold mb-2">
            <Users className="w-4 h-4 shrink-0" />
            <span>
              {lang === 'ar'
                ? 'القيادة الهندسية والخبراء المعتمدون'
                : 'Engineering Leadership & Certified Experts'}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-main mb-3">
            {lang === 'ar'
              ? 'فريق هندسي معتمد يدير بنيتك التحتية'
              : 'Certified Architects Managing Your Infrastructure'}
          </h2>
          <p className="text-muted text-sm md:text-base leading-relaxed">
            {lang === 'ar'
              ? 'يضم فريق نُزول تِك نخبة من مهندسي السحابة، الشبكات، الأمن السيبراني، ومطوري النظم الحاصلين على الشهادات الهندسية المعتمدة.'
              : 'Nuzul Tech brings together senior cloud, network, cybersecurity, and software architects holding industry-recognized engineering certifications.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-6 flex flex-col gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="clean-card p-6 bg-page flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      {lang === 'ar' ? member.experience : member.experienceEn}
                    </span>
                    <span className="text-xs text-muted">
                      {lang === 'ar' ? member.role : member.roleEn}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-main mb-2">
                    {lang === 'ar' ? member.name : member.nameEn}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-5">
                    {lang === 'ar' ? member.bio : member.bioEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-token">
                  <div className="flex items-center gap-1.5 text-xs text-muted mb-2 font-semibold">
                    <Award className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{lang === 'ar' ? 'مجالات التخصص الهندسي:' : 'Engineering Specialties:'}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.certifications.map((cert, i) => (
                      <span
                        key={i}
                        dir="ltr"
                        className="px-2.5 py-1 rounded-md bg-surface border border-token text-xs ltr-num text-main font-semibold whitespace-nowrap"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-6">
            <ImageSlot
              testId="team-office-image-slot"
              aspectRatio="wide"
              className="h-full"
              descriptionAr="صورة حقيقية لفريق مهندسي نُزول تِك داخل المقر الرئيسي بالقاهرة أو أثناء فحص وتجهيز كبائن الشبكات والخوادم"
              descriptionEn="Real photograph of Nuzul Tech engineering team inside the Cairo headquarters or commissioning enterprise server racks"
              specsAr="1600×1000px • أفقي (16:10) • إضاءة طبيعية • طمس شاشات المراقبة وعناوين IP"
              specsEn="1600×1000px • Landscape (16:10) • Natural lighting • Blur NOC monitors & IP labels"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
