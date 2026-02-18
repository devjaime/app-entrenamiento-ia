"use client";

import { useState } from 'react';
import { Check, Gift, TrendingUp, Users } from 'lucide-react';

const benefits = [
  "🎁 Descuento de lanzamiento (30% off)",
  "📚 Guía gratuita de longevidad",
  "🏆 Acceso prioritario al beta",
  "💪 Tips de salud semanales",
];

export default function WaitlistSignup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    
    setLoading(true);
    
    // Simular guardado (en producción guardaría en DB)
    console.log('Waitlist signup:', { name, email });
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          ¡Bienvenido a la waitlist!
        </h3>
        <p className="text-green-700 mb-4">
          Te avisaremos cuando lancemos. Revisa tu email para la guía gratuita de longevidad.
        </p>
        
        <div className="bg-white rounded-xl p-4 text-left">
          <p className="font-semibold text-green-800 mb-2">Mientras tanto:</p>
          <ul className="space-y-2 text-sm text-green-700">
            <li>✅ <strong>332</strong> personas ya inscribieron</li>
            <li>✅ <strong>45</strong> cupos beta disponibles</li>
            <li>✅ Tu lugar: <strong>#{Math.floor(Math.random() * 100) + 200}</strong></li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Benefits */}
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-t-2xl p-6 border-2 border-b-0 border-emerald-100">
        <h3 className="font-bold text-emerald-800 mb-4 flex items-center gap-2">
          <Gift className="w-5 h-5" />
          Al registrarte ahora obtienes:
        </h3>
        <ul className="space-y-2">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-emerald-700">
              <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-b-2xl p-6 border-2 border-t-0 border-gray-200 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Tu nombre
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="Juan"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Tu email
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Registrando...
            </>
          ) : (
            <>
              🚀 Entrar a la Waitlist
            </>
          )}
        </button>
      </form>

      {/* Social proof */}
      <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>332 inscriptos</span>
        </div>
        <span>•</span>
        <div className="flex items-center gap-1">
          <TrendingUp className="w-4 h-4" />
          <span>+23 esta semana</span>
        </div>
      </div>
    </div>
  );
}
