export default function Features() {
  const features = [
    {
      icon: "🧬",
      title: "Datos Genéticos",
      description: "Integración con análisis de sangre, perfil lipídico y marcadores inflamatorios para planes personalizados.",
    },
    {
      icon: "⏱️",
      title: "Tiempo Real",
      description: "Tracking 24/7 con Apple Watch y dispositivos wearables. Métricas diarias de recuperación y rendimiento.",
    },
    {
      icon: "📸",
      title: "Foto-Análisis IA",
      description: "Sube fotos de tu comida y nuestra IA analiza porciones, calorías y calidad nutricional al instante.",
    },
    {
      icon: "🎯",
      title: "Planes Adaptativos",
      description: "El algoritmo ajusta tu plan diario basado en tu energía, sueño y objetivos. No es estático, evoluciona.",
    },
    {
      icon: "🏆",
      title: "Proyección de Longevidad",
      description: "Visualiza cómo tus hábitos impactan tu esperanza de vida. Basado en evidencia científica.",
    },
    {
      icon: "👨‍⚕️",
      title: "Coaches Certificados",
      description: "Acceso a nutricionistas y médicos deportivos. Telemedicina integrada para seguimiento profesional.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium mb-4">
            ✨ Características Únicas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            La ciencia de vivir{' '}
            <span className="text-emerald-600">120+ años</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            No es solo ejercicio. Es un ecosistema completo de salud personalizada 
            impulsado por inteligencia artificial de frontera.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#waitlist"
            className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-600/25"
          >
            🚀 Únete a la Lista de Espera
          </a>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
            Lanzamiento 2026 • Cupos limitados para beta
          </p>
        </div>
      </div>
    </section>
  );
}
