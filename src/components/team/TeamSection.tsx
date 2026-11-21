import React from 'react';
import { TEAM_MEMBERS } from '../../data/nuzulData';
import { useApp } from '../../context/AppContext';
import { ImageSlot } from '../common/ImageSlot';

export const TeamSection: React.FC = () => {
  const { lang } = useApp();

  return (
    <section id="engineering-team" className="section-spacing bg-surface-band border-t border-token">
      <div className="container-nuzul">
        <div className="max-w-3xl mb-10">
          <p className="text-accent text-xs font-semibold mb-2">
            {lang === 'ar' ? 'فريق التنفيذ والدعم' : 'Engineering & Operations Team'}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-main mb-3">
            {lang === 'ar'
              ? 'مهندسون يعملون معك مباشرة من التصميم حتى الصيانة'
              : 'Dedicated Engineers Managing Your Infrastructure'}
          </h2>
          <p className="text-muted text-sm md:text-base leading-relaxed">
            {lang === 'ar'
              ? 'يجمع فريق نزول تك بين مهندسي الشبكات، مديري خوادم Linux وWindows، ومختصي الأمان ومطوري أنظمة العمل.'
              : 'Nuzul Tech combines network engineers, Linux and Windows systems administrators, security specialists, and software developers.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-6 flex flex-col gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="clean-card p-6 sm:p-7 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted mb-3">
                    <span className="font-semibold text-accent">
                      {lang === 'ar' ? member.experience : member.experienceEn}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>
                      {lang === 'ar' ? member.role : member.roleEn}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-main mb-2.5">
                    {lang === 'ar' ? member.name : member.nameEn}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {lang === 'ar' ? member.bio : member.bioEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-token">
                  <div className="text-xs text-muted mb-2 font-semibold">
                    {lang === 'ar' ? 'التخصصات الفنية:' : 'Core Specialties:'}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-main">
                    {member.certifications.map((cert, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <span className="text-muted" aria-hidden="true">·</span>}
                        <bdi dir="ltr" className="ltr-num font-semibold whitespace-nowrap">
                          {cert}
                        </bdi>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-6">
            <ImageSlot
              testId="team-office-image-slot"
              photoVariant="server-room"
              aspectRatio="wide"
              className="h-full"
              descriptionAr="غرفة خوادم وكبائن شبكات منظمة — فريق نزول تك الهندسي"
              descriptionEn="Structured enterprise server racks and cabling aisle — Nuzul Tech Engineering"
              captionAr="تجهيز وفحص كبائن الشبكات والخوادم — القاهرة"
              captionEn="Rack commissioning & structured cabling operations — Cairo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
