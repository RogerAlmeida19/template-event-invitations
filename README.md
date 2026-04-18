# 🎨 Template One-Page de Presentación de Negocios

Template profesional y completamente personalizable para crear un sitio web de presentación de tu negocio en minutos.

**Tecnologías:** Vite + React + TypeScript + Tailwind CSS

## 🚀 Características

- ⚡ **Ultra rápido** - Vite + React
- 🎯 **100% Personalizable** - Todo en un archivo de configuración
- 📱 **Responsive** - Móvil, tablet y desktop
- 🎨 **Moderno** - Gradientes, animaciones y diseño profesional
- 🗺️ **Mapa Interactivo** - Integración con OpenStreetMap
- 📸 **Galería** - Con modal expandible
- 🌐 **Redes Sociales** - Links integrados
- 📝 **6 Secciones** - Header, Hero, About, Gallery, Map, Contact, Footer

## ⚡ Inicio Rápido

### 1. Clonar
```bash
git clone <url-del-repositorio>
cd template-app-one-page
npm install
```

### 2. Personalizar
Edita `src/config/business.ts` con tu información

### 3. Desarrollar
```bash
npm run dev
```
Abre `http://localhost:5175/`

### 4. Deploy
```bash
npm run build
vercel  # o netlify, o tu hosting
```

## 📋 Documentación

- **[TEMPLATE_SETUP.md](TEMPLATE_SETUP.md)** ← **Comienza aquí** para usar el template
- **[QUICKSTART.md](QUICKSTART.md)** - Guía de 5 minutos
- **[CUSTOMIZATION.md](CUSTOMIZATION.md)** - Personalización detallada
- **[TEMPLATE_GUIDE.md](TEMPLATE_GUIDE.md)** - Guía completa
- **[EXAMPLES.md](EXAMPLES.md)** - Ejemplos por industria

## 🛠️ Estructura del Proyecto

```
src/
├── components/           # 7 componentes profesionales
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Gallery.tsx
│   ├── Map.tsx
│   ├── SocialLinks.tsx
│   └── Footer.tsx
├── config/
│   └── business.ts      # ← Edita aquí tu configuración
├── App.tsx
└── main.tsx
```

## 🎨 Personalización

Todo se configura en **`src/config/business.ts`**:

```typescript
export const businessConfig = {
  business: {
    name: 'Tu Nombre',
    tagline: 'Tu eslogan',
    email: 'tu@email.com',
    // ... más opciones
  },
  socialLinks: [
    { name: 'Instagram', url: 'https://instagram.com/...' }
    // ...
  ],
  gallery: [
    { title: 'Proyecto 1', image: 'url' }
    // ...
  ],
  // ... más configuración
}
```

## 📦 Tecnologías

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Icons
- React Leaflet
- Axios

## 💰 Costo

**100% GRATIS**

- Todas las librerías: Open source
- Mapas: OpenStreetMap (gratis)
- Hosting: Vercel/Netlify (gratis para pequeños proyectos)
- Dominio: .netlify.app (gratis)

Solo pagarías si compras un dominio personalizado ($10-15/año)

## 🚀 Comandos

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Previsualiza build
npm run lint     # Valida código
```

## 📱 Demo

Para ver una demostración en vivo del template:
1. Clona el repositorio
2. Ejecuta `npm install && npm run dev`
3. Visita `http://localhost:5175/`

## ✨ Lo que puedes hacer con este template

- 🏪 Tienda online de presentación
- 🏋️ Gimnasio o centro fitness
- ☕ Café o restaurante
- 📸 Estudio fotográfico
- 🏢 Agencia de marketing
- 👨‍💼 Portafolio profesional
- 💼 Consultorio médico
- Y mucho más...

## 🤝 Contribuciones

Las sugerencias y mejoras son bienvenidas.

## 📄 Licencia

MIT

---

**Hecho con ❤️ para emprendedores y pequeños negocios**
