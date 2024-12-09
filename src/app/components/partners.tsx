export function Partners() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-12">
            We work with the best pepole
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <img
                  src={`/placeholder.svg?height=60&width=120&text=Partner${i + 1}`}
                  alt=""
                  className="h-12 w-auto opacity-50"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  