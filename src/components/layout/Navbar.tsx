"use client";

import * as React from "react";
import Link from "next/link";
import { TransparentImage } from "@/components/ui/TransparentImage";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Terapias", href: "/terapias" },
    { name: "Talleres", href: "/talleres" },
    { name: "Sobre Mí", href: "/sobre-mi" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-text-muted/10 shadow-sm py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 overflow-hidden shrink-0 flex items-center justify-center -translate-y-1">
             <TransparentImage 
                src="/images/logo.png" 
                alt="Espacio Reiki Logo" 
                className="w-full h-full object-contain"
             />
          </div>
          <span className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary group-hover:opacity-80 transition-opacity">
            Espacio Reiki <span className="hidden sm:inline text-base font-medium text-text-main/70 ml-1">con Carmen Rocío</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-main hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contacto">
            <Button variant="default" size="sm" className="hidden lg:inline-flex ml-2">
              Reservar Cita
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-main hover:text-primary transition-colors cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-text-muted/10 shadow-lg py-4 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-text-main hover:text-primary py-2 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="default" className="w-full mt-2">
              Reservar Cita
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
