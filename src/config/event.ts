// Configuración personalizable del template de invitaciones de eventos
export const eventConfig = {
  // Información básica del evento
  event: {
    type: 'quince', // 'wedding', 'quince', 'birthday', 'anniversary', etc.
    title: 'Mis XV Años',
    subtitle: 'Una celebración mágica llena de mariposas y sueños',
    couple: 'Ana Sofía',
    date: '2025-09-21T19:00:00', // ISO format - IMPORTANTE: Actualiza esta fecha
    location: {
      name: 'Salón Mariposas de Cristal',
      address: 'Av. del Bosque 123, Ciudad, País',
      ceremony: 'Jardín de las Mariposas, Calle Aurora 45'
    },
    dressCode: 'Verde pistacho elegante',
    hashtag: '#AnaSofiaXV',
    description: 'Con gran ilusión te invito a celebrar mis XV años, una noche de mariposas, música y magia bajo un cielo de estrellas. ¡Ven a compartir este momento especial conmigo!'
  },

  // Información de los protagonistas (para bodas, XV años, etc.)
  couple: {
    partner1: {
      name: 'María García',
      role: 'Novia',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop',
      description: 'Arquitecta apasionada por el diseño'
    },
    partner2: {
      name: 'Carlos Rodríguez',
      role: 'Novio',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      description: 'Ingeniero con corazón de artista'
    }
  },

  // Historia de amor (opcional - se puede ocultar)
  story: {
    enabled: true,
    title: 'Nuestra Historia',
    content: 'Nos conocimos hace 5 años en una cafetería del centro. Desde ese momento supimos que queríamos compartir nuestras vidas juntos. Hoy, con el corazón lleno de gratitud, celebramos el amor que nos une.',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop'
    ]
  },

  // Programa del evento
  program: [
    {
      time: '17:00',
      title: 'Ceremonia Religiosa',
      description: 'Intercambio de votos y anillos',
      icon: '💍',
      location: 'Iglesia San José'
    },
    {
      time: '18:30',
      title: 'Cóctel de Bienvenida',
      description: 'Bebidas y canapés',
      icon: '🍸',
      location: 'Jardín del salón'
    },
    {
      time: '19:30',
      title: 'Cena de Gala',
      description: 'Banquete principal',
      icon: '🍽️',
      location: 'Salón principal'
    },
    {
      time: '21:30',
      title: 'Fiesta y Baile',
      description: 'Música, baile y celebración',
      icon: '🎉',
      location: 'Pista de baile'
    }
  ],

  // Galería de fotos
  gallery: [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
      alt: 'Foto de la pareja',
      title: 'Nuestra historia'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop',
      alt: 'Preparativos',
      title: 'Los preparativos'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&h=400&fit=crop',
      alt: 'Lugar del evento',
      title: 'El lugar mágico'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=400&fit=crop',
      alt: 'Decoración',
      title: 'La decoración'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=400&fit=crop',
      alt: 'Anillo de compromiso',
      title: 'El compromiso'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=400&fit=crop',
      alt: 'Atardecer romántico',
      title: 'Momentos especiales'
    }
  ],

  // Información de confirmación (RSVP)
  rsvp: {
    enabled: true,
    deadline: '2024-05-15',
    message: 'Confirma tu asistencia antes del 15 de mayo',
    contact: {
      phone: '+1 (555) 123-4567',
      email: 'rsvp@nuestraboda.com',
      whatsapp: 'https://wa.me/1234567890'
    },
    note: 'Por favor indica si asistirás acompañado y cualquier restricción alimentaria.'
  },

  // Padrinos/Madrinas (opcional)
  padrinos: {
    enabled: false,
    title: 'Nuestros Padrinos',
    padrinos: [
      { name: 'Ana & Roberto', role: 'Padrinos de Arras' },
      { name: 'Carmen & Luis', role: 'Padrinos de Mariachi' }
    ]
  },

  // Colores del tema (verde pistacho y mariposas)
  theme: {
    primary: '#8BC19F',    // Verde pistacho
    secondary: '#E9D4A6',  // Amarillo suave
    accent: '#F8B7D6',     // Rosa mariposa
    background: '#F7FBF5', // Blanco verdoso suave
    text: '#1F3B2D',      // Verde oscuro
    muted: '#6B7B65'       // Verde grisáceo
  },

  // Configuración de animaciones (simples y elegantes)
  animations: {
    enabled: true,
    duration: 800, // ms
    delay: 200,    // ms entre elementos
    type: 'fade'   // 'fade', 'slide', 'scale'
  },

  // Configuración de fuentes (elegantes)
  fonts: {
    heading: 'Playfair Display, serif',
    body: 'Inter, sans-serif',
    accent: 'Dancing Script, cursive'
  },

  // Configuración adicional
  settings: {
    showCountdown: true,
    showStory: true,
    showGallery: true,
    showProgram: true,
    showRSVP: true,
    language: 'es', // 'es', 'en'
    currency: 'USD'
  }
}
