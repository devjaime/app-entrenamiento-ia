export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
              Proyecto Piloto - Buscando Socios
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
            Tu Entrenador Personal
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Potenciado por IA
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Una aplicación de salud personalizada que usa inteligencia artificial
            para optimizar tu entrenamiento, nutrición y bienestar basándose en
            <span className="font-semibold text-gray-900 dark:text-white"> tus datos médicos reales</span>.
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">+5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">años de vida</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">personalizado</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">ajustes con IA</div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="pt-8 max-w-2xl mx-auto">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                El Objetivo: Aumentar tu Esperanza y Calidad de Vida
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Combina tus datos médicos (glucosa, colesterol, exámenes de sangre),
                métricas de Apple Watch, y tus objetivos personales para crear un
                plan de entrenamiento y nutrición que evoluciona contigo día a día.
              </p>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="pt-8">
            <a
              href="/en"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all"
            >
              🇺🇸 View in English
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
