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

  if (isExpired) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2" style={{ fontFamily: eventConfig.fonts.heading }}>
          ¡El gran día ha llegado!
        </h3>
        <p className="text-gray-600" style={{ fontFamily: eventConfig.fonts.body }}>
          Gracias por ser parte de este momento especial
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-800" style={{ fontFamily: eventConfig.fonts.heading }}>
        Faltan
      </h3>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-gradient-to-br from-emerald-500 to-lime-300 rounded-xl p-4 text-white">
          <div className="text-3xl font-bold" style={{ fontFamily: eventConfig.fonts.heading }}>
            {timeLeft.days}
          </div>
          <div className="text-sm opacity-90" style={{ fontFamily: eventConfig.fonts.body }}>
            Días
          </div>
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-lime-300 rounded-xl p-4 text-white">
          <div className="text-3xl font-bold" style={{ fontFamily: eventConfig.fonts.heading }}>
            {timeLeft.hours}
          </div>
          <div className="text-sm opacity-90" style={{ fontFamily: eventConfig.fonts.body }}>
            Horas
          </div>
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-lime-300 rounded-xl p-4 text-white">
          <div className="text-3xl font-bold" style={{ fontFamily: eventConfig.fonts.heading }}>
            {timeLeft.minutes}
          </div>
          <div className="text-sm opacity-90" style={{ fontFamily: eventConfig.fonts.body }}>
            Min
          </div>
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-lime-300 rounded-xl p-4 text-white">
          <div className="text-3xl font-bold" style={{ fontFamily: eventConfig.fonts.heading }}>
            {timeLeft.seconds}
          </div>
          <div className="text-sm opacity-90" style={{ fontFamily: eventConfig.fonts.body }}>
            Seg
          </div>
        </div>
      </div>
      <p className="text-center mt-6 text-gray-600 text-sm" style={{ fontFamily: eventConfig.fonts.body }}>
        Hasta el {new Date(eventConfig.event.date).toLocaleDateString('es-ES', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>
    </div>
  );
};

export default Countdown;