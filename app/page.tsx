import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Gallery } from "@/components/gallery"
import { Rooms } from "@/components/rooms"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Attractions } from "@/components/attractions"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Rooms />
      <Gallery />
      <Attractions />
      <Contact />
    </main>
  )
}
