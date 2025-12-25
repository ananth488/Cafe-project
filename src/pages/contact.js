import MetaSEO from "@/components/MetaSEO";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    nameError:"",
    email: "",
    emailError:"",
    phone: "",
    phoneError:"",
    message: "",
    messageError:""
  });
  const [btnCheck,setBtnCheck] = useState(false)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const router = useRouter()

  useEffect(()=>{
   if(btnCheck) validate()
  },[form?.name,form?.email,form?.phone,form?.message])

  const validate = () => {
   let users = {
    name:false,
    email:false,
    phone:false,
    message:false
   }

   if(form?.name == ""){
    users.name = false
    setForm((pre)=>({...pre,nameError:"Name is required."}))
   }else{
    users.name = true
    setForm((pre)=>({...pre,nameError:""}))
   }


   if(form?.email == ""){
    users.email = false
    setForm((pre)=>({...pre,emailError:"Email is required."}))
   }else if(!emailRegex.test(form?.email)){
    setForm((pre)=>({...pre,emailError:"Invalid Email."}))
   }else{
    users.email = true
    setForm((pre)=>({...pre,emailError:""}))
   }

   if(form?.phone == ""){
    users.phone = false
    setForm((pre)=>({...pre,phoneError:"Phone No is required."}))
   }else if(form?.phone?.length < 10){
    users.phone = false
    setForm((pre)=>({...pre,phoneError:"Phone number must be 10 digits."}))
   }else{
    users.phone = true
    setForm((pre)=>({...pre,phoneError:""}))
   }


  if(form?.message == ""){
    users.message = false
    setForm((pre)=>({...pre,messageError:"Message/Order is required"}))
   }else{
    users.message = true
    setForm((pre)=>({...pre,messageError:""}))
   }

   console.log(users)
   console.log(Object.values(users)?.every(res => res == true))
   return Object.values(users)?.every(res => res == true)

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnCheck(true)   
    if(validate()){
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    data.push(form);
    localStorage.setItem("orders", JSON.stringify(data));
    setForm({ name: "", email: "", phone: "", message: "",nameError:"", emailError:"", phoneError:"", messageError:"" });
    setBtnCheck(false)
    router.push("/admin")
    }
    
  };

  return (
    <>
    <MetaSEO title={"Contact Us | Urban Brew Café – Get in Touch"}
                         description={"Contact Urban Brew Café for orders, inquiries, or feedback. We’re here to help you enjoy great coffee and snacks."}
                         keywords={"Contact Urban Brew Café, cafe contact, coffee shop contact, order coffee, cafe enquiry"}
                />
    <section className="px-5">
      <div className="max-w-7xl mx-auto space-y-20 p-5">

  <div className="grid md:grid-cols-2 gap-10 items-center ">

    <form
      onSubmit={handleSubmit}
      className=" p-10 flex flex-col gap-8"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
      Contact & Order
      </h1>
      <div className="relative">
      <input placeholder="Name" className="p-2 w-full outline-none border-b"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      
      {form.nameError && (
        <span className="absolute left-0 top-full mt-1 text-xs text-red-500">
          {form.nameError}
        </span>
      )}
      </div>

      <div className="relative">
      <input placeholder="Email" className=" p-2 w-full outline-none border-b"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      {form.emailError && (
        <span className="absolute left-0 top-full mt-1 text-xs text-red-500">
          {form.emailError}
        </span>
      )}
      </div>

      <div className="relative">
      <input placeholder="Phone" className=" p-2 w-full outline-none border-b"
        value={form.phone}
        maxLength={10}
        onChange={(e) => {
          const value = e.target.value;
          if (/^\d*$/.test(value)) {
            setForm({ ...form, phone: value });
          }
        }}
      />
      {form.phoneError && (
        <span className="absolute left-0 top-full mt-1 text-xs text-red-500">
          {form.phoneError}
        </span>
      )}
      </div>

      <div className="relative">
      <textarea placeholder="Order / Message" className="pl-2 w-full outline-none border-b"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      {form.messageError && (
        <span className="absolute left-0 top-full mt-1 text-xs text-red-500">
          {form.messageError}
        </span>
      )}
      </div>

      <button className="bg-black text-white p-2 rounded-lg cursor-pointer">
        Submit
      </button>
    </form>

 <div
  className="p-10 w-full h-full mx-auto bg-cover bg-center rounded-lg"
  style={{
    backgroundImage: "url('/img/banner-2.webp')",
  }}
/>
</div>  
</div>
</section> 
</>   
  );
}
