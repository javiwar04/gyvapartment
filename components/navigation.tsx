"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Casas G&V
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("caracteristicas")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Características
            </button>
            <button
              onClick={() => scrollToSection("apartamentos")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Habitaciones
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Galería
            </button>
            <Button onClick={() => scrollToSection("contacto")} size="sm">
              Contacto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("caracteristicas")}
                className="text-left px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Características
              </button>
              <button
                onClick={() => scrollToSection("apartamentos")}
                className="text-left px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Habitaciones
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="text-left px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Galería
              </button>
              <div className="px-4">
                <Button onClick={() => scrollToSection("contacto")} className="w-full">
                  Contacto
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
