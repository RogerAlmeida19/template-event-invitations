// Configuración personalizable del sitio
export const businessConfig = {
  // Información general
  business: {
    name: 'Mi Negocio',
    tagline: 'Soluciones innovadoras para tu éxito',
    description: 'Somos una empresa dedicada a brindar servicios de calidad. Con años de experiencia en el mercado, nos especializamos en crear soluciones personalizadas para cada cliente.',
    email: 'info@minegocio.com',
    phone: '+1 (555) 123-4567',
    address: 'Calle Principal 123, Ciudad, Estado',
  },

  // Redes sociales
  socialLinks: [
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: 'FiInstagram',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: 'FiFacebook',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/1234567890',
      icon: 'FiMessageCircle',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'FiLinkedin',
    },
  ],

  // Galería de imágenes (fotos de presentación)
  gallery: [
    {
      id: 1,
      title: 'Producto 1',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=400&fit=crop',
      description: 'Descripción del producto o servicio',
    },
    {
      id: 2,
      title: 'Producto 2',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
      description: 'Descripción del producto o servicio',
    },
    {
      id: 3,
      title: 'Producto 3',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
      description: 'Descripción del producto o servicio',
    },
    {
      id: 4,
      title: 'Producto 4',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=400&fit=crop',
      description: 'Descripción del producto o servicio',
    },
  ],

  // Ubicación en mapa
  location: {
    latitude: 40.7128,
    longitude: -74.0060,
    city: 'Nueva York',
  },

  // Equipo/Servicios
  services: [
    {
      id: 1,
      title: 'Servicio 1',
      description: 'Descripción del servicio 1',
      icon: '🎯',
    },
    {
      id: 2,
      title: 'Servicio 2',
      description: 'Descripción del servicio 2',
      icon: '⚡',
    },
    {
      id: 3,
      title: 'Servicio 3',
      description: 'Descripción del servicio 3',
      icon: '🚀',
    },
  ],

  // Colores personalizables
  colors: {
    primary: '#FF6B35',
    secondary: '#004E89',
    accent: '#F7B801',
    dark: '#1a1a1a',
    light: '#f5f5f5',
  },
}
