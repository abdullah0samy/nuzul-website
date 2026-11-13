import React from 'react';
import { Camera } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export interface ImageSlotProps {
  descriptionAr: string;
  descriptionEn: string;
  specsAr?: string;
  specsEn?: string;
  aspectRatio?: 'video' | 'wide' | 'card';
  className?: string;
  testId?: string;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  descriptionAr,
  descriptionEn,
  specsAr = '1600×1000px • أفقي (16:10) • WebP/AVIF • مع طمس عناوين IP والبيانات الحساسة',
  specsEn = '1600×1000px • Landscape (16:10) • WebP/AVIF • Blur IPs, serials & client screens',
  aspectRatio = 'card',
  className = '',
  testId = 'image-slot',
}) => {
  const { lang } = useApp();
  const description = lang === 'ar' ? descriptionAr : descriptionEn;
  const specs = lang === 'ar' ? specsAr : specsEn;

  const heightClass =
    aspectRatio === 'wide'
      ? 'min-h-[220px] sm:min-h-[260px]'
      : aspectRatio === 'video'
      ? 'min-h-[200px] sm:min-h-[240px]'
      : 'min-h-[180px]';

  return (
    <div
      data-testid={testId}
      role="region"
      aria-label={`[IMAGE SLOT: ${description}]`}
      className={`rounded-xl border border-dashed border-token bg-surface-2 p-6 flex flex-col justify-between gap-4 ${heightClass} ${className}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          dir="ltr"
          className="ltr-num inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface border border-token text-xs font-semibold text-accent whitespace-nowrap"
        >
          <Camera className="w-3.5 h-3.5 shrink-0" />
          <span>IMAGE SLOT</span>
        </span>
        <span className="text-xs text-muted font-medium">
          {lang === 'ar' ? 'محجوز لصورة ميدانية موثقة' : 'Reserved for verified field photo'}
        </span>
      </div>

      <div className="my-auto py-2">
        <p className="text-sm sm:text-base font-bold text-main leading-relaxed">
          <bdi dir="ltr" className="ltr-num text-accent font-semibold">
            [IMAGE SLOT:{' '}
          </bdi>
          <span>{description}</span>
          <bdi dir="ltr" className="ltr-num text-accent font-semibold">
            ]
          </bdi>
        </p>
      </div>

      <div className="pt-3 border-t border-token flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
        <span>{specs}</span>
      </div>
    </div>
  );
};
