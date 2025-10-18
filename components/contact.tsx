import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Contáctanos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estamos aquí para ayudarte a planificar tu estadía perfecta en Flores, Petén
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 rounded-lg bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg mb-1">Teléfono</p>
                <a href="tel:+50254853063" className="text-muted-foreground hover:text-primary transition-colors">
                  +502 5485-3063
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/50254853063"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +502 5485-3063
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Instagram className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg mb-1">Instagram</p>
                <a
                  href="https://www.instagram.com/casagvpeten/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @casagvpeten
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg mb-1">Email</p>
                <a
                  href="mailto:javier.guerra294@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  javier.guerra294@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg mb-1">Ubicación</p>
                <p className="text-muted-foreground mb-3">
                  Tercera Lotificación, 11 avenida
                  <br />
                  Flores 17001, Petén, Guatemala
                </p>
                <Button variant="outline" asChild>
                  <a href="https://maps.app.goo.gl/vRWUNhkq7zV74gNN9" target="_blank" rel="noopener noreferrer">
                    Ver en Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <Card className="bg-primary/5 border-primary/20 mt-8">
            <CardHeader>
              <CardTitle>Horario de Atención</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Lunes a Domingo: 7:00 AM - 9:00 PM
                <br />
                <span className="text-sm">Respuesta rápida por WhatsApp 24/7</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
