import { useEffect, useState } from "react";

export default function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(data);
  }, []);

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
 <div className="flex flex-wrap -m-2">
  {orders.map((o, i) => (
    <div
      key={i}
      className="p-2 w-full sm:w-1/2 lg:w-1/4"
    >
      <div
        className="dark:border-amber-50 flex justify-between gap-12  shadow-[0_10px_30px_rgba(0,0,0,0.12)] px-4 py-8 rounded-xl"
      >
        <div className="">
        <p className="font-bold">Name</p>
        <p className="font-bold">Email</p>
        <p className="font-bold">Phone</p>
        <p className="text-sm line-clamp-2 font-bold">
          Message
        </p></div>
        <div className="mr-auto">
        <p>:{" "}{o.name}</p>
        <p>:{" "}{o.email}</p>
        <p>:{" "}{o.phone}</p>
        <p className="text-sm line-clamp-2">
          :{" "}{o.message}
        </p></div>
      </div>
    </div>
  ))}
</div>

</div>
  );
}
