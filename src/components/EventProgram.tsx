import React from 'react';
import { eventConfig } from '../config/event';

const EventProgram: React.FC = () => {
  if (!eventConfig.settings.showProgram) {
    return null;
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: eventConfig.fonts.heading }}
          >
            Programa del Evento
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-lime-300 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Línea vertical del timeline */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-lime-300 transform md:-translate-x-0.5" />

          <div className="space-y-8">
            {eventConfig.program.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${eventConfig.animations.enabled ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                {/* Punto del timeline */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-emerald-500 rounded-full transform md:-translate-x-2 z-10" />

                {/* Contenido */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{item.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span
                            className="text-2xl font-bold text-emerald-700"
                            style={{ fontFamily: eventConfig.fonts.heading }}
                          >
                            {item.time}
                          </span>
                          <h3
                            className="text-xl font-semibold text-gray-800"
                            style={{ fontFamily: eventConfig.fonts.heading }}
                          >
                            {item.title}
                          </h3>
                        </div>
                        <p
                          className="text-gray-700 mb-2"
                          style={{ fontFamily: eventConfig.fonts.body }}
                        >
                          {item.description}
                        </p>
                        <p
                          className="text-sm text-emerald-700 font-medium"
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
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-lime-100 rounded-2xl p-8 border border-emerald-100">
            <h3
              className="text-2xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: eventConfig.fonts.heading }}
            >
              Código de Vestimenta
            </h3>
            <p
              className="text-lg text-gray-700"
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