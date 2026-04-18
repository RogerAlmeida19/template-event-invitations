# Guía de Customización - Template One-Page de Presentación

Este es un template profesional y completamente personalizable para presentar un negocio. Aquí te mostramos cómo adaptar cada aspecto a tu negocio específico.

## 📋 Estructura del Proyecto

```
src/
├── components/           # Componentes principales
│   ├── Header.tsx       # Navegación y encabezado
│   ├── Hero.tsx         # Sección principal
│   ├── About.tsx        # Información del negocio
│   ├── Gallery.tsx      # Galería de trabajos
│   ├── Map.tsx          # Ubicación con mapa interactivo
│   ├── SocialLinks.tsx  # Redes sociales y contacto
│   └── Footer.tsx       # Pie de página
├── config/
│   └── business.ts      # Configuración de tu negocio
└── App.tsx              # Componente principal
```

## 🎨 Personalización Principal

Todo se configura en un solo archivo: **`src/config/business.ts`**

### 1. Información General del Negocio

```typescript
business: {
  name: 'Tu Nombre de Negocio',
  tagline: 'Tu eslogan o frase principal',
  description: 'Descripción detallada de tu negocio',
  email: 'tu.email@ejemplo.com',
  phone: '+1 (555) 123-4567',
  address: 'Tu dirección completa',
}
```

### 2. Redes Sociales

Agrega o modifica tus redes sociales:

```typescript
socialLinks: [
  {
    name: 'Instagram',
    url: 'https://instagram.com/tu_usuario',
    icon: 'FiInstagram',
  },
  {
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
