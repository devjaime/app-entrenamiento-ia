// Página principal que redirige al dashboard de bienestar
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/dashboard');
}