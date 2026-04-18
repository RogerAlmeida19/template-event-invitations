# 📚 Ejemplos de Configuración - Template de Invitaciones

Aquí encontrarás ejemplos completos de configuración para diferentes tipos de eventos. Copia y pega la configuración que más se ajuste a tu evento y modifícala según tus necesidades.

## 💒 Ejemplo 1: Boda Clásica

```typescript
export const eventConfig = {
  event: {
    type: 'wedding',
    title: 'Nuestra Boda',
    subtitle: 'Con amor y alegría celebramos este día especial',
    couple: 'María & Carlos',
    date: '2024-06-15T18:00:00',
    location: {
      name: 'Salón de Eventos Elegante',
      address: 'Av. Principal 123, Ciudad, País',
      ceremony: 'Iglesia San José, Calle Iglesia 456'
    },
    dressCode: 'Formal elegante',
    hashtag: '#NuestraBoda2024',
    description: 'Con gran alegría les invitamos a celebrar el día más importante de nuestras vidas. Un día lleno de amor, risas y momentos inolvidables.'
  },

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

  theme: {
    primary: '#8B5CF6',    // Púrpura elegante
    secondary: '#F59E0B',  // Dorado
    accent: '#EC4899',     // Rosa suave
    background: '#FAFAFA',
    text: '#1F2937',
    muted: '#6B7280'
  }
}
```

## 🎂 Ejemplo 2: Cumpleaños 50 Años

```typescript
export const eventConfig = {
  event: {
    type: 'birthday',
    title: '¡50 Años de Vida!',
    subtitle: 'Celebrando medio siglo de aventuras',
    couple: 'Ana & Familia', // Para cumpleaños individuales
    date: '2024-08-20T19:30:00',
    location: {
      name: 'Restaurante El Patio',
      address: 'Calle Gourmet 456, Ciudad, País'
    },
    dressCode: 'Elegante casual',
    hashtag: '#Ana50Años',
    description: 'Únete a nosotros para celebrar los 50 años de Ana. Una noche llena de recuerdos, risas y buena compañía.'
  },

  couple: {
    partner1: {
      name: 'Ana Martínez',
      role: 'Cumpleañera',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop',
      description: 'Maestra jubilada con pasión por la pintura'
    },
    partner2: {
      name: 'Familia Martínez',
      role: 'Familiares',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=400&fit=crop',
      description: 'La familia unida en celebración'
    }
  },

  program: [
    {
      time: '19:30',
      title: 'Recepción',
      description: 'Bienvenida y aperitivos',
      icon: '🥂',
      location: 'Salón principal'
    },
    {
      time: '20:00',
      title: 'Cena Familiar',
      description: 'Comida y brindis',
      icon: '🍽️',
      location: 'Comedor'
    },
    {
      time: '21:00',
      title: 'Torta y Regalos',
      description: 'El momento especial',
      icon: '🎂',
      location: 'Salón principal'
    },
    {
      time: '21:30',
      title: 'Baile y Música',
      description: '¡A bailar!',
      icon: '💃',
      location: 'Pista de baile'
    }
  ],

  theme: {
    primary: '#3B82F6',    // Azul brillante
    secondary: '#F59E0B',  // Amarillo soleado
    accent: '#10B981',     // Verde fresco
    background: '#FAFAFA',
    text: '#1F2937',
    muted: '#6B7280'
  }
}
```

## 🎉 Ejemplo 3: XV Años (Quinceañera)

```typescript
export const eventConfig = {
  event: {
    type: 'quince',
    title: 'Mis XV Años',
    subtitle: 'De niña a mujer, con amor y gratitud',
    couple: 'Sofía & Familia',
    date: '2024-09-14T18:00:00',
    location: {
      name: 'Salón de Fiestas Estrella',
      address: 'Boulevard Celebraciones 789, Ciudad, País',
      ceremony: 'Iglesia Nuestra Señora del Carmen'
    },
    dressCode: 'Vestido de gala',
    hashtag: '#SofiaXV',
    description: 'Con inmensa alegría celebramos el paso de Sofía a la adolescencia. Un día mágico lleno de amor familiar y amigos.'
  },

  couple: {
    partner1: {
      name: 'Sofía Ramírez',
      role: 'Quinceañera',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=400&fit=crop',
      description: 'Estudiante de secundaria, apasionada por la danza'
    },
    partner2: {
      name: 'Familia Ramírez',
      role: 'Familia',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=400&fit=crop',
      description: 'La familia unida en este día especial'
    }
  },

  program: [
    {
      time: '17:00',
      title: 'Misa de Acción de Gracias',
      description: 'Ceremonia religiosa',
      icon: '⛪',
      location: 'Iglesia'
    },
    {
      time: '18:30',
      title: 'Recepción',
      description: 'Fotos y bienvenida',
      icon: '📸',
      location: 'Entrada del salón'
    },
    {
      time: '19:00',
      title: 'Vals de los XV',
      description: 'Baile tradicional con chambelanes',
      icon: '💃',
      location: 'Pista de baile'
    },
    {
      time: '20:00',
      title: 'Cena',
      description: 'Banquete principal',
      icon: '🍽️',
      location: 'Salón comedor'
    },
    {
      time: '21:30',
      title: 'Fiesta',
      description: 'Música y baile hasta el amanecer',
      icon: '🎉',
      location: 'Pista de baile'
    }
  ],

  theme: {
    primary: '#EC4899',    // Rosa quinceañera
    secondary: '#F59E0B',  // Dorado
    accent: '#8B5CF6',     // Púrpura
    background: '#FAFAFA',
    text: '#1F2937',
    muted: '#6B7280'
  }
}
```

## 💑 Ejemplo 4: Aniversario de Bodas (25 Años)

```typescript
export const eventConfig = {
  event: {
    type: 'anniversary',
    title: '25 Años de Amor',
    subtitle: 'Plata y más amor que nunca',
    couple: 'Rosa & Miguel',
    date: '2024-10-05T20:00:00',
    location: {
      name: 'Hotel Boutique Romance',
      address: 'Paseo del Amor 321, Ciudad, País'
    },
    dressCode: 'Elegante',
    hashtag: '#RosaMiguel25Años',
    description: 'Celebramos un cuarto de siglo de amor, risas y aventuras juntos. Gracias por ser parte de nuestra historia.'
  },

  couple: {
    partner1: {
      name: 'Rosa Elena Vargas',
      role: 'Esposa',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=400&fit=crop',
      description: 'Docente universitaria y amante de la literatura'
    },
    partner2: {
      name: 'Miguel Ángel Torres',
      role: 'Esposo',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop',
      description: 'Abogado y músico aficionado'
    }
  },

  story: {
    enabled: true,
    title: 'Nuestra Historia de 25 Años',
    content: 'Hace 25 años, en una fiesta universitaria, nuestros caminos se cruzaron. Desde ese momento supimos que queríamos caminar juntos por la vida. Hoy, con dos hijos maravillosos y una casa llena de recuerdos, celebramos este amor que solo crece con el tiempo.',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop'
    ]
  },

  program: [
    {
      time: '19:00',
      title: 'Recepción',
      description: 'Bienvenida con champagne',
      icon: '🥂',
      location: 'Terraza del hotel'
    },
    {
      time: '19:30',
      title: 'Renovación de Votos',
      description: 'Ceremonia íntima',
      icon: '💍',
      location: 'Jardín iluminado'
    },
    {
      time: '20:00',
      title: 'Cena de Celebración',
      description: 'Cena romántica conmemorativa',
      icon: '🍽️',
      location: 'Salón principal'
    },
    {
      time: '21:30',
      title: 'Baile y Recuerdos',
      description: 'Música y proyección de fotos',
      icon: '💃',
      location: 'Salón de baile'
    }
  ],

  theme: {
    primary: '#DC2626',    // Rojo pasión
    secondary: '#F59E0B',  // Dorado
    accent: '#FFFFFF',     // Blanco elegante
    background: '#FAFAFA',
    text: '#1F2937',
    muted: '#6B7280'
  }
}
```

## 🎊 Ejemplo 5: Boda Civil Moderna

```typescript
export const eventConfig = {
  event: {
    type: 'wedding',
    title: 'Nuestro Sí Quiero',
    subtitle: 'Amor moderno, celebración eterna',
    couple: 'Elena & David',
    date: '2024-07-22T17:00:00',
    location: {
      name: 'Jardín Botánico Municipal',
      address: 'Parque Natural s/n, Ciudad, País'
    },
    dressCode: 'Smart casual',
    hashtag: '#ElenaDavid2024',
    description: 'Celebramos nuestro amor en un entorno natural, rodeados de las personas que más queremos. Una boda moderna, auténtica y llena de significado.'
  },

  couple: {
    partner1: {
      name: 'Elena Morales',
      role: 'Novia',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop',
      description: 'Diseñadora gráfica y emprendedora'
    },
    partner2: {
      name: 'David Chen',
      role: 'Novio',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop',
      description: 'Desarrollador de software y fotógrafo'
    }
  },

  program: [
    {
      time: '16:30',
      title: 'Llegada de Invitados',
      description: 'Bienvenida con música suave',
      icon: '🌸',
      location: 'Entrada del jardín'
    },
    {
      time: '17:00',
      title: 'Ceremonia Civil',
      description: 'Intercambio de votos personalizados',
      icon: '💑',
      location: 'Cercanía al lago'
    },
    {
      time: '17:30',
      title: 'Cóctel al Aire Libre',
      description: 'Bebidas y finger food',
      icon: '🍸',
      location: 'Terraza del jardín'
    },
    {
      time: '18:30',
      title: 'Cena Campestre',
      description: 'Buffet orgánico y local',
      icon: '🥗',
      location: 'Carpa principal'
    },
    {
      time: '20:30',
      title: 'Fiesta',
      description: 'DJ y baile bajo las estrellas',
      icon: '🌟',
      location: 'Pista de baile exterior'
    }
  ],

  theme: {
    primary: '#10B981',    // Verde natural
    secondary: '#F59E0B',  // Dorado cálido
    accent: '#3B82F6',     // Azul cielo
    background: '#FAFAFA',
    text: '#1F2937',
    muted: '#6B7280'
  }
}
```

## 🎨 Ejemplo 6: Tema Personalizado (Halloween)

```typescript
export const eventConfig = {
  event: {
    type: 'birthday',
    title: '¡Halloween Sorpresa!',
    subtitle: 'Una noche de sustos y dulces',
    couple: 'Carlos & Amigos',
    date: '2024-10-31T20:00:00',
    location: {
      name: 'Casa Embrujada',
      address: 'Calle Misteriosa 666, Ciudad, País'
    },
    dressCode: 'Disfraz obligatorio',
    hashtag: '#HalloweenCarlos',
    description: 'Prepárate para una noche inolvidable llena de sorpresas terroríficamente divertidas.'
  },

  theme: {
    primary: '#DC2626',    // Rojo sangre
    secondary: '#7C3AED',  // Púrpura fantasma
    accent: '#F59E0B',     // Naranja calabaza
    background: '#1F2937', // Negro oscuro
    text: '#FFFFFF',      // Blanco
    muted: '#9CA3AF'       // Gris claro
  },

  program: [
    {
      time: '20:00',
      title: 'Llegada y Bienvenida',
      description: 'Concurso de disfraces',
      icon: '👻',
      location: 'Entrada'
    },
    {
      time: '20:30',
      title: 'Cena Temática',
      description: 'Comida de Halloween',
      icon: '🎃',
      location: 'Comedor'
    },
    {
      time: '21:30',
      title: 'Juegos de Terror',
      description: 'Actividades espeluznantes',
      icon: '🕸️',
      location: 'Sala de juegos'
    },
    {
      time: '23:00',
      title: 'Fiesta de Halloween',
      description: 'Baile y dulces',
      icon: '💀',
      location: 'Pista de baile'
    }
  ]
}
```

## 🌟 Consejos para Personalizar

### 1. **Elige tu Paleta de Color**
- **Romántico:** Rosa, dorado, blanco
- **Elegante:** Negro, dorado, blanco
- **Divertido:** Colores brillantes y contrastantes
- **Natural:** Verdes, azules, tierras

### 2. **Adapta el Programa**
- Considera la duración total del evento
- Incluye tiempos de transición
- Agrega actividades especiales significativas

### 3. **Personaliza las Fotos**
- Usa fotos reales de alta calidad
- Asegura que las imágenes sean consistentes en estilo
- Incluye variedad: retratos, grupo, lugar, detalles

### 4. **Ajusta el Contenido**
- Adapta el lenguaje según el tipo de evento
- Incluye elementos culturales relevantes
- Personaliza mensajes y descripciones

### 5. **Configura Contactos**
- Proporciona múltiples formas de contacto
- Incluye WhatsApp para comunicación rápida
- Agrega información de emergencia si es necesario

## 🚀 Próximos Pasos

1. **Elige un ejemplo** que se parezca a tu evento
2. **Copia la configuración** al archivo `src/config/event.ts`
3. **Personaliza** con tus datos específicos
4. **Ajusta colores y estilo** según tus preferencias
5. **Prueba el resultado** con `npm run dev`
6. **Despliega** cuando estés listo

¿Necesitas un ejemplo específico para tu tipo de evento? ¡Abre un issue en GitHub!
    latitude: 40.4168,
    longitude: -3.7038,
    city: 'Madrid',
  },
}
```

## 2️⃣ Agencia de Marketing Digital

### Configuración
```typescript
export const businessConfig = {
  business: {
    name: 'Digital Acelerador',
    tagline: 'Transformamos negocios con estrategia digital',
    description: 'Somos una agencia especializada en crecimiento digital. SEO, SEM, Social Media y más.',
    email: 'hola@digitalacelerador.com',
    phone: '+1 (305) 123-4567',
    address: 'Miami, Florida, USA',
  },
  
  services: [
    {
      id: 1,
      title: 'SEO & SEM',
      description: 'Posicionamiento en buscadores y publicidad',
      icon: '🔍',
    },
    {
      id: 2,
      title: 'Social Media',
      description: 'Estrategia y gestión en redes sociales',
      icon: '📱',
    },
    {
      id: 3,
      title: 'Diseño Web',
      description: 'Sitios web modernos y optimizados',
      icon: '🎨',
    },
  ],

  gallery: [
    {
      id: 1,
      title: 'Proyecto E-commerce',
      image: 'https://images.unsplash.com/photo-1460925895917-adbab585c338?w=400&h=400&fit=crop',
      description: 'Tienda online que generó +300% en ventas',
    },
    // ... más proyectos
  ],
}
```

## 3️⃣ Estudio de Fotografía

### Configuración
```typescript
export const businessConfig = {
  business: {
    name: 'Studios Moment',
    tagline: 'Capturamos tus momentos más especiales',
    description: 'Fotógrafo profesional especializado en bodas, eventos y sesiones de retrato.',
    email: 'reservas@studiomoment.com',
    phone: '+34 987 654 321',
    address: 'Barcelona, España',
  },
  
  services: [
    {
      id: 1,
      title: 'Bodas',
      description: 'Cobertura completa de tu día especial',
      icon: '💒',
    },
    {
      id: 2,
      title: 'Retratos',
      description: 'Sesiones de fotos profesionales',
      icon: '👨‍👩‍👧',
    },
    {
      id: 3,
      title: 'Eventos',
      description: 'Cobertura de eventos corporativos',
      icon: '🎉',
    },
  ],

  gallery: [
    {
      id: 1,
      title: 'Boda María & Juan',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
      description: 'Una boda llena de emociones',
    },
    // ... más fotos
  ],
}
```

## 4️⃣ Gimnasio o Centro de Fitness

### Configuración
```typescript
export const businessConfig = {
  business: {
    name: 'FitZone Gym',
    tagline: 'Tu camino hacia una vida más saludable',
    description: 'Gimnasio moderno con equipos de última tecnología y entrenadores certificados.',
    email: 'info@fitzone.com',
    phone: '+1 (555) 123-4567',
    address: 'Los Angeles, California, USA',
  },
  
  services: [
    {
      id: 1,
      title: 'Entrenamiento Personal',
      description: 'Planes personalizados con entrenador',
      icon: '💪',
    },
    {
      id: 2,
      title: 'Clases Grupales',
      description: 'Yoga, CrossFit, Spinning y más',
      icon: '🤸',
    },
    {
      id: 3,
      title: 'Nutrición',
      description: 'Asesoramiento nutricional especializado',
      icon: '🥗',
    },
  ],
}
```

## 🎨 Cambiar Colores por Industria

### Estilo Moderno (Tech/Startup)
```javascript
colors: {
  primary: '#1F2937',      // Gris oscuro
  secondary: '#4F46E5',    // Azul índigo
  accent: '#10B981',       // Verde
}
```

### Estilo Cálido (Food/Hospitality)
```javascript
colors: {
  primary: '#D97706',      // Naranja
  secondary: '#F59E0B',    // Ámbar
  accent: '#EF4444',       // Rojo
}
```

### Estilo Profesional (Finanzas/Legal)
```javascript
colors: {
  primary: '#1E40AF',      // Azul profundo
  secondary: '#0F766E',    // Teal
  accent: '#7C3AED',       // Púrpura
}
```

### Estilo Creativo (Arte/Diseño)
```javascript
colors: {
  primary: '#EC4899',      // Rosa
  secondary: '#8B5CF6',    // Púrpura
  accent: '#06B6D4',       // Cyan
}
```

## 📝 Redacción Efectiva

### ❌ MAL - Vago y genérico
```
"Ofrecemos buenos servicios a precios competitivos"
```

### ✅ BIEN - Específico y orientado a beneficios
```
"Aumentamos tu presencia online con estrategias SEO probadas que generan +150% más leads"
```

## 🔧 Cambios Comunes

### Agregar un nuevo servicio
En `src/config/business.ts`:
```typescript
services: [
  // ... servicios existentes
  {
    id: 4,
    title: 'Mi Nuevo Servicio',
    description: 'Descripción del servicio',
    icon: '🎯',
  },
]
```

### Cambiar el hero tagline
En el mismo archivo:
```typescript
business: {
  tagline: 'Tu nuevo eslogan aquí', // Cambia este texto
}
```

### Agregar una galería más grande
En `src/components/Gallery.tsx`:
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
  {/* Ahora mostrará más columnas */}
</div>
```

## 🎯 Componentes Reutilizables

Puedes copiar estos patrones en nuevos componentes:

### Card Básica
```tsx
<div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
  <h3 className="text-xl font-bold mb-2">Título</h3>
  <p className="text-gray-600">Descripción</p>
</div>
```

### Botón Primary
```tsx
<button className="btn-primary">
  Texto del botón
</button>
```

### Titulo de Sección
```tsx
<h2 className="section-title">Mi Sección</h2>
<p className="section-subtitle">Subtítulo</p>
```

## 📸 Sources Recomendados para Imágenes

- **Unsplash** - unsplash.com (gratis, alta calidad)
- **Pexels** - pexels.com (gratis, stock photos)
- **Pixabay** - pixabay.com (gratis, licencia libre)
- **Cloudinary** - cloudinary.com (almacenamiento y optimización)

## 🎓 Mejores Prácticas

1. **Keep it simple** - No sobrecargues con información
2. **Call to Action Claros** - Botones con acciones concretas
3. **Mobile First** - Diseña pensando en móvil
4. **Velocidad** - Comprime imágenes
5. **Accesibilidad** - Alt text en imágenes
6. **Contacto Directo** - Facilita la comunicación

---

**Usa estos ejemplos como guía para tu caso específico** 🚀
