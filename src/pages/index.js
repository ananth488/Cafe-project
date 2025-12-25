import Banner from "@/components/Banner";
import Link from "next/link";

const featuredMenu = [
  {
    name: "Cappuccino",
    price: "₹150",
    image:"/img/cappuccino.jpg",
  },
  {
    name: "Chocolate Cake",
    price: "₹220",
    image: "/img/triple-chocolate-cake-4.jpg",
  },
  {
    name: "Cold Brew",
    price: "₹180",
    image:"/img/cold-brew.webp",
  },
];

export default function Home() {
  return (
    <main>
      {/* ================= HERO SECTION ================= */}
      {/* <section
        className="h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085')",
        }}
      >
        <div className="bg-black/60 p-10 rounded text-center text-white animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Urban Brew Café
          </h1>
          <p className="mb-6 text-lg">
            Handcrafted coffee & cozy moments ☕
          </p>
          <Link
            href="/menu"
            className="inline-block bg-amber-600 px-8 py-3 rounded text-white font-semibold hover:bg-amber-700 transition transform hover:scale-105"
          >
            Explore Menu
          </Link>
        </div>
      </section> */}
      <Banner />

      {/* ================= INTRO SECTION ================= */}
      <section className="py-20 px-6 bg-amber-600 my-20 mx-auto text-center">
        <h2
  className="text-3xl font-bold mb-4 animate-slideUp duration-300"
>
  Welcome to Urban Brew
</h2>

        <p className=" max-w-3xl mx-auto">
          We serve freshly brewed coffee made from premium beans,
          paired with delicious desserts in a warm, inviting space.
        </p>
      </section>

      {/* ================= FEATURED MENU ================= */}
      <section className=" pb-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Menu
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {featuredMenu.map((item, i) => (
            <div
              key={i}
              className="rounded shadow-2xl overflow-hidden  hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-52 w-full object-cover hover:scale-105 transition duration-500"
              />

              <div className="p-6 text-center">
                <h3 className="font-bold text-xl mb-2">
                  {item.name}
                </h3>
                <p className="text-amber-600 font-semibold">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-20 text-center bg-gradient-to-r from-amber-600 to-amber-800 text-white">
        <h2 className="text-3xl font-bold mb-4 animate-pulse">
          Ready to order your favorite coffee?
        </h2>
        <p className="mb-6 opacity-90">
          Place your order now and enjoy the Urban Brew experience.
        </p>
        <Link
          href="/contact"
          className="bg-black px-10 py-3 rounded hover:bg-gray-800 transition transform hover:scale-105"
        >
          Order Now
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      
    </main>
  );
}
