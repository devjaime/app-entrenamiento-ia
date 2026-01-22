'use client';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 p-12 lg:p-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  Seeking Partners & Collaborators
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                  Let's Build the Future of Personalized Health
                </h2>
                <p className="text-xl text-blue-50 leading-relaxed">
                  I'm developing this MVP and seeking strategic partners,
                  investors, and collaborators who share the vision of using AI
                  to improve people's health and life expectancy.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-lg font-semibold text-white">
                  Profiles I'm looking for:
                </p>
                <ul className="space-y-2 text-blue-50">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💼</span>
                    <span>Co-founders with healthtech or fitness tech experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🏥</span>
                    <span>Health professionals (nutritionists, sports medicine doctors)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💻</span>
                    <span>Developers interested in AI applied to health</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💰</span>
                    <span>Angel investors or VCs focused on wellness & AI</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let's Connect
                </h3>

                <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#0077B5] hover:bg-[#006399] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Connect on LinkedIn
                </a>

                <a
                  href="mailto:hernandez.hs@gmail.com?subject=Interest in AI Training App"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Send Email
                </a>

                <a
                  href="https://twitter.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-black hover:bg-gray-900 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Follow on X/Twitter
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-white">MVP</div>
                  <div className="text-sm text-blue-100">In development</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-white">2026</div>
                  <div className="text-sm text-blue-100">Expected launch</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Share this landing page on LinkedIn to help me find the ideal partners
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'AI Training App - Seeking Partners',
                    text: 'A revolutionary personalized health app with AI. Join us!',
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
