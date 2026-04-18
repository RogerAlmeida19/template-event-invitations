import React, { useState } from 'react';
import { eventConfig } from '../config/event';

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    attendance: 'yes',
    message: '',
    dietary: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!eventConfig.settings.showRSVP || !eventConfig.rsvp.enabled) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el RSVP
    console.log('RSVP enviado:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
            <div className="text-6xl mb-4">🎉</div>
            <h2
              className="text-3xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: eventConfig.fonts.heading }}
            >
              ¡Gracias por confirmar!
            </h2>
            <p
              className="text-lg text-gray-700 mb-6"
              style={{ fontFamily: eventConfig.fonts.body }}
            >
              Hemos recibido tu confirmación. ¡Nos vemos pronto!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow duration-300"
              style={{ fontFamily: eventConfig.fonts.body }}
            >
              Enviar otra respuesta
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: eventConfig.fonts.heading }}
          >
            Confirma tu Asistencia
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6" />
          <p
            className="text-lg text-gray-700 mb-4"
            style={{ fontFamily: eventConfig.fonts.body }}
          >
            {eventConfig.rsvp.message}
          </p>
          <p
            className="text-sm text-gray-600"
            style={{ fontFamily: eventConfig.fonts.body }}
          >
            Fecha límite: {new Date(eventConfig.rsvp.deadline).toLocaleDateString('es-ES')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontFamily: eventConfig.fonts.body }}
              >
                Nombre completo *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                style={{ fontFamily: eventConfig.fonts.body }}
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontFamily: eventConfig.fonts.body }}
              >
                Correo electrónico *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                style={{ fontFamily: eventConfig.fonts.body }}
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontFamily: eventConfig.fonts.body }}
              >
                Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                style={{ fontFamily: eventConfig.fonts.body }}
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontFamily: eventConfig.fonts.body }}
              >
                Número de invitados
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                style={{ fontFamily: eventConfig.fonts.body }}
              >
                <option value="1">Solo yo</option>
                <option value="2">Yo + 1 invitado</option>
                <option value="3">Yo + 2 invitados</option>
                <option value="4">Yo + 3 invitados</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700 mb-3"
              style={{ fontFamily: eventConfig.fonts.body }}
            >
              ¿Asistirás al evento? *
            </label>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={formData.attendance === 'yes'}
                  onChange={handleChange}
                  className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                />
                <span
                  className="ml-2 text-gray-700"
                  style={{ fontFamily: eventConfig.fonts.body }}
                >
                  Sí, asistiré
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  checked={formData.attendance === 'no'}
                  onChange={handleChange}
                  className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                />
                <span
                  className="ml-2 text-gray-700"
                  style={{ fontFamily: eventConfig.fonts.body }}
                >
                  No podré asistir
                </span>
              </label>
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontFamily: eventConfig.fonts.body }}
            >
              Restricciones alimentarias
            </label>
            <input
              type="text"
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
              style={{ fontFamily: eventConfig.fonts.body }}
              placeholder="Vegetariano, alérgico a..., etc."
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontFamily: eventConfig.fonts.body }}
            >
              Mensaje adicional
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 resize-none"
              style={{ fontFamily: eventConfig.fonts.body }}
              placeholder="Cualquier mensaje o felicitación..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              style={{ fontFamily: eventConfig.fonts.body }}
            >
              Enviar Confirmación
            </button>
          </div>
        </form>

        {/* Información de contacto */}
        <div className="mt-8 text-center">
          <p
            className="text-sm text-gray-600 mb-2"
            style={{ fontFamily: eventConfig.fonts.body }}
          >
            ¿Tienes preguntas? Contáctanos:
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href={`tel:${eventConfig.rsvp.contact.phone}`}
              className="text-purple-600 hover:text-purple-800 transition-colors duration-200"
            >
              📞 {eventConfig.rsvp.contact.phone}
            </a>
            <a
              href={`mailto:${eventConfig.rsvp.contact.email}`}
              className="text-purple-600 hover:text-purple-800 transition-colors duration-200"
            >
              ✉️ {eventConfig.rsvp.contact.email}
            </a>
            <a
              href={eventConfig.rsvp.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 transition-colors duration-200"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;