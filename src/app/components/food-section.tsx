import Image from "next/image"

const foodItems = [
  {
    name: "Cheese Burger",
    price: "$12.99",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/food%20pic4-akfPQH8yKcNhZDe4eLgwJYahocGcsc.png"
  },
  {
    name: "Veggie Sandwich",
    price: "$8.99",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/food%20pic2-2tnDPCMogjmwhlC2RVAQ1ExqWRxNey.png"
  },
  {
    name: "Seafood Platter",
    price: "$24.99",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/food%20pic3-a8LV0nxZHRXweiD2pZzzwNWBRg7b0O.png"
  },
  {
    name: "BBQ Pizza",
    price: "$16.99",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/food%20pic5-MEbiPbMjZoDw2tKnCnQCiZL5zkNB4X.png"
  }
]

export function FoodSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Choose <span className="text-orange-500">Food Item</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {foodItems.map((item) => (
            <div key={item.name} className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{item.name}</h3>
                <p className="text-orange-500 font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

