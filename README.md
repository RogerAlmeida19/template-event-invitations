# Template de Invitaciones de Eventos

Un template elegante y personalizable para invitaciones de eventos (bodas, XV años, cumpleaños, aniversarios) construido con Vite + React + TypeScript.

## ✨ Características

- 🎯 **Contador regresivo** en tiempo real hasta la fecha del evento
- 💕 **Diseño elegante y minimalista** con animaciones suaves
- 📱 **Completamente responsive** para todos los dispositivos
- 🎨 **Altamente personalizable** con configuración centralizada
- 📸 **Galería de fotos** integrada
- 📋 **Programa del evento** con timeline visual
- 💌 **Sistema RSVP** completo con formulario
- 🖼️ **Historia de la pareja** opcional
- 🎭 **Tema de colores** configurable
- 🔤 **Fuentes elegantes** (Playfair Display, Inter, Dancing Script)
- ⚡ **Rendimiento optimizado** con Vite
- 🎁 **100% gratuito** - sin costos ocultos

## 🚀 Inicio Rápido

### 1. Clona el repositorio
```bash
git clone https://github.com/tu-usuario/template-event-invitations.git
cd template-event-invitations
```

### 2. Instala las dependencias
```bash
npm install
```

### 3. Personaliza la configuración
Edita el archivo `src/config/event.ts` con tu información:

```typescript
event: {
  type: 'wedding', // 'wedding', 'quince', 'birthday', 'anniversary', etc.
  title: 'Nuestra Boda',
  couple: 'María & Carlos',
  date: '2024-06-15T18:00:00', // ¡IMPORTANTE: Actualiza esta fecha!
  // ... más configuraciones
}
```

### 4. Inicia el servidor de desarrollo
```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### 5. Construye para producción
```bash
npm run build
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes React
│   ├── Countdown.tsx    # Contador regresivo
│   ├── EventHero.tsx    # Hero principal del evento
│   ├── CoupleStory.tsx  # Historia de la pareja
│   ├── EventProgram.tsx # Programa del evento
│   ├── Gallery.tsx      # Galería de fotos
│   ├── RSVP.tsx         # Formulario de confirmación
│   └── Footer.tsx       # Pie de página
├── config/
│   └── event.ts         # Configuración del evento
├── App.tsx              # Componente principal
├── main.tsx             # Punto de entrada
└── index.css            # Estilos globales
```

## 🎨 Personalización

### Colores del Tema
Modifica los colores en `src/config/event.ts`:

```typescript
theme: {
  primary: '#8B5CF6',    // Púrpura elegante
  secondary: '#F59E0B',  // Dorado
  accent: '#EC4899',     // Rosa suave
  // ... más colores
}
```

### Tipos de Evento Soportados
- `wedding` - Bodas
- `quince` - XV Años/Quinceañeras
- `birthday` - Cumpleaños
- `anniversary` - Aniversarios
- `other` - Otros eventos

### Animaciones
Controla las animaciones en la configuración:

```typescript
animations: {
  enabled: true,
  duration: 800, // ms
  delay: 200,    // ms entre elementos
  type: 'fade'   // 'fade', 'slide', 'scale'
}
```

## 📸 Imágenes Recomendadas

### Formatos Soportados
- JPG, PNG, WebP
- Resolución mínima: 800x600px
- Relación de aspecto: 4:3 o 16:9

### Fuentes de Imágenes Gratuitas
- [Unsplash](https://unsplash.com) - Fotos de alta calidad gratuitas
- [Pexels](https://pexels.com) - Biblioteca gratuita de fotos
- [Pixabay](https://pixabay.com) - Imágenes y videos gratuitos

### Optimización
Las imágenes se cargan de forma diferida (lazy loading) para un mejor rendimiento.

## 📧 Sistema RSVP

### Características
- Formulario completo con validación
- Información de contacto múltiple (teléfono, email, WhatsApp)
- Selección de número de invitados
- Restricciones alimentarias
- Mensajes personalizados
- Confirmación visual de envío

### Configuración
```typescript
rsvp: {
  enabled: true,
  deadline: '2024-05-15',
  message: 'Confirma tu asistencia antes del 15 de mayo',
  contact: {
    phone: '+1 (555) 123-4567',
    email: 'rsvp@nuestraboda.com',
    whatsapp: 'https://wa.me/1234567890'
  }
}
```

## 🌐 Despliegue

### Opciones Gratuitas Recomendadas

#### Vercel (Recomendado)
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm run build
# Sube la carpeta `dist` a Netlify
```

#### GitHub Pages
```bash
npm install -g gh-pages
npm run build
npm run deploy
```

### Dominios Personalizados
Todos los servicios anteriores soportan dominios personalizados gratuitos.

## 🛠️ Tecnologías Utilizadas

- **Vite** - Build tool ultrarrápido
- **React 18** - Biblioteca UI moderna
- **TypeScript** - JavaScript con tipos
- **Tailwind CSS** - Framework CSS utility-first
- **React Icons** - Iconos vectoriales
- **Google Fonts** - Fuentes elegantes

## 📱 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ iOS Safari 14+
- ✅ Android Chrome 90+

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- [Vite](https://vitejs.dev/) por el increíble build tool
- [React](https://reactjs.org/) por la mejor biblioteca UI
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de diseño
- [Unsplash](https://unsplash.com/) por las imágenes de ejemplo
- [Google Fonts](https://fonts.google.com/) por las fuentes elegantes

---

**¿Necesitas ayuda?** Abre un issue en GitHub o contáctanos.

¡Feliz celebración! 🎉

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
