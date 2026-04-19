import React from "react";
import { eventConfig } from "../config/event";

// Componente responsive y simple para mostrar el programa de eventos
const ProgramTimeline: React.FC = () => {
  if (!eventConfig.settings.showProgram) return null;
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8" style={{ fontFamily: eventConfig.fonts.heading }}>
          Programa del Evento
        </h2>
        <ul className="flex flex-col gap-6">
          {eventConfig.program.map((item, idx) => (
            <li
              key={idx}
              className="relative flex flex-row items-stretch bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 shadow border border-gray-100"
            >
              {/* Hora */}
              <div className="flex flex-row items-center justify-center w-36 min-w-[7.5rem] pr-10 gap-2">
                <span className="text-emerald-700 font-dancing text-xl sm:text-2xl" style={{ fontWeight: 400, fontFamily: eventConfig.fonts.accent }}>{item.time}</span>
                <span className="text-2xl">{item.icon}</span>
              </div>
              {/* Contenido */}
              <div className="flex-1 text-left flex flex-col justify-center">
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1" style={{ fontFamily: eventConfig.fonts.body }}>{item.title}</h3>
                <p className="text-gray-700 text-sm mb-1" style={{ fontFamily: eventConfig.fonts.body }}>{item.description}</p>
                <p className="text-xs text-emerald-700" style={{ fontFamily: eventConfig.fonts.body }}>{item.location}</p>
              </div>
            </li>
          ))}
        </ul>
        {/* Información adicional */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-lime-100 rounded-xl p-4 border border-emerald-100">
            <h3
              className="text-lg font-bold text-gray-800 mb-2"
              style={{ fontFamily: eventConfig.fonts.heading }}
            >
              Código de Vestimenta
            </h3>
            <p
              className="text-base text-gray-700"
              style={{ fontFamily: eventConfig.fonts.body }}
            >
              {eventConfig.event.dressCode}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramTimeline;
