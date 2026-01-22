export default function Features() {
  const features = [
    {
      icon: "🧬",
      title: "Personalización Total",
      description:
        "Basado en tus datos médicos reales: glucosa, colesterol, índice de grasa corporal, exámenes de sangre y edad.",
    },
    {
      icon: "🤖",
      title: "IA que Aprende de Ti",
      description:
        "La IA analiza tu progreso diario y ajusta automáticamente tu plan de entrenamiento y nutrición.",
    },
    {
      icon: "🍎",
      title: "Nutrición Inteligente",
      description:
        "Dile a la IA qué tienes en tu refrigerador y obtén recetas personalizadas que se ajustan a tu plan.",
    },
    {
      icon: "⌚",
      title: "Integración Apple Watch",
      description:
        "Sincroniza tus pasos, cardio y métricas de actividad para un seguimiento completo y preciso.",
    },
    {
      icon: "📊",
      title: "Objetivos Dinámicos",
      description:
        "Establece metas diarias y semanales que se ajustan según tu progreso y contexto personal.",
    },
    {
      icon: "🧠",
      title: "Energía Mental",
      description:
        "No solo fitness físico: optimiza tu energía mental y rendimiento laboral con recomendaciones personalizadas.",
    },
    {
      icon: "🎯",
      title: "Resultados Medibles",
      description:
        "Monitorea tu progreso con métricas claras y comparte tus logros en redes sociales para inspirar a otros.",
    },
    {
      icon: "🔬",
      title: "Basado en Ciencia",
      description:
        "Cada recomendación está fundamentada en datos médicos y científicos, no en modas pasajeras.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Por Qué Esta App es Diferente?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            No es otra app de fitness genérica. Es tu entrenador personal con IA
            que se adapta a tu biología y objetivos únicos.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            El Diferenciador Clave
          </h3>
          <p className="text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Mientras otras apps te dan planes genéricos, nosotros usamos tus datos
            médicos reales y el poder de la IA para crear un plan que evoluciona
            contigo cada día. Tu cuerpo es único, tu plan también debería serlo.
          </p>
        </div>
      </div>
    </section>
  );
}
