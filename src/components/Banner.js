import Link from "next/link";
import { useEffect, useState } from "react";

export default function Banner() {
  const images = [
    "/img/banner.webp",
    "/img/banner-1.jpg",
    "/img/banner-2.webp",
    "/img/banner-3.webp",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
<section className="relative h-[80vh] overflow-hidden">
  {/* Background Slides */}
  {images.map((img, index) => (
    <div
      key={index}
      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
        index === current ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: `url('${img}')` }}
    />
  ))}

  {/* Centered Content Overlay */}
  <div className="absolute inset-0 z-10 flex items-center justify-center">
    <div className="bg-black/60 p-10 rounded text-center text-white animate-fadeIn max-w-xl mx-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 
               text-gray-900 dark:text-white">
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
  </div>
</section>

  );
}
