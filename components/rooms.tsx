import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bed, Users, Bath, Home } from "lucide-react"
import Image from "next/image"

export function Rooms() {
  const apartments = [
    {
      name: "Apartamento para 8 personas",
      description: "Espacioso y confortable para grupos medianos",
      capacity: "8 personas",
      bedrooms: "3 habitaciones",
      bathrooms: "2 baños",
      image: "/living-room-1.png",
      features: ["Cocina equipada", "WiFi", "Aire acondicionado", "TV", "Sala amplia", "Comedor"],
    },
    {
      name: "Alojamiento Entero",
      description: "Espacioso para grupos grandes",
      capacity: "8-16 personas",
      bedrooms: "4+ habitaciones",
      bathrooms: "3 baños",
      image: "/living-room-3.png",
      features: ["Cocina equipada", "WiFi", "Aire acondicionado", "TV", "Sala amplia", "Comedor"],
    },
  ]

  return (
    <section id="apartamentos" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Nuestros Apartamentos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Elige el espacio perfecto para tu estadía en Flores, Petén
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {apartments.map((apartment, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 w-full">
                <Image src={apartment.image || "/placeholder.svg"} alt={apartment.name} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{apartment.name}</CardTitle>
                <CardDescription className="text-base">{apartment.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{apartment.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="h-4 w-4 text-primary" />
                    <span>{apartment.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-4 w-4 text-primary" />
                    <span>{apartment.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home className="h-4 w-4 text-primary" />
                    <span>Amueblado</span>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-sm font-semibold mb-2">Incluye:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {apartment.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full" asChild>
                  <a href="#contacto">Reservar</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
