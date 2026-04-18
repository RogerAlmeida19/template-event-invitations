# 🎨 Guía de Personalización - Template de Invitaciones

Esta guía te ayudará a personalizar cada aspecto de tu invitación digital para que sea única y especial.

## 📋 Configuración General

### Archivo Principal: `src/config/event.ts`

Todo se configura en un solo archivo. Abre `src/config/event.ts` y modifica los valores según tus necesidades.

## 💒 Información del Evento

### Configuración Básica
```typescript
event: {
  type: 'wedding', // Opciones: 'wedding', 'quince', 'birthday', 'anniversary', 'other'
  title: 'Nuestra Boda',
  subtitle: 'Con amor y alegría celebramos este día especial',
  couple: 'María & Carlos',
  date: '2024-06-15T18:00:00', // FORMATO CRÍTICO: YYYY-MM-DDTHH:mm:ss
  hashtag: '#NuestraBoda2024',
  description: 'Con gran alegría les invitamos a celebrar el día más importante de nuestras vidas...'
}
```

### Ubicación del Evento
```typescript
location: {
  name: 'Salón de Eventos Elegante',
  address: 'Av. Principal 123, Ciudad, País',
  ceremony: 'Iglesia San José, Calle Iglesia 456' // Opcional - para ceremonias separadas
}
```

### Detalles Adicionales
```typescript
dressCode: 'Formal elegante', // Código de vestimenta
```

## 👫 Información de la Pareja

### Configuración de Protagonistas
```typescript
couple: {
  partner1: {
    name: 'María García',
    role: 'Novia', // O 'Cumpleañera', 'Homenajeada', etc.
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop',
    description: 'Arquitecta apasionada por el diseño'
  },
  partner2: {
    name: 'Carlos Rodríguez',
    role: 'Novio',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    description: 'Ingeniero con corazón de artista'
  }
}
```

### Tips para Fotos de Perfil
- **Relación de aspecto:** 3:4 (vertical)
- **Resolución:** Mínimo 300x400px
- **Estilo:** Fotos naturales, sonrientes
- **Fondo:** Preferiblemente blanco o desenfocado

## 📖 Historia de Amor (Opcional)

### Activar/Desactivar
```typescript
story: {
  enabled: true, // false para ocultar
  title: 'Nuestra Historia',
  content: 'Nos conocimos hace 5 años en una cafetería del centro...',
  images: [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop'
  ]
}
```

## 📅 Programa del Evento

### Estructura del Programa
```typescript
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
  // ... más eventos
]
```

### Emojis Recomendados
- 💍 Ceremonia/Boda
- 🍸 Cóctel/Bebidas
- 🍽️ Cena/Banquete
- 🎉 Fiesta/Baile
- 🎂 Pastel/Cumpleaños
- 📸 Fotos
- 💃 Baile
- 🎁 Regalos

## 📸 Galería de Fotos

### Configuración de Galería
```typescript
gallery: [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
    alt: 'Foto de la pareja',
    title: 'Nuestra historia'
  },
  // ... más fotos (recomendado: 6-8 fotos)
]
```

### Recomendaciones para Galería
- **Cantidad:** 6-12 fotos
- **Tamaño:** 400x400px (cuadradas)
- **Contenido:** Mezcla de fotos de la pareja, preparativos, lugar, detalles
- **Calidad:** Alta resolución, bien iluminadas

## 💌 Sistema RSVP

### Configuración RSVP
```typescript
rsvp: {
  enabled: true,
  deadline: '2024-05-15', // Fecha límite para confirmar
  message: 'Confirma tu asistencia antes del 15 de mayo',
  contact: {
    phone: '+1 (555) 123-4567',
    email: 'rsvp@tuemail.com',
    whatsapp: 'https://wa.me/1234567890'
  },
  note: 'Por favor indica si asistirás acompañado y cualquier restricción alimentaria.'
}
```

## 🎨 Tema y Colores

### Paleta de Colores
```typescript
theme: {
  primary: '#8B5CF6',    // Púrpura elegante
  secondary: '#F59E0B',  // Dorado
  accent: '#EC4899',     // Rosa suave
  background: '#FAFAFA', // Blanco suave
  text: '#1F2937',      // Gris oscuro
  muted: '#6B7280'       // Gris medio
}
```

### Paletas Recomendadas por Tipo de Evento

#### Bodas Clásicas
```typescript
primary: '#8B5CF6',    // Púrpura
secondary: '#F59E0B',  // Dorado
accent: '#EC4899',     // Rosa
```

#### Bodas Elegantes
```typescript
primary: '#1E3A8A',    // Azul marino
secondary: '#F59E0B',  // Dorado
accent: '#FFFFFF',     // Blanco
```

#### XV Años
```typescript
primary: '#EC4899',    // Rosa
secondary: '#F59E0B',  // Dorado
accent: '#8B5CF6',     // Púrpura
```

#### Cumpleaños
```typescript
primary: '#3B82F6',    // Azul
secondary: '#F59E0B',  // Amarillo
accent: '#10B981',     // Verde
```

#### Aniversarios
```typescript
primary: '#DC2626',    // Rojo
secondary: '#F59E0B',  // Dorado
accent: '#FFFFFF',     // Blanco
```

## 🔤 Fuentes Tipográficas

### Fuentes Configuradas
```typescript
fonts: {
  heading: 'Playfair Display, serif',    // Títulos
  body: 'Inter, sans-serif',             // Texto principal
  accent: 'Dancing Script, cursive'      // Texto decorativo
}
```

### Fuentes Alternativas
- **Títulos:** 'Crimson Text', 'Lora', 'Merriweather'
- **Cuerpo:** 'Open Sans', 'Lato', 'Roboto'
- **Acento:** 'Great Vibes', 'Alex Brush', 'Allura'

## ✨ Animaciones

### Configuración de Animaciones
```typescript
animations: {
  enabled: true,
  duration: 800, // Duración en ms
  delay: 200,    // Retraso entre elementos en ms
  type: 'fade'   // 'fade', 'slide', 'scale'
}
```

### Tipos de Animación
- **fade:** Desvanecimiento suave
- **slide:** Deslizamiento lateral
- **scale:** Escalado con zoom

## ⚙️ Configuración Avanzada

### Secciones Opcionales
```typescript
settings: {
  showCountdown: true,    // Mostrar contador regresivo
  showStory: true,        // Mostrar historia de amor
  showGallery: true,      // Mostrar galería
  showProgram: true,      // Mostrar programa
  showRSVP: true,         // Mostrar formulario RSVP
  language: 'es',         // 'es', 'en'
  currency: 'USD'         // Para regalos opcionales
}
```

## 📱 Personalización Mobile

El template es completamente responsive, pero puedes ajustar:

### Breakpoints
- **sm:** 640px (móviles pequeños)
- **md:** 768px (tablets)
- **lg:** 1024px (desktops)
- **xl:** 1280px (desktops grandes)

### Ajustes CSS Personalizados
Agrega estilos personalizados en `src/index.css`:

```css
/* Ejemplo: Ajustes para móvil */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
}
```

## 🌐 Idiomas

### Soporte de Idiomas
Actualmente soporta:
- **es:** Español
- **en:** Inglés

### Agregar Nuevo Idioma
1. Modifica `language: 'es'` en settings
2. Los textos están hardcodeados en los componentes
3. Para internacionalización completa, considera react-i18next

## 📧 Integraciones

### WhatsApp Directo
```typescript
whatsapp: 'https://wa.me/1234567890?text=Hola,%20quiero%20confirmar%20mi%20asistencia'
```

### Email con Asunto
```typescript
email: 'mailto:rsvp@evento.com?subject=Confirmación%20de%20Asistencia'
```

## 🖼️ Optimización de Imágenes

### Formatos Recomendados
- **WebP:** Mejor compresión, soportado por navegadores modernos
- **JPG:** Para fotos con muchos colores
- **PNG:** Para gráficos con transparencias

### Herramientas de Optimización
- [TinyPNG](https://tinypng.com) - Compresión JPG/PNG
- [Squoosh](https://squoosh.app) - Conversión y optimización
- [ImageOptim](https://imageoptim.com) - Para Mac

### Tamaños Recomendados
- **Hero:** 1920x1080px (16:9)
- **Galería:** 800x800px (cuadradas)
- **Perfil:** 400x600px (2:3)
- **Historia:** 800x600px (4:3)

## 🚀 Optimización de Rendimiento

### Lazy Loading
Las imágenes se cargan automáticamente cuando entran en viewport.

### Bundle Splitting
Vite divide automáticamente el código en chunks optimizados.

### Compresión
```bash
# Para producción
npm run build
```

## 🔧 Solución de Problemas

### Contador no funciona
```typescript
// Verifica el formato de fecha
date: '2024-06-15T18:00:00' // Correcto
date: '15/06/2024'          // Incorrecto
```

### Imágenes no cargan
- Verifica URLs públicas
- Comprueba CORS
- Usa HTTPS en producción

### Animaciones no funcionan
```typescript
// Verifica configuración
animations: {
  enabled: true, // Debe ser true
  // ...
}
```

### Formulario RSVP no envía
El formulario es estático. Para funcionalidad real, integra:
- **EmailJS** para envío por email
- **Google Forms** embed
- **API backend** personalizada

## 📊 Analytics (Opcional)

### Google Analytics
```html
<!-- Agrega en index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Facebook Pixel
```html
<!-- Para tracking de eventos -->
<script>
  // Facebook Pixel Code
</script>
```

## 🎯 Mejores Prácticas

### SEO
- Título descriptivo
- Meta description
- Open Graph tags para redes sociales

### Accesibilidad
- Texto alternativo en imágenes
- Contraste de colores adecuado
- Navegación por teclado

### Velocidad
- Imágenes optimizadas
- Lazy loading activado
- CDN para assets estáticos

---

¿Necesitas más personalización? Revisa los archivos fuente en `src/components/` para modificaciones avanzadas.
    name: 'Facebook',
    url: 'https://facebook.com/tu_pagina',
    icon: 'FiFacebook',
  },
  // Más opciones disponibles
]
```

**Iconos disponibles:**
- `FiInstagram` - Instagram
- `FiFacebook` - Facebook
- `FiMessageCircle` - WhatsApp o Mensajería
- `FiLinkedin` - LinkedIn
- `FiPhone` - Teléfono
- `FiMail` - Email
- `FiMapPin` - Ubicación

### 3. Galería de Trabajos/Productos

```typescript
gallery: [
  {
    id: 1,
    title: 'Nombre del Trabajo',
    image: 'URL de la imagen',
    description: 'Descripción breve',
  },
  // Más elementos...
]
```

**Recomendaciones de imágenes:**
- Dimensiones: 400x400px
- Formato: JPG o WebP para mejor rendimiento
- Usar URLs de Unsplash u otro servicio de imágenes

### 4. Servicios/Valores

```typescript
services: [
  {
    id: 1,
    title: 'Servicio 1',
    description: 'Descripción del servicio',
    icon: '🎯', // Emoji o símbolo
  },
  // Más servicios...
]
```

### 5. Ubicación en Mapa

```typescript
location: {
  latitude: 40.7128,      // Latitud
  longitude: -74.0060,    // Longitud
  city: 'Tu Ciudad',
}
```

**Obtener coordenadas:**
1. Visita [Google Maps](https://maps.google.com)
2. Busca tu ubicación
3. Haz clic derecho y selecciona "¿Qué está aquí?"
4. Copia las coordenadas

### 6. Colores Personalizados

```typescript
colors: {
  primary: '#FF6B35',     // Color principal
  secondary: '#004E89',   // Color secundario
  accent: '#F7B801',      // Color de acento
  dark: '#1a1a1a',        // Color oscuro
  light: '#f5f5f5',       // Color claro
}
```

## 🖼️ Cambiar Imágenes

### Imagen de Hero (sección principal)
En `src/components/About.tsx`, busca:
```tsx
<img src="https://images.unsplash.com/..." alt="Nosotros" />
```

### Galería de Trabajos
Actualiza las URLs en `src/config/business.ts` en el array `gallery`.

### Usar tus propias imágenes
1. Crea una carpeta `public/images/` en la raíz del proyecto
2. Copia tus imágenes allí
3. Referencia como: `/images/mi-imagen.jpg`

## 🌐 Agregar Instagram Feed

Para mostrar tu feed de Instagram en tiempo real:

1. **Opción 1: Embed de Instagram**
   - Modifica `Gallery.tsx`
   - Reemplaza la sección de "Instagram Feed Section"

2. **Opción 2: Usar Instagram Graph API**
   - Necesitas token de acceso
   - Consulta: [Facebook Developers](https://developers.facebook.com)

## 📱 Responsive Design

El template es completamente responsivo. Usa:
- `md:` para pantallas medianas (768px+)
- `lg:` para pantallas grandes (1024px+)
- Sin prefijo para móvil

Ejemplo:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {/* Automáticamente se adapta */}
</div>
```

## 🎯 Cambiar Estilos

### Tailwind CSS Classes

Todos los estilos usan Tailwind CSS. Ejemplos:

```tsx
// Texto
className="text-xl md:text-2xl font-bold"

// Colores
className="bg-primary text-white"

// Espaciado
className="p-8 mb-12"

// Responsive
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
```

### Modificar colores globales

En `tailwind.config.js`:
```javascript
colors: {
  primary: '#TU_COLOR_AQUI',
  secondary: '#TU_COLOR_AQUI',
  // ...
}
```

## 🔧 Secciones Disponibles

El template incluye 7 secciones principales:

1. **Header** - Navegación fija
2. **Hero** - Sección de bienvenida impactante
3. **About** - Información del negocio con servicios
4. **Gallery** - Galería de trabajos e Instagram
5. **Map** - Ubicación interactiva
6. **Social Links** - Contacto y redes sociales
7. **Footer** - Pie de página completo

## 📝 Para Agregar una Nueva Sección

1. Crea un nuevo archivo en `src/components/MiSeccion.tsx`
2. Copia la estructura de un componente existente
3. Importa en `App.tsx`:
   ```tsx
   import MiSeccion from './components/MiSeccion'
   ```
4. Añade la línea en el JSX:
   ```tsx
   <MiSeccion />
   ```

## 🚀 Deploy

### Opción 1: Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Opción 2: Netlify
1. Conecta tu repositorio de GitHub
2. Configura build: `npm run build`
3. Deploy automático

### Opción 3: Servidor propio
```bash
npm run build
# Sube la carpeta 'dist' a tu hosting
```

## 📦 Variables de Entorno

Si necesitas agregar variables secretas (como API keys):

1. Crea `.env` en la raíz:
```
VITE_API_KEY=tu_clave_aqui
```

2. Accede en el código:
```tsx
const apiKey = import.meta.env.VITE_API_KEY
```

## 🐛 Troubleshooting

### Las imágenes no cargan
- Verifica que las URLs sean válidas
- Usa URLs públicas (no locales)
- Considera usar Cloudinary o Firebase Storage

### Mapa no funciona
- El mapa usa OpenStreetMap (gratis y sin claves)
- Verifica las coordenadas sean correctas

### Estilos no se aplican
- Asegúrate de usar clases de Tailwind válidas
- Reconstruye: `npm run build`

## 📞 Soporte Técnico

Para reportar bugs o sugerencias, contacta al desarrollador.

---

**¡Tu template está listo para personalizar! Disfruta creando tu sitio web profesional.** 🎉
