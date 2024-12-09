interface MenuItem {
    name: string
    description: string
    price: string
    calories: string
  }
  
  interface MenuSectionProps {
    title: string
    items: MenuItem[]
    image: string
    imagePosition: "left" | "right"
  }
  
  export function MenuSection({ title, items, image, imagePosition }: MenuSectionProps) {
    return (
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {imagePosition === "left" && (
          <div className="relative h-[400px]">
            <img
              src={image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <span className="text-orange-500">◆</span>
            {title}
          </h2>
          <div className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.calories}</p>
                </div>
                <span className="text-orange-500 font-semibold whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
        {imagePosition === "right" && (
          <div className="relative h-[400px]">
            <img
              src={image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    )
  }
  
  