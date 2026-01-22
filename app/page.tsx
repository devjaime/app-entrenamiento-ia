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

      {/* Disclaimer */}
      <section className="py-12 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            <p className="font-semibold text-gray-900 dark:text-white mb-2">
              ⚠️ Proyecto Piloto - MVP en Desarrollo
            </p>
            <p className="mb-2">
              Este es un concepto de producto en fase de validación. Los datos y proyecciones mostrados son simulaciones con fines ilustrativos
              basadas en investigaciones sobre longevidad y hábitos saludables.
            </p>
            <p className="mb-2">
              Buscamos socios, profesionales de la salud, desarrolladores e inversores para validar científicamente este proyecto
              y construir un producto que realmente mejore la salud y esperanza de vida de las personas.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              No constituye consejo médico. Consulta siempre con profesionales de la salud antes de hacer cambios en tu dieta o ejercicio.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
