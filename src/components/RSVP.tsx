import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { eventConfig } from "../config/event";

const RSVP: React.FC = () => {
  if (!eventConfig.settings.showRSVP || !eventConfig.rsvp.enabled) {
    return null;
  }

  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handleScroll = () => {
      if (el.scrollTop > 40) setShowScrollHint(false);
      else setShowScrollHint(true);
    };
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50 relative h-screen overflow-y-auto flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        {/* Spinner de carga */}
        <div
          id="form-iframe-container"
          style={{ position: "relative", minHeight: 500, width: '100%', maxWidth: 700 }}
        >
          {!iframeLoaded && (
            <div
              id="form-spinner"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.7)",
                zIndex: 10,
              }}
            >
              <svg
                className="animate-spin h-10 w-10 text-emerald-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            </div>
          )}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf_gcobEv_4EeEUJxIQu7k77FkWdsdF-Q1bDmLKQ_7CtU6HMQ/viewform?embedded=true"
            width="100%"
            height="700"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Confirmar asistencia"
            className="w-full rounded-xl border-none"
            style={{ minHeight: 500, background: "white" }}
            allowFullScreen
            onLoad={() => setIframeLoaded(true)}
          />
        </div>
        {/* Contacto */}
        <div className="mt-8 text-center">
          <p className="text-lg font-bold text-emerald-700">¿Dudas o problemas para confirmar?</p>
          <p className="text-md text-gray-700 mt-2">Teléfono: <a href={`tel:${eventConfig.rsvp.contact.phone}`} className="underline hover:text-emerald-600">{eventConfig.rsvp.contact.phone}</a></p>
          <p className="text-md text-gray-700 mt-1">WhatsApp: <a href={eventConfig.rsvp.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">Enviar mensaje</a></p>
        </div>
      </div>
      {/* Indicador de scroll vertical */}
      <AnimatePresence>
        {showScrollHint && (
          <motion.div
            className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            exit={{ opacity: 0 }}
            transition={{ y: { repeat: Infinity, duration: 1.4, ease: "easeInOut" }, opacity: { duration: 0.4 } }}
          >
            <span className="text-emerald-700/70 text-xs tracking-widest uppercase select-none">scroll</span>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5v14M12 19l-5-5M12 19l5-5" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RSVP;
