import MetaSEO from "@/components/MetaSEO";

export default function About() {
  return (
    <>
    <MetaSEO title={"About Us | Urban Brew Café – Our Story & Values"}
                     description={"Learn about Urban Brew Café, our story, mission, and passion for serving quality coffee and fresh snacks in a warm, welcoming atmosphere."}
                     keywords={"About Urban Brew Café, cafe story, coffee shop mission, best cafe, artisan coffee"}
            />
    <section className="px-5 md:px-10 py-14">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Our Story */}
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Our Story
          </h1>
          <p className=" leading-relaxed">
            Urban Brew Café was founded with a passion for handcrafted coffee
            and a vision to create a welcoming space where people can relax,
            connect, and enjoy every sip. What began as a small idea has grown
            into a community-driven café built on quality and warmth.
          </p>
        </div>

        {/* Mission & Image */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Our Mission
            </h2>
            <p className=" leading-relaxed">
              Our mission is to serve ethically sourced, freshly brewed coffee
              while fostering meaningful connections. We believe coffee is more
              than a drink — it’s an experience that brings people together.
            </p>
          </div>

          <div className="h-64 md:h-80 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage:
                "url('/img/banner-2.webp')",
            }}
          />
        </div>

        {/* Values */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-10">
            Our Values
          </h2>

          <div className=" grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Quality", desc: "Premium beans & handcrafted brewing" },
              { title: "Community", desc: "A place where everyone feels welcome" },
              { title: "Sustainability", desc: "Ethically sourced ingredients" },
              { title: "Passion", desc: "Love for coffee in every cup" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg"
              >
                <h3 className="font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm ">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="border rounded-xl p-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Why Choose Urban Brew Café?
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Expert baristas",
              "Freshly roasted beans",
              "Cozy & calm ambiance",
              "Affordable pricing",
              "Free Wi-Fi & work-friendly",
              "Customer-first service",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm"
              >
                <span className="text-amber-600 text-xl">☕</span>
                <p className="text-gray-700 dark:text-gray-300">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
