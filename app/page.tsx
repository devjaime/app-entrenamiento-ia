import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Demo from "@/components/landing/Demo";
import ProgressChart from "@/components/landing/ProgressChart";
import LifespanChart from "@/components/landing/LifespanChart";
import CTA from "@/components/landing/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Demo />
      <ProgressChart />
      <LifespanChart />
      <CTA />

      {/* Disclaimer - Versión honesta */}
      <section className="py-12 bg-red-50 dark:bg-red-900/20 border-t border-red-200 dark:border-red-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sm text-red-800 dark:text-red-200 leading-relaxed">
            <p className="font-bold text-lg mb-4">
              ⚠️ ESTADO REAL DEL PROYECTO
            </p>
            <p className="mb-4">
              <strong>Esto es una landing page de presentación.</strong> La app NO existe todavía.
              Las funcionalidades que ves (IA, Apple Watch, análisis de fotos, longevidad) son 
              lo que QUEREMOS construir, no lo que tenemos hoy.
            </p>
            <p className="mb-4">
              Si te sumas a la waitlist, te avisaremos cuando empecemos a desarrollar cada feature.
              Estamos buscando socios y desarrolladores para hacerlo realidad.
            </p>
            <p className="font-semibold text-red-700 dark:text-red-300">
              🚫 No constituye consejo médico. 
              Consulta siempre con profesionales de la salud.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
