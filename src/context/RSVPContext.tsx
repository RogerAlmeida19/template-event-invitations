import React, { createContext, useContext, useRef } from 'react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf_gcobEv_4EeEUJxIQu7k77FkWdsdF-Q1bDmLKQ_7CtU6HMQ/viewform?embedded=true';

interface RSVPContextType {
  iframeRef: React.MutableRefObject<HTMLIFrameElement | null>;
}

const RSVPContext = createContext<RSVPContextType | undefined>(undefined);

export const RSVPProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Solo crea el iframe una vez
  if (!iframeRef.current) {
    const iframe = document.createElement('iframe');
    iframe.src = GOOGLE_FORM_URL;
    iframe.width = '100%';
    iframe.height = '700';
    iframe.frameBorder = '0';
    iframe.marginHeight = '0';
    iframe.marginWidth = '0';
    iframe.title = 'Confirmar asistencia';
    iframe.className = 'w-full rounded-xl border-none';
    iframe.style.minHeight = '500px';
    iframe.allowFullscreen = true;
    iframeRef.current = iframe;
  }

  return (
    <RSVPContext.Provider value={{ iframeRef }}>
      {children}
    </RSVPContext.Provider>
  );
};

export function useRSVPContext() {
  const ctx = useContext(RSVPContext);
  if (!ctx) throw new Error('useRSVPContext must be used within RSVPProvider');
  return ctx;
}
