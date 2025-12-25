import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isSelected, setIsSelected]=useState("/")
  const router =useRouter()
  const menuList=[
    {title:"Home", path:"/"},
      {title:"Menu", path:"/menu"},
         {title:"About", path:"/about"},
            {title:"Contact", path:"/contact"},
               {title:"Admin", path:"/admin"}
  ]

  return (
<nav className="shadow-md backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-5 py-2 flex items-center justify-between">
        
        {/* Logo */}
       <div className="flex items-center gap-2">
<Link href={"/"}>        
<Image
  src="/img/logo.webp"
  alt="Urban Brew Café Logo"
  width={80}
  height={48}
  className="h-10 sm:h-11 md:h-12 lg:h-14
    max-w-35 sm:max-w-40 md:max-w-45
    w-auto
    object-contain"
  priority
/>
</Link>
</div>


        {/* Right side controls (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {menuList.map((data,index)=>(
<Link key={index} href={data.path} className={`hover:text-amber-600 ${data.path===router.pathname?"text-amber-600":""}`}>{data.title}</Link>
          ))}
          
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            className="text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-5 pb-5 space-y-3">
          <Link href="/" onClick={() => setOpen(false)} className="block">Home</Link>
          <Link href="/menu" onClick={() => setOpen(false)} className="block">Menu</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block">Contact</Link>
          <Link href="/admin" onClick={() => setOpen(false)} className="block">Admin</Link>
        </div>
      )}
    </nav>
  );
}
