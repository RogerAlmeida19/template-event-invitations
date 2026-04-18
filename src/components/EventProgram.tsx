import React from 'react';
import { eventConfig } from '../config/event';

const EventProgram: React.FC = () => {
  if (!eventConfig.settings.showProgram) {
    return null;
  }

  return (
    <section className="py-8 px-2 sm:px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2
            className="text-2xl md:text-4xl font-bold text-gray-800 mb-2"
          >
            Programa del Evento
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-lime-300 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Línea vertical del timeline */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-lime-300 transform md:-translate-x-0.5" />

          <div className="space-y-4">
            {eventConfig.program.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${eventConfig.animations.enabled ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                {/* Punto del timeline */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-white border-2 border-emerald-500 rounded-full transform md:-translate-x-2 z-10" />

                {/* Contenido */}
                <div className={`ml-10 md:ml-0 md:w-1/2 w-full`}> 
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-3 shadow border border-gray-100">
                    <div className="flex items-start space-x-2">
                      <div className="text-2xl">{item.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span
                            className="text-lg font-bold text-emerald-700"
                          >
                            {item.time}
                          </span>
                          <h3
                            className="text-base font-semibold text-gray-800"
                          >
                            {item.title}
                          </h3>
                        </div>
                        <p
                          className="text-gray-700 mb-1 text-sm"
                        >
                          {item.description}
                        </p>
                        <p
                          className="text-xs text-emerald-700 font-medium"
                          style={{ fontFamily: eventConfig.fonts.accent }}
                        >
                          📍 {item.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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

export default EventProgram;