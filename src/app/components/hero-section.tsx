import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-16 flex items-center">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            The Art of <span className="text-orange-500">speed</span>
            <br />
            food Quality
          </h1>
          <p className="text-gray-400 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600">
            Order Now
          </Button>
        </div>
        <div className="relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/resturant%20pic1-Wok9DufhX1k8booHqxeoWbFaAXDXjI.png"
            alt="Featured Dish"
            width={600}
            height={600}
            className="rounded-full object-cover"
          />
          <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}

