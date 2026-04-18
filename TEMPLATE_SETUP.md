# 📦 Instrucciones para usar este template

## 1️⃣ Clonar el Repositorio

```bash
git clone https://github.com/TU_USUARIO/template-app-one-page.git
cd template-app-one-page
```

## 2️⃣ Instalar Dependencias

```bash
npm install
```

## 3️⃣ Cambiar el Nombre del Proyecto

### Opción A: Cambio rápido
En `package.json`, cambia:
```json
{
  "name": "mi-nuevo-proyecto",
  ...
}
```

### Opción B: Cambio en carpeta
```bash
cd ..
mv template-app-one-page mi-nuevo-proyecto
cd mi-nuevo-proyecto
```

## 4️⃣ Personalizar para tu Negocio

Abre `src/config/business.ts` y reemplaza:
- `name` - Nombre de tu negocio
- `tagline` - Tu eslogan
- `description` - Descripción
- `email`, `phone`, `address` - Tu información
- `socialLinks` - Tus redes sociales
- `gallery` - Tus imágenes/trabajos
- `services` - Tus servicios
- `location` - Tu ubicación
- `colors` - Tus colores

## 5️⃣ Inicia el Servidor

```bash
npm run dev
```

Accede a `http://localhost:5175/`

## 6️⃣ Deploy a Producción

```bash
npm run build
```

### Desplegar en:
- **Vercel**: `vercel`
- **Netlify**: Conecta tu repo
- **Hosting propio**: Sube carpeta `dist/`

---

Para más detalles, consulta:
- `QUICKSTART.md` - Guía rápida (5 minutos)
- `CUSTOMIZATION.md` - Personalización detallada
- `EXAMPLES.md` - Ejemplos por industria
