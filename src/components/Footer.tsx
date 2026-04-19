import { eventConfig } from "../config/event";
import {
  FiMessageCircle,
  FiPhone,
  FiMail,
  FiMapPin,
  FiHeart,
} from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Información del Evento */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-lime-300 rounded-full flex items-center justify-center">
                <FiHeart className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">
                {eventConfig.event.couple}
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              {eventConfig.event.description}
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FiMapPin size={16} />
                <span>{eventConfig.event.location.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone size={16} />
                <span>{eventConfig.rsvp.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail size={16} />
                <span>{eventConfig.rsvp.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Programa del Evento */}
          <div>
            <h4
              className="font-bold mb-4 text-lg text-white"
              style={{ fontFamily: eventConfig.fonts.heading }}
            >
              Programa
            </h4>
            <div className="space-y-3 text-gray-400">
              {eventConfig.program.slice(0, 4).map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-emerald-300 font-medium text-sm w-12">
                    {item.time}
                  </span>
                  <span
                    className="text-sm"
                    style={{ fontFamily: eventConfig.fonts.body }}
                  >
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contacto y Redes */}
          <div>
            <h4
              className="font-bold mb-4 text-lg text-white"
              style={{ fontFamily: eventConfig.fonts.heading }}
            >
              Conecta con Nosotros
            </h4>
            <div className="space-y-3">
              <a
                href={eventConfig.rsvp.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-emerald-300 transition-colors duration-200"
              >
                <FiMessageCircle size={18} />
                <span style={{ fontFamily: eventConfig.fonts.body }}>
                  WhatsApp
                </span>
              </a>
              <a
                href={`mailto:${eventConfig.rsvp.contact.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-emerald-300 transition-colors duration-200"
              >
                <FiMail size={18} />
                <span style={{ fontFamily: eventConfig.fonts.body }}>
                  Email
                </span>
              </a>
              <a
                href={`tel:${eventConfig.rsvp.contact.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <FiPhone size={18} />
                <span style={{ fontFamily: eventConfig.fonts.body }}>
                  Teléfono
                </span>
              </a>
            </div>

            {/* Hashtag */}
            <div className="mt-6">
              <p
                className="text-emerald-300 font-medium"
                style={{ fontFamily: eventConfig.fonts.accent }}
              >
                {eventConfig.event.hashtag}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p
              className="text-gray-400 text-sm mb-4 md:mb-0"
              style={{ fontFamily: eventConfig.fonts.body }}
            >
              © {currentYear} {eventConfig.event.couple}. Hecho con ❤️ para
              celebrar el amor.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
