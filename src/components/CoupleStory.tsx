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
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
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
            >
              {eventConfig.story.content}
            </p>

            {/* Información de la pareja */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <img
                  src={eventConfig.couple.partner1.image}
                  alt={eventConfig.couple.partner1.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-white"
                />
                <h3
                  className="text-xl font-semibold text-gray-800 mb-1"
                >
                  {eventConfig.couple.partner1.name}
                </h3>
                <p
                  className="text-emerald-700 font-medium"
                >
                  {eventConfig.couple.partner1.role}
                </p>
                <p
                  className="text-sm text-gray-600 mt-2"
                >
                  {eventConfig.couple.partner1.description}
                </p>
              </div>

              <div className="text-center">
                <img
                  src={eventConfig.couple.partner2.image}
                  alt={eventConfig.couple.partner2.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-white"
                />
                <h3
                  className="text-xl font-semibold text-gray-800 mb-1"
                  style={{ fontFamily: eventConfig.fonts.heading }}
                >
                  {eventConfig.couple.partner2.name}
                </h3>
                <p
                  className="text-emerald-700 font-medium"
                  style={{ fontFamily: eventConfig.fonts.accent }}
                >
                  {eventConfig.couple.partner2.role}
                </p>
                <p
                  className="text-sm text-gray-600 mt-2"
                  style={{ fontFamily: eventConfig.fonts.body }}
                >
                  {eventConfig.couple.partner2.description}
                </p>
              </div>
            </div>
          </div>

          {/* Galería de fotos de la historia */}
          <div className={`grid grid-cols-2 gap-4 ${eventConfig.animations.enabled ? 'animate-fade-in' : ''}`}>
            {eventConfig.story.images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <img
                  src={image}
                  alt={`Historia ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleStory;