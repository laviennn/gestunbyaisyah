import React from 'react';
import { siteContent } from '../../config/siteContent';

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(siteContent.contact.defaultMessage);
  const waUrl = `${siteContent.contact.whatsappLink}${siteContent.contact.phone}?text=${message}`;

  return (
    <a
      href={waUrl}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Hubungi WhatsApp'
      className='fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-accent text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse-slow group'>
      <svg
        className='w-8 h-8'
        fill='currentColor'
        viewBox='0 0 24 24'>
        <path d='M12.031 0C5.385 0 0 5.385 0 12.031c0 2.115.551 4.176 1.597 5.986L.048 24l6.155-1.547c1.748.966 3.738 1.474 5.828 1.474 6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm0 21.979c-1.802 0-3.565-.483-5.111-1.399l-.367-.217-3.805.955.972-3.712-.238-.379C2.519 15.656 2 13.882 2 12.031 2 6.49 6.49 2 12.031 2s10.031 4.49 10.031 10.031-4.49 10.031-10.031 10.031zm5.513-7.514c-.302-.151-1.787-.882-2.064-.984-.278-.102-.481-.151-.683.151-.202.302-.782.984-.959 1.185-.177.202-.354.227-.656.076-.302-.151-1.275-.47-2.428-1.5-8.97-8.97-1.127-1.246-1.428-1.548-.302-.302.261-.258.558-.847.098-.198.049-.371-.026-.523-.076-.151-.683-1.649-.936-2.257-.246-.593-.496-.513-.683-.522-.177-.009-.379-.009-.581-.009-.202 0-.53.076-.807.379-.278.302-1.06 1.037-1.06 2.529s1.085 2.936 1.236 3.138c.151.202 2.14 3.266 5.184 4.58.723.313 1.288.5 1.728.641.725.23 1.385.197 1.905.12.58-.084 1.787-.73 2.039-1.436.252-.705.252-1.31.177-1.436-.076-.126-.278-.202-.581-.353z' />
      </svg>
      {/* Tooltip */}
      <span className='absolute right-20 bg-text text-white text-sm font-medium px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap'>
        Tanya Admin Online
      </span>
    </a>
  );
}
