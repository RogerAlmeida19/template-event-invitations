# ⚡ Inicio Rápido - 5 Minutos

## 🚀 Paso 1: Inicia el servidor

```bash
npm run dev
```

Accede a: **http://localhost:5175/**

## ✏️ Paso 2: Personaliza en 5 pasos

### 1. Abre el archivo de configuración
```
src/config/business.ts
```

### 2. Reemplaza con tu información

```typescript
business: {
  name: 'TU NOMBRE DE NEGOCIO',  // ← Cambia aquí
  tagline: 'TU ESLOGAN',         // ← Y aquí
  description: 'Tu descripción',
  email: 'tu@email.com',
  phone: '+1234567890',
  address: 'Tu dirección',
}
```

### 3. Agrega tus redes sociales

```typescript
socialLinks: [
  {
    name: 'Instagram',
    url: 'https://instagram.com/tu_perfil',  // ← Tu link
    icon: 'FiInstagram',
  },
  // ... más redes
]
```

### 4. Reemplaza las imágenes

En el mismo archivo, busca `gallery`:
```typescript
gallery: [
  {
    id: 1,
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
