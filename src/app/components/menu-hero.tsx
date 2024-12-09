export function MenuHero() {
    return (
      <div className="relative h-[300px] bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/placeholder.svg?height=300&width=1200')" }}
        />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-white text-5xl font-bold mb-4">Our Menu</h1>
          <div className="flex items-center text-white/80">
            <a href="/" className="hover:text-white">Home</a>
            <span className="mx-2">›</span>
            <span>Menu</span>
          </div>
        </div>
      </div>
    )
  }
  
  