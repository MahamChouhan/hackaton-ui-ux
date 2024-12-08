import Image from "next/image"

export function TestimonialSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            What our <span className="text-orange-500">client are saying</span>
          </h2>
        </div>
        <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/resturant%20pic6-p2syqt3KwKhPvVZwIhjNbTnlbBRPoe.png"
              alt="Client"
              width={64}
              height={64}
              className="rounded-full mr-4"
            />
            <div>
              <h3 className="font-bold text-xl">Alamin Hasan</h3>
              <p className="text-gray-400">Food Specialist</p>
            </div>
          </div>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
          <div className="flex justify-center mt-6">
            <span className="text-orange-500">★★★★★</span>
          </div>
        </div>
      </div>
    </section>
  )
}

