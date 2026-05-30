import React, { useState } from "react";
import { eventConfig } from "../config/event";

const RSVP: React.FC = () => {
  if (!eventConfig.settings.showRSVP || !eventConfig.rsvp.enabled) {
    return null;
  }

  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50 relative h-screen overflow-y-auto flex flex-col items-center">
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
    </section>
  );
};

export default RSVP;
