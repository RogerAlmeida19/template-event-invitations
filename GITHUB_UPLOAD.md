# 🚀 Subir a GitHub - Guía Paso a Paso

## Opción 1: Repositorio Nuevo en GitHub

### Paso 1: Crear repositorio en GitHub

1. Ve a https://github.com/new
2. **Nombre del repositorio:** `template-app-one-page` (o el que prefieras)
3. **Descripción:** `Template profesional one-page para presentar negocios`
4. **Publicidad:** Public (para que otros puedan usarlo)
5. **NO marques** "Initialize with README" (ya lo tenemos)
6. Click **"Create repository"**

### Paso 2: Inicializar Git en tu proyecto

```bash
cd c:\Repositorios\template-app-one-page
git init
git add .
git commit -m "Inicial commit: Template one-page profesional"
```

### Paso 3: Conectar con GitHub

GitHub te mostrará comandos. Usa estos (reemplaza `TU_USUARIO`):

```bash
git branch -M main
git remote add origin https://github.com/TU_USUARIO/template-app-one-page.git
git push -u origin main
```

### Paso 4: Verifica en GitHub

Ve a `https://github.com/TU_USUARIO/template-app-one-page`

¡Listo! 🎉

---

## Opción 2: Sin terminal (GitHub Desktop)

### Alternativa visual:

1. Descarga GitHub Desktop: https://desktop.github.com/
2. **File** → **Add Local Repository**
3. Selecciona la carpeta del proyecto
4. **Publish repository**
5. Llena los campos y publica

---

## Próximos Pasos

### Hacer visible como template

En GitHub, marca tu repo como **Template Repository**:

1. Abre tu repositorio en GitHub
2. **Settings** → **Template repository** ✓
3. Ahora otros pueden usar **"Use this template"**

### Actualizar después

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

---

## Comandos Git esenciales

```bash
# Ver estado
git status

# Ver cambios
git diff

# Deshacer cambio (antes de commit)
git restore <archivo>

# Ver historial
git log --oneline

# Cambiar mensaje último commit
git commit --amend -m "Nuevo mensaje"
```

---

## 📋 Checklist

- [ ] Crear repositorio en GitHub
- [ ] Ejecutar `git init`
- [ ] Ejecutar `git add .`
- [ ] Ejecutar `git commit -m "..."`
- [ ] Ejecutar `git push`
- [ ] Marcar como Template Repository
- [ ] Compartir enlace con amigos/colegas

---

## 📞 Ayuda

Si algo sale mal:

```bash
# Resetear cambios
git reset --hard origin/main

# Clonar nuevamente
git clone <url>
```

---

**¡Tu template está listo para ser compartido con el mundo!** 🌍
