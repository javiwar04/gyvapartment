"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  // Salas de estar
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e2yFZX6jNXIuhUJoTDbO7P23L0tY2h.png",
    alt: "Sala de estar con sillón reclinable y escalera de madera",
    category: "Salas de Estar",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NxENCC7xaH39RRF3CDY8bFLTLMNRYj.png",
    alt: "Sala de estar con techos altos y cocina abierta",
    category: "Salas de Estar",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-x9cW1LOri63hBk8khgGllps82Sl9pz.png",
    alt: "Vista amplia de sala con escalera y comedor",
    category: "Salas de Estar",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KhsOEZ5ssAuHZjxXktVEITMJu6PvC6.png",
    alt: "Sala de estar con barra de cocina y escalera",
    category: "Salas de Estar",
  },

  // Cocinas
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bmLkPOysDfr2S8PrejFuusx6nPysNx.png",
    alt: "Cocina con muebles de madera y electrodomésticos modernos",
    category: "Cocinas",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rAYzE1w25aOg9GpctyecKqyJja2rsI.png",
    alt: "Cocina en L con barra de madera",
    category: "Cocinas",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vsNnfQRUMsbUsMicq1d1yoeFExEF8j.png",
    alt: "Cocina con gabinetes de madera y encimera gris",
    category: "Cocinas",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DZoMmKjOxQU5BpaFMxvwZMlWBOubZb.png",
    alt: "Cocina amplia con isla y electrodomésticos de acero inoxidable",
    category: "Cocinas",
  },

  // Comedores
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YTe724RZ2ti1zE6gcr6y06Bmd9RQv2.png",
    alt: "Comedor formal con mesa de madera para 8 personas",
    category: "Comedores",
  },

  // Baños
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1pMOnZsIiyR8uolgNnkV4lDp1M18o6.png",
    alt: "Baño completo con ducha de vidrio",
    category: "Baños",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LGUzPByGGDl62i0zTM6ARZNGUk1I6y.png",
    alt: "Baño con ducha y estantería",
    category: "Baños",
  },

  // Habitaciones
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3wYT5Ru4P2TpcnfxUWQyELoH3rCbqm.png",
    alt: "Habitación minimalista con aire acondicionado",
    category: "Habitaciones",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pgTIM6WNxzb8yonKVpdCCrdLvfngtb.png",
    alt: "Habitación minimalista con pared gris",
    category: "Habitaciones",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BPhzZ6H8UXeSSiujUNLuzZUgnfDynG.png",
    alt: "Habitación con escritorio y cortinas",
    category: "Habitaciones",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FMwJEs5cQncZugUpFwbKiJT0iTo1Ig.png",
    alt: "Habitación blanca con closet",
    category: "Habitaciones",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5XNQCC3jFF3QxHnlqgAAHRQUADV40t.png",
    alt: "Habitación con ventilador de techo y closet",
    category: "Habitaciones",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Y7iSk5sD1ojCXnCuVLrT8uytYOycpR.png",
    alt: "Habitación con luz natural y estantería",
    category: "Habitaciones",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FPITwbwxaRo8KAe12YGICquffBPilN.png",
    alt: "Habitación con TV y área de trabajo",
    category: "Habitaciones",
  },

  // Áreas Exteriores
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yIIi8xilOXlXCwUARKj6edXGUio6gY.png",
    alt: "Jardín con pérgola cubierta de plantas",
    category: "Áreas Exteriores",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-RXogE8FwxJswguzPPb5A827dZkxAMk.jpeg",
    alt: "Patio interior con jardín vertical y luces",
    category: "Áreas Exteriores",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-ySV64CsFDi4DHLNpXlMDqvZfIgeEyt.jpeg",
    alt: "Entrada principal con jardín vertical",
    category: "Áreas Exteriores",
  },

  // Fachada
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SUCtzJepXf1Oa8X4r7mcFeuLkJ4fuG.png",
    alt: "Vista frontal con garajes",
    category: "Fachada",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0FnoEKAoAvUwRGWjL4V6an91Icgf9J.png",
    alt: "Fachada completa de la propiedad",
    category: "Fachada",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas")
  const [showAll, setShowAll] = useState(false)

  const categories = ["Todas", ...Array.from(new Set(galleryImages.map((img) => img.category)))]

  const filteredImages =
    selectedCategory === "Todas" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 6)

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1)
    }
  }

  return (
    <section id="galeria" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Galería de Fotos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">Conoce nuestras instalaciones</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category)
                setShowAll(false)
              }}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>

        {!showAll && filteredImages.length > 6 && (
          <div className="flex justify-center mt-8">
            <Button onClick={() => setShowAll(true)} size="lg" variant="outline">
              Ver más ({filteredImages.length - 6} fotos más)
            </Button>
          </div>
        )}

        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-black/95 border-none">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 z-50 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            {selectedImage !== null && (
              <div className="relative w-full h-[80vh]">
                <Image
                  src={filteredImages[selectedImage].src || "/placeholder.svg"}
                  alt={filteredImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />

                {selectedImage > 0 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={handlePrevious}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                )}

                {selectedImage < filteredImages.length - 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={handleNext}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
