  
 "use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
  export default function ImageSlider() {
  // Configure Embla with the Autoplay plugin (12000ms = 12 seconds)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 12000, stopOnInteraction: false }),
  ]);

  // Navigation handlers
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative mx-auto w-full max-w-4xl px-4 py-8">
      {/* Carousel Viewport */}
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {/* Slide 1 */}
          <div className="flex-[0_0_100%] min-w-0 flex justify-center items-center p-4">
            <Image
              src="/Arteta.png"
              alt="Profile picture"
              width={400}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>

          {/* Slide 2 */}
          <div className="flex-[0_0_100%] min-w-0 flex justify-center items-center p-4">
            <Image
              src="/Arteta.png"
              alt="Testimonial"
              width={400}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
             <div className="flex-[0_0_100%] min-w-0 flex justify-center items-center p-4">
            <Image
              src="/Arteta.png"
              alt="Testimonial"
              width={400}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
             <div className="flex-[0_0_100%] min-w-0 flex justify-center items-center p-4">
            <Image
              src="/Arteta.png"
              alt="Testimonial"
              width={400}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
             <div className="flex-[0_0_100%] min-w-0 flex justify-center items-center p-4">
            <Image
              src="/Arteta.png"
              alt="Testimonial"
              width={400}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>

          
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-zinc-800/80 hover:bg-zinc-700 text-white p-3 rounded-full transition-all shadow-lg"
        aria-label="Previous slide"
      >
        ❮
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-zinc-800/80 hover:bg-zinc-700 text-white p-3 rounded-full transition-all shadow-lg"
        aria-label="Next slide"
      >
        ❯
      </button>
    </div>
  );
}