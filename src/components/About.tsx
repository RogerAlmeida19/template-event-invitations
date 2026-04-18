import { businessConfig } from '../config/business'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-0 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Acerca de Nosotros</h2>
        <p className="section-subtitle">
          Conoce nuestra historia, misión y valores
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Imagen */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition-all duration-300"></div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"
              alt="Nosotros"
              className="relative rounded-lg shadow-lg w-full hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Contenido */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestra Misión
            </h3>
            <p className="text-gray-600 mb-6 leading-8 text-lg">
              {businessConfig.business.description}
            </p>

            {/* Valores */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Nuestros Valores</h4>
              {businessConfig.services.map((service) => (
                <div key={service.id} className="flex gap-4 group">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-lg text-gray-900 group-hover:text-primary transition">
                      {service.title}
                    </h5>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision y Mision Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Visión */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-primary hover:shadow-lg transition">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Nuestra Visión</h3>
            <p className="text-gray-700">
              Ser la empresa líder en innovación y calidad, reconocida por nuestra excelencia y compromiso con nuestros clientes.
            </p>
          </div>

          {/* Misión */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg border-l-4 border-secondary hover:shadow-lg transition">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Nuestra Misión</h3>
            <p className="text-gray-700">
              Proporcionar soluciones innovadoras que transformen los negocios de nuestros clientes y generen valor duradero.
            </p>
          </div>

          {/* Compromiso */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-lg border-l-4 border-accent hover:shadow-lg transition">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Nuestro Compromiso</h3>
            <p className="text-gray-700">
              Mantener altos estándares de calidad, integridad y ética en cada proyecto que realizamos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
