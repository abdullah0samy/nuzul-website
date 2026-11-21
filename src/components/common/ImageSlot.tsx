import React, { useState } from 'react';
import { Server } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import cairoServerRoomImg from '../../assets/images/cairo_server_room_1795189717616.jpg';
import cairoNetworkOpsImg from '../../assets/images/cairo_network_ops_1795189716464.jpg';
import datacenterRackImg from '../../assets/images/datacenter_rack_closeup_1795189717369.jpg';

export type PhotoVariant = 'server-room' | 'office' | 'rack';

export interface ImageSlotProps {
  descriptionAr: string;
  descriptionEn: string;
  captionAr?: string;
  captionEn?: string;
  specsAr?: string;
  specsEn?: string;
  photoVariant?: PhotoVariant;
  aspectRatio?: 'video' | 'wide' | 'card';
  className?: string;
  testId?: string;
}

function resolvePhotoAsset(variant?: PhotoVariant, testId?: string): string {
  if (variant === 'office') return cairoNetworkOpsImg;
  if (variant === 'rack') return datacenterRackImg;
  if (variant === 'server-room') return cairoServerRoomImg;

  const id = (testId || '').toLowerCase();
  if (id.includes('contact') || id.includes('hq')) return cairoNetworkOpsImg;
  if (id.includes('team')) return cairoServerRoomImg;
  return datacenterRackImg;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  descriptionAr,
  descriptionEn,
  captionAr,
  captionEn,
  photoVariant,
  aspectRatio = 'video',
  className = '',
  testId = 'editorial-photo-frame',
}) => {
  const { lang } = useApp();
  const [imgError, setImgError] = useState(false);

  const src = resolvePhotoAsset(photoVariant, testId);
  const altText = lang === 'ar' ? descriptionAr : descriptionEn;
  const caption =
    lang === 'ar'
      ? captionAr || 'تجهيز كبائن الشبكات وغرف الخوادم — نزول تك القاهرة'
      : captionEn || 'Structured cabling & server room operations — Nuzul Tech Cairo';

  const aspectClass =
    aspectRatio === 'wide'
      ? 'aspect-[16/10] min-h-[240px]'
      : aspectRatio === 'video'
      ? 'aspect-video min-h-[210px]'
      : 'aspect-[4/3] min-h-[190px]';

  return (
    <figure
      data-testid={testId}
      className={`clean-card overflow-hidden relative group ${aspectClass} ${className}`}
    >
      {!imgError ? (
        <>
          <img
            src={src}
            alt={altText}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none"
          />
          <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-xs sm:text-sm font-medium text-white/95 leading-snug">
            {caption}
          </figcaption>
        </>
      ) : (
        <div className="w-full h-full bg-surface-2 p-6 flex flex-col items-center justify-center text-center gap-3">
          <Server className="w-8 h-8 text-accent" aria-hidden="true" />
          <p className="text-sm font-semibold text-main max-w-md">{caption}</p>
        </div>
      )}
    </figure>
  );
};
