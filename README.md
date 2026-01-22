# App de Entrenamiento Personalizada con IA

Una aplicación web de salud que usa inteligencia artificial para crear planes personalizados de entrenamiento y nutrición basados en datos médicos reales.

## Características

- 🧬 Personalización basada en datos médicos (glucosa, colesterol, grasa corporal)
- 🤖 IA que ajusta tu plan diariamente según tu progreso
- 🍎 Recomendaciones de comidas con ingredientes disponibles
- ⌚ Integración con Apple Watch
- 📊 Objetivos dinámicos diarios y semanales
- 🧠 Optimización de energía mental
- 🎯 Compartir resultados en redes sociales
- 📱 Demo interactiva con mockup de la app
- 📊 Gráficos de progreso (diario, semanal, mensual)
- 📈 Proyección de calidad de vida hasta 120+ años
- 🌍 Versión en español e inglés

## Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **IA**: API de IA avanzada
- **Persistencia**: LocalStorage (MVP)

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la landing page en español.
Para ver la versión en inglés, visita [http://localhost:3000/en](http://localhost:3000/en).

## Configuración

### 1. Personalizar Enlaces de Contacto

Edita el archivo `components/landing/CTA.tsx` y actualiza:

- LinkedIn: `https://www.linkedin.com/in/tu-perfil`
- Email: `tu-email@ejemplo.com`
- Twitter/X: `https://twitter.com/tu-usuario`

### 2. Agregar Imagen Open Graph

Para que la landing page se vea bien al compartir en redes sociales:

1. Crea una imagen de 1200x630px
2. Guárdala como `/public/og-image.jpg`
3. Incluye:
   - Logo o nombre de la app
   - Propuesta de valor principal
   - Diseño atractivo y profesional

Herramientas recomendadas:
- [Canva](https://www.canva.com/) - Plantillas gratuitas
- [Figma](https://www.figma.com/) - Diseño profesional
- [OG Image Generator](https://og-image.vercel.app/) - Generador online

### 3. Actualizar Metadatos

Edita `app/layout.tsx`:

```typescript
// Actualiza estos campos:
metadataBase: new URL('https://tu-dominio.com'),
authors: [{ name: "Tu Nombre" }],
twitter: {
  creator: "@tu_usuario",
}
```

### 4. Variables de Entorno (Próximo paso)

Cuando implementes la integración con IA:

```bash
# Crea un archivo .env.local
AI_API_KEY=tu_api_key_aqui
```

## Estructura del Proyecto

```
app_entrenamiento/
├── app/
│   ├── page.tsx              # Landing page (Español)
│   ├── layout.tsx            # Layout raíz con metadata
│   ├── globals.css           # Estilos globales
│   └── en/                   # Versión en inglés
│       ├── page.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── CTA.tsx
│       ├── ProgressChart.tsx
│       └── LifespanChart.tsx
├── components/
│   └── landing/
│       ├── Hero.tsx          # Sección hero
│       ├── Features.tsx      # Características
│       ├── Demo.tsx          # Demo interactiva con mockup
│       ├── ProgressChart.tsx # Gráfico de progreso
│       ├── LifespanChart.tsx # Gráfico de calidad de vida
│       └── CTA.tsx           # Call to action
└── public/
    └── images/               # Imágenes estáticas
```

## Secciones de la Landing Page

### 1. Hero
- Propuesta de valor clara
- Badge de "Proyecto Piloto - Buscando Socios"
- Estadísticas clave (+5 años de vida, 100% personalizado, 24/7 ajustes IA)
- Switcher de idioma (ES/EN)

### 2. Features
- 8 características principales con iconos
- Diferenciador clave destacado
- Diseño responsive con hover animations

### 3. Demo Interactiva
- Mockup de teléfono móvil con la app
- 4 pantallas navegables:
  - Cuestionario inicial
  - Dashboard personalizado
  - Tracking diario
  - Asistente IA 24/7
- Selectores interactivos para cambiar entre pantallas

### 4. Gráfico de Progreso
- Selector de vista: Diario, Semanal, Mensual
- Métricas: Energía Mental, Fuerza, Grasa Corporal
- Gráficos de área interactivos (recharts)
- Tarjetas de estadísticas (+110% energía, +217% fuerza, -50% grasa)

### 5. Gráfico de Calidad de Vida
- Proyección hasta 120+ años
- Comparación: Con IA vs Sin optimización vs Promedio población
- Milestones por décadas (30-50, 50-70, 70-90, 90-120+)
- Visualización del objetivo: vivir plenamente hasta 120+

### 6. CTA (Call to Action)
- Sección "Buscando Socios"
- Perfiles buscados (co-fundadores, profesionales salud, developers, inversores)
- Botones de contacto (LinkedIn, Email, Twitter/X)
- Botón de compartir con Web Share API

### 7. Disclaimer
- Advertencia clara: Proyecto Piloto - MVP en Desarrollo
- Aclaración sobre datos simulados
- No constituye consejo médico

## Estado del Proyecto

### Completado ✅
1. ✅ Landing page completa con todas las secciones
2. ✅ Demo interactiva con mockup de la app
3. ✅ Gráficos de progreso (diario, semanal, mensual)
4. ✅ Gráfico de proyección de calidad de vida (hasta 120+ años)
5. ✅ Sección CTA para buscar socios
6. ✅ Disclaimers apropiados (MVP piloto)
7. ✅ Versión en español e inglés
8. ✅ Meta tags y Open Graph para redes sociales
9. ✅ Responsive design

### Próximos Pasos ⏳
1. ⏳ Implementar cuestionario de onboarding funcional
2. ⏳ Integración con API de IA
3. ⏳ Dashboard de seguimiento real
4. ⏳ Sistema de tracking diario con localStorage
5. ⏳ Función de compartir resultados en redes
6. ⏳ Validación científica con profesionales de la salud

## Compartir en LinkedIn

Para atraer socios, comparte la landing page en LinkedIn con este formato:

```
🚀 Estoy construyendo el futuro de la salud personalizada con IA

Una app que combina:
🧬 Datos médicos reales (glucosa, colesterol, exámenes)
🤖 IA avanzada para planes personalizados
⌚ Integración Apple Watch
📊 Seguimiento diario inteligente

Objetivo: Aumentar esperanza y calidad de vida con tecnología

Busco: Co-fundadores, inversores, desarrolladores y profesionales de la salud

🔗 [enlace-a-tu-landing]

#HealthTech #AI #Startup #WellnessTech #Entrepreneurship
```

## Deploy en Vercel

La forma más fácil de deployar es usar [Vercel](https://vercel.com/new):

1. Push tu código a GitHub
2. Importa el proyecto en Vercel
3. Vercel detectará Next.js automáticamente
4. Deploy listo en minutos

## Licencia

MIT

## Contacto

- LinkedIn: [Tu Perfil]
- Email: tu-email@ejemplo.com
- Twitter: @tu_usuario
