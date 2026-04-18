import { businessConfig } from '../config/business'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="pt-32 pb-20 px-4 md:px-0 text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex items-center"
    >
      <div className="container-custom w-full">
        {/* Decoración de fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary opacity-10 rounded-full blur-3xl"></div>
        </div>

        {/* Contenido */}
        <div className="relative z-10">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary border-opacity-30">
              Bienvenido a {businessConfig.business.name}
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            {businessConfig.business.name}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto font-light">
            {businessConfig.business.tagline}
          </p>

          {/* Descripción */}
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Somos la solución innovadora que tu negocio necesita
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo('about')}
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
            >
              Descubre Más
              <svg className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo('social')}
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg"
            >
              Contactanos
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 pt-16 border-t border-gray-700">
            <div className="grid grid-cols-3 gap-8 md:gap-16">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
                <p className="text-gray-400">Clientes Satisfechos</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                <p className="text-gray-400">Proyectos Completados</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
                <p className="text-gray-400">Años de Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
