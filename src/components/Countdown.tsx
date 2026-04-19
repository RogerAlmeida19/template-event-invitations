import React, { useState, useEffect } from 'react';
import { eventConfig } from '../config/event';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date(eventConfig.event.date).getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
        setIsExpired(false);
      } else {
        setIsExpired(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Transición de desvanecimiento al expirar
  if (isExpired) {
    return (
      <div className="text-center py-8 animate-fade-in-slow">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 animate-bounce-in" style={{ fontFamily: eventConfig.fonts.heading }}>
          ¡El gran día ha llegado!
        </h3>
        <p className="text-gray-600 animate-fade-in" style={{ fontFamily: eventConfig.fonts.body }}>
          Gracias por ser parte de este momento especial
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#F6FFF0] via-[#E9FCD4] to-[#D0F8CE] backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#E9FCD4] relative overflow-visible transition-all duration-700 ease-in-out animate-fade-in">
      {/* Partículas de hada animadas */}

      <h3 className="text-2xl font-bold text-center mb-6 text-gray-800" style={{ fontFamily: eventConfig.fonts.heading }}>
        Faltan
      </h3>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-white/70 border border-[#E9FCD4] rounded-xl p-4 text-[#689F38] shadow-sm relative overflow-visible">
          {/* Partícula dorada */}
          <span className="absolute -top-3 -left-3 animate-fairy-float-fast pointer-events-none" style={{ zIndex: 2 }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="3" fill="#FFD700" opacity="0.85" />
              <ellipse cx="9" cy="7" rx="1" ry="0.3" fill="#FFF8DC" opacity="0.7" />
              <ellipse cx="7" cy="12" rx="0.5" ry="0.2" fill="#FFD700" opacity="0.7" />
              <ellipse cx="11" cy="12" rx="0.5" ry="0.2" fill="#FFD700" opacity="0.7" />
              <circle cx="9" cy="9" r="0.5" fill="#FFF8DC" />
            </svg>
          </span>
          <div className="text-3xl font-bold transition-all duration-500 ease-in-out animate-count-flip" style={{ fontFamily: eventConfig.fonts.heading }}>
            {timeLeft.days}
          </div>
          <div className="text-sm opacity-90" style={{ fontFamily: eventConfig.fonts.body }}>
            Días
          </div>
        </div>
        <div className="bg-white/70 border border-[#E9FCD4] rounded-xl p-4 text-[#689F38] shadow-sm relative overflow-visible">
          <span className="absolute -top-3 right-2 animate-fairy-float pointer-events-none" style={{ zIndex: 2 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="2.5" fill="#FFD700" opacity="0.85" />
              <ellipse cx="8" cy="6.5" rx="0.8" ry="0.3" fill="#FFF8DC" opacity="0.7" />
              <ellipse cx="6.5" cy="11" rx="0.4" ry="0.15" fill="#FFD700" opacity="0.7" />
              <ellipse cx="10" cy="11" rx="0.4" ry="0.15" fill="#FFD700" opacity="0.7" />
              <circle cx="8" cy="8" r="0.4" fill="#FFF8DC" />
            </svg>
          </span>
          <div className="text-3xl font-bold transition-all duration-500 ease-in-out animate-count-flip" style={{ fontFamily: eventConfig.fonts.heading }}>
            {timeLeft.hours}
          </div>
          <div className="text-sm opacity-90" style={{ fontFamily: eventConfig.fonts.body }}>
            Horas
          </div>
        </div>
        <div className="bg-white/70 border border-[#E9FCD4] rounded-xl p-4 text-[#689F38] shadow-sm relative overflow-visible">
          <span className="absolute bottom-2 left-1 animate-fairy-float-slow pointer-events-none" style={{ zIndex: 2 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="2" fill="#FFD700" opacity="0.85" />
              <ellipse cx="7" cy="5.5" rx="0.6" ry="0.2" fill="#FFF8DC" opacity="0.7" />
              <ellipse cx="5.5" cy="10" rx="0.3" ry="0.1" fill="#FFD700" opacity="0.7" />
              <ellipse cx="9" cy="10" rx="0.3" ry="0.1" fill="#FFD700" opacity="0.7" />
              <circle cx="7" cy="7" r="0.3" fill="#FFF8DC" />
            </svg>
          </span>
          <div className="text-3xl font-bold transition-all duration-500 ease-in-out animate-count-flip" style={{ fontFamily: eventConfig.fonts.heading }}>
            {timeLeft.minutes}
          </div>
          <div className="text-sm opacity-90" style={{ fontFamily: eventConfig.fonts.body }}>
            Min
          </div>
        </div>
        <div className="bg-white/70 border border-[#E9FCD4] rounded-xl p-4 text-[#689F38] shadow-sm relative overflow-visible">
          <span className="absolute -right-3 top-1/2 animate-fairy-float pointer-events-none" style={{ zIndex: 2 }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="1.5" fill="#FFD700" opacity="0.85" />
              <ellipse cx="6" cy="4.5" rx="0.5" ry="0.15" fill="#FFF8DC" opacity="0.7" />
              <ellipse cx="4.5" cy="9" rx="0.2" ry="0.07" fill="#FFD700" opacity="0.7" />
              <ellipse cx="7.5" cy="9" rx="0.2" ry="0.07" fill="#FFD700" opacity="0.7" />
              <circle cx="6" cy="6" r="0.2" fill="#FFF8DC" />
            </svg>
          </span>
          <div className="text-3xl font-bold transition-all duration-500 ease-in-out animate-count-flip" style={{ fontFamily: eventConfig.fonts.heading }}>
            {timeLeft.seconds}
          </div>
          <div className="text-sm opacity-90" style={{ fontFamily: eventConfig.fonts.body }}>
            Seg
          </div>
        </div>
      </div>
      {/* Fecha eliminada, solo contador */}
    </div>
  );
};

export default Countdown;