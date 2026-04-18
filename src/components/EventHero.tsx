import React from 'react';
import { eventConfig } from '../config/event';
import Countdown from './Countdown';

const EventHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background con gradiente elegante */}
      <div
        className="absolute inset-0 bg-gradient-to-br opacity-90"
        style={{
          background: `linear-gradient(135deg, ${eventConfig.theme.primary}15 0%, ${eventConfig.theme.secondary}10 50%, ${eventConfig.theme.accent}15 100%)`
        }}
      />

      {/* Hadas flotando y partículas mágicas */}
      <span className="fairy absolute left-1/2 top-28 -translate-x-1/2 animate-fairy-float" style={{zIndex:3}}>
        <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="10" fill="#FFF9C4" opacity="0.7" />
          <ellipse cx="24" cy="18" rx="5" ry="1.7" fill="#FFE082" opacity="0.7" />
          <ellipse cx="18" cy="28" rx="2.5" ry="1.2" fill="#FFF59D" opacity="0.7" />
          <ellipse cx="30" cy="28" rx="2.5" ry="1.2" fill="#FFFDE7" opacity="0.7" />
          <circle cx="24" cy="24" r="2.5" fill="#fffde4" />
        </svg>
      </span>
      <span className="fairy absolute left-[60%] top-44 animate-fairy-float delay-1000" style={{zIndex:3}}>
        <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="7" fill="#FFF9C4" opacity="0.7" />
          <ellipse cx="24" cy="16" rx="3.5" ry="1.2" fill="#FFE082" opacity="0.7" />
          <ellipse cx="17" cy="30" rx="1.5" ry="0.7" fill="#FFF59D" opacity="0.7" />
          <ellipse cx="31" cy="30" rx="1.5" ry="0.7" fill="#FFFDE7" opacity="0.7" />
          <circle cx="24" cy="24" r="1.5" fill="#fffde4" />
        </svg>
      </span>
      {/* Partículas mágicas */}
      {[...Array(12)].map((_, i) => (
        <span
          key={`sparkle-${i}`}
          className={`absolute sparkle sparkle-${i}`}
        />
      ))}

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Título principal con animación */}
        <div
          className={`mb-6 ${eventConfig.animations.enabled ? 'animate-fade-in' : ''}`}
          style={{ animationDelay: '0.2s' }}
        >
          <h1
            className="font-dancing text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#AEE9D1] via-[#C3B1E1] to-[#B39DDB] bg-clip-text text-transparent"
            style={{ textShadow: '0 6px 32px rgba(0,0,0,0.35), 0 2px 0 #fff' }}
          >
            Valentina
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-lime-300 mx-auto rounded-full" />
        </div>

        {/* Subtítulo */}
        <div
          className={`mb-8 ${eventConfig.animations.enabled ? 'animate-fade-in' : ''}`}
          style={{ animationDelay: '0.4s' }}
        >
          <h2
            className="fairytale-font text-2xl md:text-3xl text-gray-700 mb-2"
          >
            {eventConfig.event.title}
          </h2>
          <p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: eventConfig.fonts.body }}
          >
            {eventConfig.event.subtitle}
          </p>
        </div>

        {/* Información del evento */}
        <div
          className={`mb-12 ${eventConfig.animations.enabled ? 'animate-fade-in' : ''}`}
          style={{ animationDelay: '0.6s' }}
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 max-w-md mx-auto">
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl">📅</span>
                <span style={{ fontFamily: eventConfig.fonts.body }}>
                  {new Date(eventConfig.event.date).toLocaleDateString('es-ES', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl">🕐</span>
                <span style={{ fontFamily: eventConfig.fonts.body }}>
                  {new Date(eventConfig.event.date).toLocaleTimeString('es-ES', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl">📍</span>
                <span style={{ fontFamily: eventConfig.fonts.body }}>
                  {eventConfig.event.location.name}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contador regresivo */}
        {eventConfig.settings.showCountdown && (
          <div
            className={`${eventConfig.animations.enabled ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '0.8s' }}
          >
            <Countdown />
          </div>
        )}

        {/* Hashtag */}
        <div
          className={`mt-12 ${eventConfig.animations.enabled ? 'animate-fade-in' : ''}`}
          style={{ animationDelay: '1s' }}
        >
          <p
            className="text-lg text-gray-600"
            style={{ fontFamily: eventConfig.fonts.accent }}
          >
            {eventConfig.event.hashtag}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default EventHero;