import {
  FiInstagram,
  FiFacebook,
  FiMessageCircle,
  FiPhone,
  FiMail,
  FiMapPin,
  FiExternalLink,
} from 'react-icons/fi'
import { businessConfig } from '../config/business'

const iconMap: Record<string, React.ReactNode> = {
  FiInstagram: <FiInstagram size={24} />,
  FiFacebook: <FiFacebook size={24} />,
  FiMessageCircle: <FiMessageCircle size={24} />,
  FiLinkedin: <FiExternalLink size={24} />,
}

export default function SocialLinks() {
  return (
    <section id="social" className="py-20 px-4 md:px-0 bg-gradient-to-br from-gray-900 to-black">
      <div className="container-custom">
        <h2 className="section-title text-white">Conecta Conmigo</h2>
        <p className="section-subtitle text-gray-300">
          Sígueme en redes sociales y mantente en contacto
        </p>

        {/* Contacto Directo */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Teléfono */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-700 hover:border-primary">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-primary bg-opacity-20 p-4 rounded-full group-hover:bg-opacity-30 transition">
                <FiPhone className="text-4xl text-primary" />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-3 text-white text-center">Teléfono</h3>
            <a
              href={`tel:${businessConfig.business.phone}`}
              className="text-primary hover:text-secondary font-semibold text-center block transition"
            >
              {businessConfig.business.phone}
            </a>
          </div>

          {/* Email */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-700 hover:border-primary">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-primary bg-opacity-20 p-4 rounded-full group-hover:bg-opacity-30 transition">
                <FiMail className="text-4xl text-primary" />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-3 text-white text-center">Email</h3>
            <a
              href={`mailto:${businessConfig.business.email}`}
              className="text-primary hover:text-secondary font-semibold text-center block transition text-sm break-all"
            >
              {businessConfig.business.email}
            </a>
          </div>

          {/* Ubicación */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-700 hover:border-primary">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-primary bg-opacity-20 p-4 rounded-full group-hover:bg-opacity-30 transition">
                <FiMapPin className="text-4xl text-primary" />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-3 text-white text-center">Ubicación</h3>
            <p className="text-gray-300 text-center text-sm">{businessConfig.business.address}</p>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Sígueme en Redes Sociales
          </h3>
          <p className="text-white text-opacity-90 mb-8 text-lg">
            Conecta conmigo en todas mis redes sociales
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {businessConfig.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary p-4 rounded-full hover:scale-125 hover:shadow-2xl transition-all duration-300 hover:bg-gray-100"
                title={link.name}
              >
                {iconMap[link.icon] || <FiInstagram size={24} />}
              </a>
            ))}
          </div>
          <p className="text-white text-opacity-75 mt-8 text-sm">
            Comparte tu experiencia y conecta con nuestra comunidad
          </p>
        </div>
      </div>
    </section>
  )
}
