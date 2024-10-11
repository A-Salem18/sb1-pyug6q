"use client"

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Mic2, BarChart3, Users } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', icon: BarChart3, label: 'Analytics' },
    { href: '/dashboard/clients', icon: Users, label: 'Clients' },
  ];

  return (
    <div className="flex h-screen bg-background">
      <aside className={`bg-card text-card-foreground w-64 ${isSidebarOpen ? '' : 'hidden'} flex-shrink-0`}>
        <div className="p-4">
          <Link href="/dashboard">
            <div className="flex items-center space-x-2 mb-8">
              <Mic2 className="h-6 w-6" />
              <span className="text-lg font-semibold">AI Voice Dashboard</span>
            </div>
          </Link>
          <nav>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? 'secondary' : 'ghost'}
                  className="w-full justify-start mb-2"
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-card text-card-foreground shadow">
          <div className="p-4 flex justify-between items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/">Logout</Link>
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}