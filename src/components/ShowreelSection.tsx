import React, { useState } from 'react';
import { Play, Maximize2, X, ShieldCheck } from 'lucide-react';

export const ShowreelSection: React.FC = () => {
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Exact Cobx Masters event collage asset uploaded by the user with fallback cascade
  const [coverSrc, setCoverSrc] = useState<string>('CobxMAsters.jpg');
  const [fallbackIndex, setFallbackIndex] = useState<number>(0);

  const fallbackList = [
    'CobxMAsters.jpg',
    'CobxMAsters.png',
    '/CobxMAsters.jpg',
    '/CobxMAsters.png',
    'CobxMasters.jpg',
    '/CobxMasters.jpg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCXbOxT44_RUW5Iu-XcW4vJUZm65U5UeN1ny3xpYm5lVnXVfiwBXQkTHakgpTLkmKRjB-S8uQOOMpmqsGpD3DvwO6jt5ug-Ne9Rxq2f_Jzg5EJYUbk6Pe3oSSOFywpmKGoF8I9rfyJvFj6lwDFOi1n6xW5zlslsP_6jJ1SRLSp1ZY8yVxCTkVo0b_tOEQ7mS1QrOIe2ZtW0GwxlSqF0hX1xZmRPyifnyz3jscj2dlly1RKObqDckRVQ_o6rJwcA15CB0g',
  ];

  const handleCoverError = () => {
    const next = fallbackIndex + 1;
    if (next < fallbackList.length) {
      setCoverSrc(fallbackList[next]);
      setFallbackIndex(next);
    }
  };

  const youtubeVideoId = 'ueiBxGVYMRY';
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1&autoplay=1`;

  return (
    <section className="w-full px-4 sm:px-8 lg:px-14 py-20 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col gap-6">
        {/* Section Heading & Subtext */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D4FF00] rounded-full animate-pulse"></span>
              <span className="font-title text-[10px] tracking-widest text-[#A4A4A4] uppercase font-bold">
                FEATURED EVENT MEDIA
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase text-[#F3F1EB] mt-2 font-bold">
              BUILT TO BE EXPERIENCED.
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[#A4A4A4] max-w-md">
            A closer look at the stadium atmospheres, player communities, and broadcast campaigns behind the work.
          </p>
        </div>

        {/* Responsive 16:9 Video Container with Cobx Masters Collage Thumbnail Cover */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#0d0d0d] border border-[#2B2B2B] shadow-2xl group">
          {isPlayingInline ? (
            /* Active Inline YouTube Player */
            <div className="w-full h-full relative">
              <iframe
                src={youtubeEmbedUrl}
                title="Morfiction Event Showreel — Built To Be Experienced"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0 absolute inset-0"
              />
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#101010]/90 border border-[#303030] text-[#D4FF00] font-display text-xs hover:bg-[#191919] transition-all backdrop-blur-md cursor-pointer"
                title="Open in Cinema Mode"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Cinema Mode</span>
              </button>
            </div>
          ) : (
            /* Interactive Poster Preview using the Cobx Masters Collage Asset */
            <div
              onClick={() => setIsPlayingInline(true)}
              className="relative w-full h-full cursor-pointer overflow-hidden select-none"
            >
              {/* Cobx Masters Event Collage Image as Primary Visual Background */}
              <img
                src={coverSrc}
                alt="Cobx Masters Arena stage, trophy reveal, casters and tournament champions event collage"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                onError={handleCoverError}
                loading="eager"
              />

              {/* Subtle Dark Gradient Overlay for Maximum Text & Button Readability */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
                }}
              ></div>

              {/* Central Kinetic Electric-Lime Play Button Over Thumbnail */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
                <button
                  aria-label="Play Morfiction Event Aftermovie"
                  className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#D4FF00] text-[#101010] shadow-[0_0_38px_rgba(212,255,0,0.55)] group-hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                </button>

                <div className="flex flex-col items-center max-w-lg">
                  <span className="inline-block px-3 py-1 rounded bg-[#101010]/95 border border-[#D4FF00]/60 font-display text-xs text-[#D4FF00] font-bold uppercase tracking-wider mb-2 backdrop-blur-md shadow-lg">
                    WATCH MORFICTION SHOWREEL
                  </span>
                  <span className="font-body text-xs sm:text-sm text-[#F3F1EB] font-medium drop-shadow-md">
                    Click to play the official aftermovie &amp; stadium tournament atmosphere
                  </span>
                </div>
              </div>

              {/* Top UI Badges Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#101010]/90 border border-[#303030] text-[#F3F1EB] font-display text-xs backdrop-blur-sm shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-ping"></span>
                  <span>4K MASTER • OFFICIAL AFTERMOVIE REEL</span>
                </span>
                <span className="hidden sm:inline-block px-3 py-1.5 rounded bg-[#101010]/90 border border-[#303030] text-[#A4A4A4] font-display text-xs backdrop-blur-sm shadow-md">
                  16:9 CINEMATIC • 60 FPS
                </span>
              </div>

              {/* Bottom UI Badges Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1.5 rounded bg-[#101010]/90 border border-[#303030] text-[#A4A4A4] font-title text-[10px] tracking-wider uppercase backdrop-blur-sm shadow-md pointer-events-none">
                  AUDIO: LIVE ON-GROUND ARENA SOUNDSCAPE
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLightboxOpen(true);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#101010]/90 border border-[#D4FF00]/40 text-[#D4FF00] font-display text-xs backdrop-blur-sm font-semibold hover:bg-[#191919] transition-all cursor-pointer shadow-md"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Cinema Lightbox</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Full-Screen Cinema Video Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-[#141414] border border-[#2B2B2B] rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            {/* Lightbox Header */}
            <div className="p-4 sm:p-5 border-b border-[#2B2B2B] flex items-center justify-between bg-[#101010]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4FF00] animate-pulse"></span>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#F3F1EB] uppercase tracking-wide">
                    Morfiction Event Aftermovie • Built To Be Experienced
                  </h3>
                  <p className="font-title text-[10px] text-[#A4A4A4] uppercase tracking-wider">
                    Official 4K Broadcast Stream • Morfiction Agency
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded-lg bg-[#191919] text-[#A4A4A4] hover:text-[#F3F1EB] border border-[#303030] transition-colors cursor-pointer"
                aria-label="Close cinema lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox 16:9 YouTube iFrame */}
            <div className="relative aspect-video w-full bg-[#000000]">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1&autoplay=1`}
                title="Morfiction Event Showreel Cinema Lightbox"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0 absolute inset-0"
              />
            </div>

            {/* Lightbox Footer Bar */}
            <div className="p-4 bg-[#101010] border-t border-[#2B2B2B] flex items-center justify-between text-xs font-display text-[#A4A4A4]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4FF00]" />
                <span>OFFICIAL YOUTUBE MEDIA EMBED</span>
              </div>
              <span className="text-[#D4FF00]">MORFICTION GAMING ARCHIVE</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
