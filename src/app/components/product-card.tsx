interface ProductCardProps {
    image: string
    title: string
    price: number
  }
  
  export function ProductCard({ image, title, price }: ProductCardProps) {
    return (
      <div className="group cursor-pointer">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-orange-500 font-medium">${price.toFixed(2)}</p>
        </div>
      </div>
    )
  }
  
  