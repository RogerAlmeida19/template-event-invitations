import React from 'react';
import { eventConfig } from '../config/event';

const CoupleStory: React.FC = () => {
  if (!eventConfig.settings.showStory || !eventConfig.story.enabled) {
    return null;
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-dancing"
          >
            {eventConfig.story.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-lime-300 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto de la historia */}
          <div className={`space-y-6 ${eventConfig.animations.enabled ? 'animate-fade-in' : ''}`}>
            <p
              className="text-lg text-gray-700 leading-relaxed"
              style={{ fontFamily: eventConfig.fonts.body }}
            >
              {eventConfig.story.content}
            </p>

            {/* Información de la pareja eliminada para XV años */}
          </div>

          {/* Foto única de la historia */}
          <div className={`flex justify-center ${eventConfig.animations.enabled ? 'animate-fade-in' : ''}`}>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg max-w-md w-full">
              <img
                src={eventConfig.story.image}
                alt="Foto de la historia"
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ objectPosition: 'center 30%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleStory;