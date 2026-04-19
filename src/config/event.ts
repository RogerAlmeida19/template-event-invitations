// Configuración personalizable del template de invitaciones de eventos
export const eventConfig = {
  // Información básica del evento
  event: {
    type: 'quince', // 'wedding', 'quince', 'birthday', 'anniversary', etc.
    title: 'Mis XV Años',
    subtitle: 'Una celebración mágica llena de hadas y sueños',
    couple: 'Sol Valentina',
    date: '2026-07-05T22:00:00', // ISO format - IMPORTANTE: Actualiza esta fecha
    location: {
      name: 'Salón Clahe Eventos',
      address: 'Dirección a definir',
      ceremony: 'Salón Clahe Eventos'
    },
    dressCode: 'Elegante sport',
    hashtag: '#SolValentinaXV',
    description: 'Con gran ilusión te invito a celebrar mis XV años, una noche de hadas, música y magia en un bosque encantado. ¡Ven a compartir este momento especial conmigo!'
  },

  // Información de los protagonistas (para bodas, XV años, etc.)
  couple: {},

  // Historia de amor (opcional - se puede ocultar)
  story: {
    enabled: true,
    title: 'Mi Historia',
    content: 'Desde pequeña soñé con este día tan especial. Han sido años de aprendizajes, aventuras y sueños compartidos con mi familia y amigos. Hoy, al cumplir mis XV años, celebro no solo el paso del tiempo, sino la magia de crecer rodeada de amor, alegría y esperanza. ¡Gracias por ser parte de este momento inolvidable en mi vida!',
    image: '/src/assets/bg/jcoope12-ai-generated-8367677_1920.jpg'
  },

  // Programa del evento
  program: [
    {
      time: '22:00',
      title: 'Recepción y Bienvenida',
      description: '¡Comienza la noche mágica! Recepción de invitados y bienvenida.',
      icon: '✨',
      location: 'Salón Clahe Eventos'
    },
    {
      time: '05:00',
      title: 'Fin de la Fiesta',
      description: '¡Gracias por acompañarme hasta el amanecer!',
      icon: '🌅',
      location: 'Salón Clahe Eventos'
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

  // Colores del tema (verde pistacho y magia de hadas)
  theme: {
    primary: '#8BC19F',    // Verde pistacho
    secondary: '#E9D4A6',  // Amarillo suave
    accent: '#F8B7D6',     // Rosa mágico
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
    heading: 'Dancing Script, cursive',
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
