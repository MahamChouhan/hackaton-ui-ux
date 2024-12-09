export function Newsletter() {
    return (
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-orange-500">S</span>till You Need Our Support ?
            </h2>
            <p className="text-gray-400 mb-6">
              Don't wait make a smart & logical quote here. Its pretty easy.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-orange-500"
              />
              <button className="px-6 py-2 bg-orange-500 rounded font-semibold hover:bg-orange-600 transition-colors">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    )
  }
  
  