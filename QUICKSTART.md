# 🚀 Guía de Inicio Rápido - Template de Invitaciones

¡Bienvenido! Esta guía te llevará de 0 a un sitio web de invitaciones en menos de 10 minutos.

## ⚡ Paso 1: Preparación (2 minutos)

### Instalar Node.js
Si no tienes Node.js instalado:
1. Ve a [nodejs.org](https://nodejs.org)
2. Descarga la versión LTS (recomendada)
3. Instálala siguiendo las instrucciones

### Clonar el Template
```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/template-event-invitations.git

# Entra al directorio
cd template-event-invitations

# Instala las dependencias
npm install
```

## 🎨 Paso 2: Personalización Básica (5 minutos)

### Editar la Configuración Principal
Abre `src/config/event.ts` en tu editor de código favorito.

**Información esencial que debes cambiar:**

```typescript
event: {
  type: 'wedding', // Cambia según tu evento
  title: 'Nuestra Boda',
  couple: 'María & Carlos', // ← ¡Cambia esto!
  date: '2024-06-15T18:00:00', // ← ¡FECHA CRÍTICA! Actualiza con tu fecha real
  location: {
    name: 'Salón de Eventos Elegante', // ← Cambia el lugar
    address: 'Av. Principal 123, Ciudad, País', // ← Dirección real
  },
  hashtag: '#NuestraBoda2024', // ← Tu hashtag personalizado
}
```

### Información de Contacto
```typescript
rsvp: {
  contact: {
    phone: '+1 (555) 123-4567', // ← Tu número real
    email: 'rsvp@nuestraboda.com', // ← Tu email real
    whatsapp: 'https://wa.me/1234567890' // ← Tu WhatsApp
  }
}
```

### Fotos de la Pareja
```typescript
couple: {
  partner1: {
    name: 'María García', // ← Nombre real
    image: 'https://images.unsplash.com/photo-...', // ← Foto real o de Unsplash
  },
  partner2: {
    name: 'Carlos Rodríguez', // ← Nombre real
    image: 'https://images.unsplash.com/photo-...', // ← Foto real o de Unsplash
  }
}
```

## 🎯 Paso 3: Probar Localmente (1 minuto)

```bash
# Inicia el servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

**¿Qué verás?**
- ✅ Contador regresivo funcionando
- ✅ Tu información personalizada
- ✅ Diseño elegante y responsive
- ✅ Todas las secciones del evento

## 📸 Paso 4: Personalizar Imágenes (2 minutos)

### Fuentes Gratuitas de Imágenes
- **[Unsplash](https://unsplash.com)** - Busca "wedding", "couple", "event"
- **[Pexels](https://pexels.com)** - Fotos gratuitas de alta calidad
- **[Pixabay](https://pixabay.com)** - Millones de imágenes gratis

### Reemplazar Imágenes en la Configuración

**Galería de fotos:**
```typescript
gallery: [
  {
    image: 'URL_DE_TU_FOTO_1', // ← Reemplaza con tu foto
    title: 'Nuestra historia',
  },
  // ... más fotos
]
```

**Fotos de la pareja:**
```typescript
couple: {
  partner1: {
    image: 'URL_DE_FOTO_MARIA', // ← Foto de María
  },
  partner2: {
    image: 'URL_DE_FOTO_CARLOS', // ← Foto de Carlos
  }
}
```

### Consejos para Fotos
- **Resolución:** Mínimo 800x600px
- **Formato:** JPG o PNG
- **Tamaño:** Máximo 2MB por foto
- **Estilo:** Fotos naturales y felices

## 🎨 Paso 5: Colores y Estilo (Opcional - 2 minutos)

### Cambiar Colores del Tema
```typescript
theme: {
  primary: '#8B5CF6',    // Púrpura - cambia si quieres
  secondary: '#F59E0B',  // Dorado
  accent: '#EC4899',     // Rosa
}
```

### Paletas Recomendadas
- **Bodas:** Púrpura (#8B5CF6), Dorado (#F59E0B), Rosa (#EC4899)
- **XV Años:** Rosa (#EC4899), Dorado (#F59E0B), Blanco (#FFFFFF)
- **Cumpleaños:** Azul (#3B82F6), Amarillo (#F59E0B), Verde (#10B981)

## 📋 Paso 6: Programa del Evento (3 minutos)

### Editar el Programa
```typescript
program: [
  {
    time: '17:00',
    title: 'Ceremonia Religiosa',
    description: 'Intercambio de votos y anillos',
    icon: '💍',
    location: 'Iglesia San José' // ← Cambia el lugar
  },
  {
    time: '18:30',
    title: 'Cóctel de Bienvenida',
    description: 'Bebidas y canapés',
    icon: '🍸',
    location: 'Jardín del salón' // ← Cambia el lugar
  },
  // ... agrega más eventos
]
```

### Tips para el Programa
- Incluye hora exacta
- Describe brevemente cada actividad
- Agrega ubicación específica
- Usa emojis relevantes

## 🌐 Paso 7: Despliegue (5 minutos)

### Opción 1: Vercel (Recomendado - Gratis)
```bash
# Instala Vercel CLI
npm install -g vercel

# Despliega
vercel --prod

# Sigue las instrucciones en pantalla
```

### Opción 2: Netlify (Gratis)
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta `dist` después de `npm run build`
3. ¡Listo! Tu sitio estará online

### Opción 3: GitHub Pages (Gratis)
```bash
# Instala gh-pages
npm install -g gh-pages

# Construye y despliega
npm run build
npm run deploy
```

## ✅ Checklist Final

- [ ] Fecha del evento actualizada
- [ ] Nombres de la pareja correctos
- [ ] Información de contacto actualizada
- [ ] Fotos personalizadas agregadas
- [ ] Programa del evento completo
- [ ] Colores del tema elegidos
- [ ] Sitio probado en móvil y desktop
- [ ] Desplegado online

## 🆘 Solución de Problemas

### El contador no funciona
- Verifica que la fecha esté en formato ISO: `'2024-06-15T18:00:00'`
- Asegúrate de que la fecha sea futura

### Las imágenes no cargan
- Verifica que las URLs sean válidas
- Asegúrate de que las imágenes sean públicas
- Prueba con imágenes de Unsplash

### El sitio no se ve bien en móvil
- Todas las secciones son responsive por defecto
- Si hay problemas, revisa la consola del navegador

### Error al hacer build
```bash
# Limpia node_modules y reinstalla
rm -rf node_modules package-lock.json
npm install
```

## 📞 ¿Necesitas Ayuda?

- **Documentación completa:** Lee [CUSTOMIZATION.md](CUSTOMIZATION.md)
- **Ejemplos:** Revisa [EXAMPLES.md](EXAMPLES.md)
- **Issues:** Abre un issue en GitHub
- **Comunidad:** Únete a nuestra comunidad

---

¡Tu invitación está lista! Comparte el enlace con tus invitados y comienza la celebración. 🎉
    title: 'Trabajo 1',
    image: 'URL_DE_TU_IMAGEN',  // ← Tu imagen aquí
    description: 'Descripción',
  },
  // ...
]
```

**Obtén imágenes de:**
- Unsplash: unsplash.com
- Pexels: pexels.com
- Pixabay: pixabay.com

### 5. Actualiza la ubicación

Obtén coordenadas:
1. Abre Google Maps
2. Busca tu ubicación
3. Haz clic derecho → "¿Qué está aquí?"
4. Copia lat/long

```typescript
location: {
  latitude: TU_LATITUD,      // Ej: 40.7128
  longitude: TU_LONGITUD,    // Ej: -74.0060
  city: 'Tu Ciudad',
}
```

## 🎨 Paso 3: Personaliza colores (opcional)

Abre `tailwind.config.js`:

```javascript
colors: {
  primary: '#TU_COLOR',      // Color principal
  secondary: '#TU_COLOR',    // Color secundario
  accent: '#TU_COLOR',       // Acento
}
```

Usa: https://colorhexa.com para obtener códigos hex

## 📱 Paso 4: Revisa en móvil

Presiona `F12` en el navegador → click en "dispositivo móvil" (📱 icon)

## 🚀 Paso 5: Deploy (opcional)

### Opción A: Vercel (Más fácil)
```bash
npm install -g vercel
vercel
# Sigue las instrucciones
```

### Opción B: Netlify
1. Crea cuenta en netlify.com
2. Conecta tu repositorio GitHub
3. Auto deploys listos

### Opción C: Hosting propio
```bash
npm run build
# Sube la carpeta 'dist/' a tu servidor
```

## 📋 Ediciones Comunes

### Cambiar texto de botón
En `src/components/Hero.tsx` busca:
```tsx
<button>Cambiar esto</button>
```

### Agregar un nuevo servicio
En `business.ts` añade a `services`:
```typescript
{
  id: 4,
  title: 'Nuevo servicio',
  description: 'Descripción',
  icon: '🎯',
}
```

### Cambiar número de galerías por fila
En `src/components/Gallery.tsx`:
```tsx
{/* De esto: */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

{/* A esto (para 6 columnas): */}
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
```

## ✨ Resultado

Tu sitio tendrá:

- ✓ Verde profesional
- ✓ Tus redes sociales integradas
- ✓ Tus fotos de trabajo
- ✓ Tu ubicación en mapa
- ✓ Información de contacto
- ✓ Totalmente responsive
- ✓ Listo para producción

## 🐛 Problemas Comunes

### Las imágenes no cargan
→ Verifica que el URLs sea válido (comienza con `http://` o `https://`)

### El servidor no inicia
→ Ejecuta: `npm install`

### Mapa no funciona
→ Verifica las coordenadas en Google Maps

### Cambios no se ven
→ Actualiza la página (Ctrl+Shift+R para cache limpio)

## 📚 Documentación Completa

- **TEMPLATE_GUIDE.md** - Guía completa
- **CUSTOMIZATION.md** - Detalles de personalización
- **EXAMPLES.md** - Ejemplos por industria
- **README.md** - Información del proyecto

## 🎯 Tu Next Steps

1. ✅ Personaliza `business.ts`
2. ✅ Cambia las imágenes
3. ✅ Revisa en móvil
4. ✅ Deploy

**¡Listo para ir! Tu sitio web está en 15 minutos** 🎉

---

P.S. - Cualquier duda, consulta los archivos de documentación.
