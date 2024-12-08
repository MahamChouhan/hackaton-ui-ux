import Image from "next/image"

const chefs = [
  {
    name: "D.Estwood",
    role: "Chief Chef",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cheif%20pic1-WxIDH9cY6Yeq2YBDwKv6nMVYTqvAlE.png"
  },
  {
    name: "D.Scoriesh",
    role: "Assistant Chef",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cheif%20pic2-YGuUPtvo87c81BlmCVz6XS6CCKum8B.png"
  },
  {
    name: "M. William",
    role: "Advertising Chef",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cheif%20pic3-ZQph9HVx54SShkd6CNDpZKmog8exdQ.png"
  },
  {
    name: "W.Readfroad",
    role: "Chef",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cheif%20pic4-bzQveUjbMKTJPUY4o4LStPc5tzj2dJ.png"
  }
]

export function ChefSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Meet <span className="text-orange-500">Our Chef</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef) => (
            <div key={chef.name} className="text-center">
              <div className="relative mb-4 aspect-square">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  width={300}
                  height={300}
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="font-bold text-xl mb-1">{chef.name}</h3>
              <p className="text-gray-400">{chef.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

