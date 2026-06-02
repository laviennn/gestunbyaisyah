import React, { useState } from 'react';
import { siteContent } from '../../config/siteContent';

export default function Testimonials() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImg, setActiveImg] = useState('');

  const openLightbox = (imgSrc: string) => {
    setActiveImg(imgSrc);
    setLightboxOpen(true);
  };

  return (
    <section
      id='testimonials'
      className='py-20 bg-background'>
      <div className='max-w-7xl mx-auto px-6 text-center'>
        <span className='text-primary font-bold uppercase px-3 py-1 bg-secondary rounded-full mb-4 inline-block'>
          {siteContent.testimonials.subtitle}
        </span>
        <h2 className='text-3xl md:text-4xl font-extrabold mb-12 text-tertiary'>
          {siteContent.testimonials.title}
        </h2>

        {/* CSS Scroll Snap Slider */}
        <div className='flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar'>
          {siteContent.testimonials.images.map((src, idx) => (
            <div
              key={idx}
              className='snap-center shrink-0 w-64 md:w-72 cursor-pointer transition-transform hover:scale-105'
              onClick={() => openLightbox(src)}>
              <div className='bg-white rounded-2xl shadow-xl overflow-hidden aspect-[3/4] relative border-4 border-white'>
                <img
                  src={src}
                  alt={`Testimonial ${idx + 1}`}
                  loading='lazy'
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors'></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className='fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm'
          onClick={() => setLightboxOpen(false)}>
          <button className='absolute top-6 right-6 text-white text-4xl hover:text-gray-300'>
            &times;
          </button>
          <img
            src={activeImg}
            alt='Expanded Testimonial'
            className='max-h-[90vh] max-w-full rounded-xl'
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
