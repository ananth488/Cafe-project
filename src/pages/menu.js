const menu = [
  {
    name: "Cappuccino",
    price: "₹150",
    image: "/img/cappuccino.jpg",
  },
  {
    name: "Latte",
    price: "₹180",
    image: "/img/Caffe_Latte.jpg",
  },
  {
    name: "Espresso",
    price: "₹120",
    image: "/img/coffee-recipe.webp",
  },
  {
    name: "Americano",
    price: "₹140",
    image: "/img/Americano.jpg",
  },
  {
    name: "Mocha",
    price: "₹190",
    image: "/img/Dark-Chocolate-Mocha.jpg",
  },
  {
    name: "Cold Brew",
    price: "₹180",
    image: "/img/Cold-Brew-Coffee.jpg",
  },
  {
    name: "Iced Latte",
    price: "₹170",
    image: "/img/Iced_Latte.jpg",
  },
  {
    name: "Chocolate Cake",
    price: "₹220",
    image: "/img/triple-chocolate-cake-4.jpg",
  },
  {
    name: "Cheesecake",
    price: "₹250",
    image: "/img/cheesecake.webp",
  },
  {
    name: "Brownie",
    price: "₹180",
    image: "/img/Brownies_0-SQ.webp",
  },
  {
    name: "Croissant",
    price: "₹140",
    image: "/img/culinary_collective_croissants.jpg",
  },
  {
    name: "Garlic Bread",
    price: "₹160",
    image:"/img/Garlic-Bread.webp",
  },
  {
    name: "Sandwich",
    price: "₹200",
    image: "/img/vegetable-sandwich.jpg",
  },
  {
    name: "Veg Puff",
    price: "₹80",
    image: "/img/veg-puff.jpg"
  },
  {
    name: "Blueberry Muffin",
    price: "₹130",
    image: "/img/Easy-Blueberry.jpg",
  },
  {
    name: "Donut",
    price: "₹120",
    image: "/img/Dunkin-Donuts.webp",
  },
  {
    name: "Pancakes",
    price: "₹210",
    image: "/img/Pancakes.jpg",
  },
  {
    name: "French Fries",
    price: "₹150",
    image: "/img/Crispy-Fries.webp",
  },
  {
    name: "Milkshake",
    price: "₹180",
    image: "/img/milkshake.webp",
  },
  {
    name: "Hot Chocolate",
    price: "₹170",
    image: "/img/nutella-hot-chocoate.jpg",
  },
  {
    name: "Tea",
    price: "₹90",
    image: "/img/tea_served.jpg",
  },
  {
    name: "Masala Chai",
    price: "₹100",
    image: "/img/spiced-chai.jpg",
  },
];

export default function Menu() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-12 animate-slideUp">
        Our Menu
      </h1>

      {/* Menu Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {menu.map((item, i) => (
          <div
            key={i}
            className=" rounded overflow-hidden shadow transition transform hover:-translate-y-2 hover:shadow-xl animate-fadeIn"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-cover transition duration-500 hover:scale-105"
            />

            {/* Content */}
            <div className="p-5 text-center">
              <h3 className="font-semibold text-lg mb-2">
                {item.name}
              </h3>
              <p className="text-amber-600 font-bold">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
