import { useState } from 'react'
import { FiX } from 'react-icons/fi'
import { eventConfig } from '../config/event'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!eventConfig.settings.showGallery) {
    return null;
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: eventConfig.fonts.heading }}
          >
            Nuestra Galería
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-lime-300 mx-auto rounded-full" />
        </div>

        {/* Galería Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {eventConfig.gallery.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-item cursor-pointer group ${eventConfig.animations.enabled ? 'animate-fade-in' : ''}`}
              onClick={() => setSelectedImage(item.image)}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative h-64 overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title || item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="gallery-overlay flex items-end justify-center pb-6">
                  <h3
                    className="text-white text-lg font-semibold text-center px-4"
                    style={{ fontFamily: eventConfig.fonts.heading }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para imagen ampliada */}
        {selectedImage && typeof selectedImage === 'string' && selectedImage !== 'undefined' && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Imagen ampliada"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
              >
                <FiX size={24} />
              </button>
            </div>
          </div>
        )}

        {/* Mensaje adicional */}
        <div className="text-center">
          <p
            className="text-lg text-gray-600"
            style={{ fontFamily: eventConfig.fonts.accent }}
          >
            {eventConfig.event.hashtag}
          </p>
        </div>
      </div>
    </section>
  )
}
