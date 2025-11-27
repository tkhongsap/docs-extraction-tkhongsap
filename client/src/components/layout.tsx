import { Link, useLocation } from "wouter";
import { useAuth } from "@/lib/mock-auth";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  FileText, 
  Files, 
  History, 
  Settings, 
  LogOut, 
  Globe,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <AuthenticatedLayout>{children}</AuthenticatedLayout>;
  }
  
  return <PublicLayout>{children}</PublicLayout>;
}

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage('en')}>
          English {language === 'en' && '✓'}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('th')}>
          ไทย (Thai) {language === 'th' && '✓'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function PublicLayout({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage();
  const { login } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-white">
              <FileText className="h-5 w-5" />
            </div>
            DocExtract
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-primary">{t('nav.home')}</Link>
            <Link href="/#pricing" className="transition-colors hover:text-primary">{t('nav.pricing')}</Link>
            <Link href="/#about" className="transition-colors hover:text-primary">{t('nav.about')}</Link>
            <div className="h-4 w-px bg-border" />
            <LanguageSwitcher />
            <Button variant="ghost" onClick={() => login()}>{t('nav.signin')}</Button>
            <Button onClick={() => login()}>{t('hero.cta')}</Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitcher />
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t p-4 space-y-4 bg-background">
            <Link href="/" className="block text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.home')}</Link>
            <Link href="/#pricing" className="block text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.pricing')}</Link>
            <Button className="w-full" onClick={() => login()}>{t('nav.signin')}</Button>
          </div>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t py-8 bg-muted/20">
        <div className="container px-4 text-center text-sm text-muted-foreground">
          © 2024 DocExtract. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage();
  const { logout, user } = useAuth();
  const [location] = useLocation();

  const navItems = [
    { href: '/dashboard', icon: LayoutDashboard, label: t('nav.dashboard') },
    { href: '/extraction/general', icon: FileText, label: t('nav.general') },
    { href: '/templates', icon: Files, label: t('nav.templates') },
    { href: '/history', icon: History, label: t('nav.history') },
    { href: '/settings', icon: Settings, label: t('nav.settings') },
  ];

  return (
    <div className="flex h-screen bg-muted/10">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r bg-sidebar text-sidebar-foreground md:flex">
        <div className="flex h-16 items-center px-6 border-b border-sidebar-border">
          <div className="flex items-center gap-2 font-bold text-xl text-sidebar-primary-foreground">
            <div className="h-8 w-8 rounded bg-sidebar-primary flex items-center justify-center text-white">
              <FileText className="h-5 w-5" />
            </div>
            DocExtract
          </div>
        </div>
        
        <div className="flex-1 py-6 px-4 space-y-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer",
                location === item.href || (item.href !== '/dashboard' && location.startsWith(item.href)) 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                  : "text-sidebar-foreground/70"
              )}>
                <item.icon className="h-4 w-4" />
                {item.label}
              </div>
            </Link>
          ))}
        </div>

        <div className="p-4 border-t border-sidebar-border">
          <div className="mb-4 p-3 rounded-lg bg-sidebar-accent/50 text-xs">
            <div className="flex justify-between mb-2 text-sidebar-foreground/70">
              <span>{t('common.usage')}</span>
              <span>{user?.usage} / {user?.limit}</span>
            </div>
            <div className="h-1.5 w-full bg-sidebar-border rounded-full overflow-hidden">
              <div 
                className="h-full bg-sidebar-primary" 
                style={{ width: `${(user!.usage / user!.limit) * 100}%` }} 
              />
            </div>
            {user!.usage / user!.limit > 0.8 && (
              <div className="mt-2 text-amber-400 font-medium">Limit approaching</div>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground font-medium">
                {user?.name.charAt(0)}
              </div>
              <div className="text-sm">
                <div className="font-medium truncate max-w-[100px]">{user?.name}</div>
                <div className="text-xs text-sidebar-foreground/50">Pro Plan</div>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={logout} className="text-sidebar-foreground/50 hover:text-sidebar-foreground">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b bg-background px-6">
          <h1 className="text-lg font-semibold">
            {navItems.find(i => location === i.href)?.label || 'DocExtract'}
          </h1>
          <LanguageSwitcher />
        </header>
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
