import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-secondary">
      <h1 className="text-4xl font-bold mb-8">AI Voice System Dashboard</h1>
      <p className="text-xl mb-8">Manage your AI-driven voice scripts and client data</p>
      <Link href="/login">
        <Button size="lg">Login</Button>
      </Link>
    </div>
  );
}