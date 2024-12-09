import { MenuHero } from "../components/menu-hero"
import { MenuSection } from "../components/menu-section"
import { Partners } from "../components/partners"
import { Newsletter } from "../components/newsletter"
import { Footer } from "../components/footer"

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-white">
      <MenuHero />
      <div className="container mx-auto px-4 py-12 space-y-16">
        <MenuSection
          title="Starter Menu"
          items={[
            {
              name: "Alder Grilled Chinook Salmon",
              description: "Toasted French bread topped with onions, cheddar",
              price: "32$",
              calories: "940 CAL"
            },
            {
              name: "Berries and creme tart",
              description: "Gorgonzola, ricotta, mozzarella, sausage",
              price: "43$",
              calories: "750 CAL"
            },
            {
              name: "Tormentoso Bush Pizza Pintoage",
              description: "Ground cumin, avocados, peeled and cubed",
              price: "14$",
              calories: "1000 CAL"
            },
            {
              name: "Spicy Vegan Potato Curry",
              description: "Spreadable cream cheese, crumbled blue cheese",
              price: "35$",
              calories: "940 CAL"
            }
          ]}
          image="/placeholder.svg?height=400&width=400"
          imagePosition="left"
        />
        
        <MenuSection
          title="Main Course"
          items={[
            {
              name: "Optic Big Breakfast Combo Menu",
              description: "Toasted French bread topped with onions, cheddar",
              price: "32$",
              calories: "890 CAL"
            },
            {
              name: "Cashew Chicken With Stir-Fry",
              description: "Gorgonzola, ricotta, mozzarella, sausage",
              price: "43$",
              calories: "790 CAL"
            },
            {
              name: "Vegetables & Green Salad",
              description: "Ground cumin, avocados, peeled and cubed",
              price: "14$",
              calories: "1000 CAL"
            },
            {
              name: "Spicy Vegan Potato Curry",
              description: "Spreadable cream cheese, crumbled blue cheese",
              price: "35$",
              calories: "890 CAL"
            }
          ]}
          image="/placeholder.svg?height=400&width=400"
          imagePosition="right"
        />

        <MenuSection
          title="Dessert"
          items={[
            {
              name: "Fig and lemon cake",
              description: "Toasted French bread topped with onions, cheddar",
              price: "32$",
              calories: "580 CAL"
            },
            {
              name: "Creamy mascarpone cake",
              description: "Gorgonzola, ricotta, mozzarella, sausage",
              price: "43$",
              calories: "700 CAL"
            },
            {
              name: "Pastry, blueberries, lemon juice",
              description: "Ground cumin, avocados, peeled and cubed",
              price: "14$",
              calories: "1000 CAL"
            },
            {
              name: "Pain au chocolat",
              description: "Spreadable cream cheese, crumbled blue cheese",
              price: "35$",
              calories: "580 CAL"
            }
          ]}
          image="/placeholder.svg?height=400&width=400"
          imagePosition="left"
        />

        <MenuSection
          title="Drinks"
          items={[
            {
              name: "Caffe macchiato",
              description: "Toasted French bread topped with onions, cheddar",
              price: "32$",
              calories: "550 CAL"
            },
            {
              name: "Aperol Spritz Capecianno",
              description: "Gorgonzola, ricotta, mozzarella, sausage",
              price: "43$",
              calories: "700 CAL"
            },
            {
              name: "Caffe Latte Campuri",
              description: "Ground cumin, avocados, peeled and cubed",
              price: "14$",
              calories: "1000 CAL"
            },
            {
              name: "Tormentoso BushTea Pintoage",
              description: "Spreadable cream cheese, crumbled blue cheese",
              price: "35$",
              calories: "950 CAL"
            }
          ]}
          image="/placeholder.svg?height=400&width=400"
          imagePosition="right"
        />
      </div>
      <Partners />
      <Newsletter />
      <Footer />
    </div>
  )
}

