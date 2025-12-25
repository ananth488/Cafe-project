import { FaFacebookSquare, FaInstagram, FaTwitter,FaYoutube   } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-gray-900  text-white py-6 text-center mt-20">
      <div className=" flex justify-between items-center max-w-7xl mx-auto">
         <p className="text-sm opacity-60 mt-6">
          © 2025 Urban Brew Café. All rights reserved.
        </p>
      {/* <div>
        <p className="font-semibold text-lg">Urban Brew Café</p>
        <p className="opacity-80">📍 Chennai, Tamil Nadu</p>
</div> */}
        <div className="flex justify-center gap-6 ">
          <a href="#" className="shadow-2xl bg-black text-white transition"><FaInstagram size={20}/></a>
          <a href="#" className="text-white transition"><FaFacebookSquare size={20}/></a>
          <a href="#" className=" text-white transition"><FaTwitter size={20}  /></a>
          <a href="#" className=" text-white transition"><FaYoutube size={20} /></a>
        </div>

       
        </div>
      </footer>
  );
}
