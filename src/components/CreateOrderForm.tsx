"use client"; // only for App Router

import { useState , useEffect } from "react";


export default function CreateOrderPage() {
	
	
	const [products, setProducts] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState("");
	 useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/common/product/getProduct"); // your Next.js API route
      const data = await res.json();
      setProducts(data.data);
    }
    fetchProducts();
  }, []);
  
   //const handleSubmit = (e) => {
    //e.preventDefault();
    //alert(`You selected product ID: ${selectedProduct}`);
  //};
  
  
  
	
	//console.log(products);
	const user = JSON.parse(localStorage.getItem('user') || '{}');
  //console.log("Form user:",user._id);
  const [formData, setFormData] = useState({
    customerName: "",
    quantity: 1,
    address: "",
    product_id:'',
	user_id:user._id,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

	

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
	
	//formData.push("product_id",selectedProduct );
	
	//console.log("Form Data:", formData);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage("✅ Order created successfully!");
        //setFormData({ customerName: "", product: "", quantity: 1, address: "" });
      } else {
        setMessage("❌ Failed to create order.");
      }
    } catch (err) {
       if (err instanceof Error) {
      setMessage("⚠️ Error: " + err.message);
       }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Create New Order</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          placeholder="Customer Name"
          className="w-full border p-2 rounded"
          required
        />
        
		 <select
        name="product_id"
        onChange={handleChange}
		value={formData.product_id}
        className="border p-2 rounded"
        required
      >
        <option value="">-- Choose a product --</option>
        {products.map((p: any) => (
          <option key={p._id} value={p._id}>
            {p.productName} - ₹{p.productPrice}
          </option>
        ))}
      </select>
		
		
		
		
		<input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          min="1"
          placeholder="Quantity"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Shipping Address"
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Submitting..." : "Submit Order"}
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
