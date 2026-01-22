export default function Features() {
  const features = [
    {
      icon: "🧬",
      title: "Total Personalization",
      description: "Based on your real medical data: glucose, cholesterol, body fat percentage, blood tests, and age.",
    },
    {
      icon: "🤖",
      title: "AI That Learns From You",
      description: "The AI analyzes your daily progress and automatically adjusts your training and nutrition plan.",
    },
    {
      icon: "🍎",
      title: "Intelligent Nutrition",
      description: "Tell the AI what's in your fridge and get personalized recipes that fit your plan.",
    },
    {
      icon: "⌚",
      title: "Apple Watch Integration",
      description: "Sync your steps, cardio, and activity metrics for complete and accurate tracking.",
    },
    {
      icon: "📊",
      title: "Dynamic Goals",
      description: "Set daily and weekly goals that adjust based on your progress and personal context.",
    },
    {
      icon: "🧠",
      title: "Mental Energy",
      description: "Not just physical fitness: optimize your mental energy and work performance with personalized recommendations.",
    },
    {
      icon: "🎯",
      title: "Measurable Results",
      description: "Track your progress with clear metrics and share your achievements on social media to inspire others.",
    },
    {
      icon: "🔬",
      title: "Science-Based",
      description: "Every recommendation is based on medical and scientific data, not passing fads.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Is This App Different?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Not another generic fitness app. It's your personal AI trainer
            that adapts to your unique biology and goals.
          </p>
        </div>

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

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            The Key Differentiator
          </h3>
          <p className="text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
            While other apps give you generic plans, we use your real medical data
            and AI power to create a plan that evolves with you every day. Your body
            is unique, your plan should be too.
          </p>
        </div>
      </div>
    </section>
  );
}
