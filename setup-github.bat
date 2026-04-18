@echo off
echo Configurando repositorio para GitHub...
echo.
echo PASO 1: Crea un repositorio en GitHub llamado "template-event-invitations"
echo PASO 2: Copia la URL del repositorio (ej: https://github.com/tu-usuario/template-event-invitations.git)
echo.
set /p repo_url="Pega la URL de tu repositorio de GitHub: "
echo.
echo Conectando con GitHub...
git remote add origin %repo_url%
git branch -M main
echo.
echo Subiendo código a GitHub...
git push -u origin main
echo.
echo ¡Listo! Tu template está ahora en GitHub.
echo URL del repositorio: %repo_url%
pause