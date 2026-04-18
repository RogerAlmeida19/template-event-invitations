# 📚 Ejemplos de Personalización

Aquí te mostramos ejemplos prácticos para personalizar el template.

## 1️⃣ Restaurante o Café

### Configuración
```typescript
export const businessConfig = {
  business: {
    name: 'Café Don Juan',
    tagline: 'El mejor café artesanal de la ciudad',
    description: 'Somos un café especializado en granos de origen único. Cada taza preparada con pasión y dedicación.',
    email: 'contacto@cafedonjuan.com',
    phone: '+34 123 456 789',
    address: 'Calle Mayor 45, Madrid, España',
  },
  
  services: [
    {
      id: 1,
      title: 'Café Artesanal',
      description: 'Café de origen seleccionado y tostado a la perfección',
      icon: '☕',
    },
    {
      id: 2,
      title: 'Pastelería Fresca',
      description: 'Hecha diariamente con ingredientes premium',
      icon: '🥐',
    },
    {
      id: 3,
      title: 'Ambiente Acogedor',
      description: 'El espacio perfecto para trabajar o relajarse',
      icon: '🎵',
    },
  ],

  gallery: [
    {
      id: 1,
      title: 'Espresso Premium',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=400&h=400&fit=crop',
      description: 'Nuestro espresso especial',
    },
    // ... más fotos de platos
  ],

  location: {
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
