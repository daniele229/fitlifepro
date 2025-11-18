'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, UtensilsCrossed, User, TrendingUp } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/dashboard', icon: Home, label: 'Início' },
    { href: '/diario', icon: BookOpen, label: 'Diário' },
    { href: '/receitas', icon: UtensilsCrossed, label: 'Receitas' },
    { href: '/progresso', icon: TrendingUp, label: 'Progresso' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-50 md:top-0 md:bottom-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around md:justify-start md:gap-8 py-3">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 py-2 rounded-lg transition-all ${
                  isActive
                    ? 'text-[#0072CE] bg-blue-50 dark:bg-blue-950'
                    : 'text-gray-600 dark:text-gray-400 hover:text-[#0072CE] hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs md:text-sm font-medium">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
