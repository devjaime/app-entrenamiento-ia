import type { Metadata } from 'next';
import Hero from './Hero';
import Features from './Features';
import Demo from '@/components/landing/Demo';
import ProgressChart from './ProgressChart';
import LifespanChart from './LifespanChart';
import CTA from './CTA';

export const metadata: Metadata = {
  title: "AI Personal Trainer | Increase Your Life Expectancy",
  description: "Personalized health app powered by AI that creates training and nutrition plans based on your real medical data. Increase your life expectancy and quality of life with intelligent daily tracking.",
  keywords: ["personal trainer", "artificial intelligence", "personalized health", "nutrition", "fitness", "personalized AI", "Apple Watch", "life expectancy", "wellness", "healthtech"],
};

export default function HomeEN() {
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
              ⚠️ Pilot Project - MVP in Development
            </p>
            <p className="mb-2">
              This is a product concept in validation phase. Data and projections shown are simulations for illustrative purposes
              based on research about longevity and healthy habits.
            </p>
            <p className="mb-2">
              We are seeking partners, health professionals, developers, and investors to scientifically validate this project
              and build a product that truly improves people's health and life expectancy.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Not medical advice. Always consult with health professionals before making changes to your diet or exercise.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
