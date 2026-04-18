import { businessConfig } from '../config/business'
import { FiInstagram, FiFacebook, FiMessageCircle, FiPhone, FiMail, FiMapPin, FiExternalLink } from 'react-icons/fi'

const iconMap: Record<string, React.ReactNode> = {
  FiInstagram: <FiInstagram size={20} />,
  FiFacebook: <FiFacebook size={20} />,
  FiMessageCircle: <FiMessageCircle size={20} />,
  FiLinkedin: <FiExternalLink size={20} />,
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 md:px-0">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Información */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {businessConfig.business.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-bold text-primary">
                {businessConfig.business.name}
              </h3>
            </div>
            <p className="text-gray-400">
              {businessConfig.business.tagline}
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-bold mb-4 text-lg text-white">Enlaces Rápidos</h4>
            <nav className="space-y-3 text-gray-400">
              <div>
                <a href="#hero" className="hover:text-primary transition">
                  Inicio
                </a>
              </div>
              <div>
                <a href="#about" className="hover:text-primary transition">
                  Acerca de
                </a>
              </div>
              <div>
                <a href="#gallery" className="hover:text-primary transition">
                  Galería
                </a>
              </div>
              <div>
                <a href="#location" className="hover:text-primary transition">
                  Ubicación
                </a>
              </div>
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold mb-4 text-lg text-white">Contacto</h4>
            <div className="space-y-3 text-gray-400">
              <a 
                href={`tel:${businessConfig.business.phone}`}
                className="flex items-center gap-2 hover:text-primary transition"
              >
                <FiPhone size={16} /> {businessConfig.business.phone}
              </a>
              <a 
                href={`mailto:${businessConfig.business.email}`}
                className="flex items-center gap-2 hover:text-primary transition"
              >
                <FiMail size={16} /> {businessConfig.business.email}
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <FiMapPin size={16} /> {businessConfig.business.address}
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="font-bold mb-4 text-lg text-white">Sígueme</h4>
            <div className="flex gap-3">
              {businessConfig.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary hover:scale-110 transition-all duration-300 bg-gray-800 p-2 rounded-lg"
                  title={link.name}
                >
                  {iconMap[link.icon] || <FiInstagram />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>&copy; {currentYear} {businessConfig.business.name}. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition">Política de Privacidad</a>
            <a href="#" className="hover:text-primary transition">Términos de Servicio</a>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-8 mx-auto block text-gray-400 hover:text-primary transition"
          title="Volver al inicio"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  )
}
