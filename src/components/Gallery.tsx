import { useState } from 'react'
import { FiInstagram, FiX } from 'react-icons/fi'
import { businessConfig } from '../config/business'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-20 px-4 md:px-0 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Nuestra Galería</h2>
        <p className="section-subtitle">
          Explora nuestros trabajos y proyectos
        </p>

        {/* Galería Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {businessConfig.gallery.map((item) => (
            <div
              key={item.id}
              className="card-hover bg-white rounded-lg overflow-hidden shadow-md cursor-pointer group"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver más
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Feed Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <FiInstagram size={32} className="text-primary" />
            <h3 className="text-2xl font-bold text-gray-900">
              Síguenos en Instagram
            </h3>
          </div>
          <p className="text-center text-gray-600 mb-8">
            Descubre más contenido en nuestro perfil de Instagram
          </p>
          <div className="flex justify-center">
            <a
              href={businessConfig.socialLinks.find(l => l.name === 'Instagram')?.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary"
            >
              <FiInstagram size={20} />
              Visita nuestro Instagram
            </a>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Integra directamente tu feed de Instagram configurado una API key de Instagram Graph API
          </p>
        </div>
      </div>

      {/* Modal de imagen expandida */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Imagen expandida"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition"
            >
              <FiX size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
