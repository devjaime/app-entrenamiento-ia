"use client";

import { useState } from 'react';
import { Check, Gift, TrendingUp, Users, Loader, ArrowRight } from 'lucide-react';

const benefits = [
  { icon: '🎁', text: '30% descuento de lanzamiento' },
  { icon: '📚', text: 'Guía gratuita de longevidad' },
  { icon: '🏆', text: 'Acceso prioritario al beta' },
  { icon: '💪', text: 'Tips de salud semanales' },
];

const features = [
  { emoji: '🧬', title: 'Datos Genéticos', desc: 'Análisis de sangre y marcadores' },
  { emoji: '⏱️', title: 'Tiempo Real', desc: 'Tracking con wearables' },
  { emoji: '📸', title: 'Foto-Análisis', desc: 'IA analiza tus comidas' },
  { emoji: '🎯', title: 'Planes IA', desc: 'Personalizados para ti' },
];

export default function WaitlistSignup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [goal, setGoal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    
    setLoading(true);
    
    // Simular guardado y calcular posición
    console.log('Waitlist signup:', { name, email, age, goal });
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Posición simulada
    setPosition(Math.floor(Math.random() * 100) + 200);
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
        <p className="text-green-700 mb-6">
          Te avisaremos cuando lancemos. Mientras tanto, prepárate con estos recursos:
        </p>
        
        {/* Quick preview */}
        <div className="bg-white rounded-xl p-4 text-left mb-6">
          <p className="font-semibold text-green-800 mb-3">📋 Tu perfil:</p>
          <ul className="space-y-2 text-sm text-green-700">
            <li>✅ Nombre: {name}</li>
            <li>✅ Email: {email}</li>
            <li>✅ Objetivo: {goal}</li>
          </ul>
        </div>

        {/* What you'll get */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
          <p className="font-bold text-green-800 mb-3">🎁 Lo que recibirás:</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Guía PDF de longevidad</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Tips semanales</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Acceso beta</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>30% descuento</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 flex justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{Math.floor(Math.random() * 100) + 300}+ inscriptos</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            <span>+{Math.floor(Math.random() * 20) + 10} esta semana</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Benefits header */}
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-t-2xl p-6 border-2 border-b-0 border-emerald-100">
        <h3 className="font-bold text-emerald-800 mb-4 flex items-center gap-2">
          <Gift className="w-5 h-5" />
          Al registrarte ahora obtienes:
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-emerald-700">
              <span>{benefit.icon}</span>
              <span>{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-b-2xl p-6 border-2 border-t-0 border-gray-200 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Juan"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Edad
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="30"
              min="18"
              max="100"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ¿Cuál es tu objetivo principal?
          </label>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
            required
          >
            <option value="">Selecciona...</option>
            <option value="longevity">Vivir más años y mejor</option>
            <option value="fitness">Mejorar mi condición física</option>
            <option value="weight">Controlar mi peso</option>
            <option value="health">Prevenir enfermedades</option>
            <option value="energy">Tener más energía</option>
          </select>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader className="animate-spin w-5 h-5" />
              Procesando...
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

      {/* Preview of features */}
      <div className="mt-8">
        <p className="text-center text-gray-600 mb-4 text-sm">🚀 Lo que estamos construyendo:</p>
        <div className="grid grid-cols-2 gap-3">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">{f.emoji}</div>
              <p className="font-medium text-gray-800 text-sm">{f.title}</p>
              <p className="text-xs text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
