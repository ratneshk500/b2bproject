"use client"; // only for App Router

import { useState , useEffect } from "react";
//import { useState } from "react";






export default function NewOpportunityForm() {
	
	//const [products, setProducts] = useState([]);
	
	const user = JSON.parse(localStorage.getItem('user') || '{}');
  //console.log("Form user:",user._id);
  const [formData, setFormData] = useState({
    title: "",
	description:"",
	budgetrange:0,
	risklevel:"",
	locationtype:"",
	address:"",
	deadlinetoapply:"",
	startdate:"",
	duration:"",
	eligibilityfilters:"",
  category_id:0,
	user_id:user._id,
  });
	const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
 const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };	
	
const [categories, setCategories] = useState([]);

//const [category, setCategory] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState("");
	 useEffect(() => {
    async function fetchcategorys() {
      const res = await fetch("/api/common/category/getCategory"); // your Next.js API route
      const data = await res.json();
      setCategories(data.data);
    }
    fetchcategorys();
  }, []);

	
	
	
  //const [title, setTitle] = useState("");
  //const [categories, setCategories] = useState<string[]>([]);
  ///const [description, setDescription] = useState("");
  //const [budgetRange, setBudgetRange] = useState("LT_10K");
  //const [locationType, setLocationType] = useState("Remote");
  ///const [deadlineToApply, setDeadlineToApply] = useState("");

  //const handleCategoryChange = (cat: string) => {
   // setCategories(prev =>
    //  prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
   // );
  //};

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
	
	//formData.push("product_id",selectedProduct );
	
	//console.log("Form Data:", formData);
    try {
      const res = await fetch("/api/opportunity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage("✅ Order created successfully!");
        
        /*setFormData({title: "";
	description:"";
	budgetrange:1,
	risklevel:"",
	locationtype:"",
	address:"",
	deadlinetoapply:"",
	startdate:"",
	duration:"",
		eligibilityfilters:""});
    */
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
    <div className="w-full bg-white rounded-lg shadow text-black md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
     <h1 className="text-2xl font-bold mb-6">➕ New Opportunity</h1>
		
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block mb-4 font-medium">Title</label>
         
		  
		  
		  <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Customer Name"
          className="w-full border p-2 rounded"
          required
        />
		  
		  
        </div>

        {/* Categories */}
        <div>
          <label className="block mb-4 font-medium">Categories</label>
          
		  
		  <select
        name="category_id"
        onChange={handleChange}
		value={formData.category_id}
        className="border p-2 rounded"
        required
      >
        <option value="">-- Choose a Category--</option>
        {categories.map((p: any) => (
          <option key={p._id} value={p._id}>
            {p.categoryName}
          </option>
        ))}
      </select>
		  
		  
		  
            
          </div>
       

        {/* Description */}
        <div>
          <label className="block mb-4 font-medium">Description</label>
          <textarea
		  name="description"
			onChange={handleChange}
			value={formData.description}
            
            className="w-full border rounded p-2"
            maxLength={2000}
          />
        </div>

        {/* Budget Range */}
        <div>
          <label className="block mb-4 font-medium">Budget Range</label>
          
		  
		  <input
          type="text"
          name="budgetrange"
          value={formData.budgetrange}
          onChange={handleChange}
          placeholder="Budget Range"
          className="w-full border p-2 rounded"
          required
        />
		  
		  
		  
        </div>

        {/* Location */}
        <div>
          <label className="block mb-4 font-medium">Location Type</label>
          <select
            
			name="locationtype"
        onChange={handleChange}
		value={formData.locationtype}
            className="w-full border rounded p-2"
          >
            <option value="Onsite">Onsite</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>


		

		{/* Description */}
        <div>
          <label className="block mb-4 font-medium">Description</label>
          <textarea
		  name="address"
			onChange={handleChange}
			value={formData.address}
            
            className="w-full border rounded p-2"
            maxLength={2000}
          />
        </div>





        {/* Deadline */}
        <div>
          <label className="block mb-4 font-medium">Deadline to Apply</label>
          <input
            name="deadlinetoapply"
			type="date"
            onChange={handleChange}
			value={formData.deadlinetoapply}
            className="w-full border rounded p-2"
            required
          />
        </div>

		
		{/* startdate */}
        <div>
          <label className="block mb-4 font-medium">Start Date</label>
          <input
            name="startdate"
			type="date"
            onChange={handleChange}
			value={formData.startdate}
            className="w-full border rounded p-2"
            required
          />
        </div>


		
		{/* uration */}
        <div>
          <label className="block mb-4 font-medium">Duration</label>
          <select
            
			name="duration"
        onChange={handleChange}
		value={formData.duration}
            className="w-full border rounded p-2"
          >
            <option value="weeks">weeks</option>
            <option value="Months">Months</option>
            
          </select>
        </div>


		
			{/* Eligibility filters */}
        <div>
          <label className="block mb-4 font-medium">Eligibility Filters</label>
          <select
            
			name="eligibilityfilters"
        onChange={handleChange}
		value={formData.eligibilityfilters}
            className="w-full border rounded p-2"
          >
            <option value="Certifications">Certifications</option>
            <option value="Diversity attributes">Diversity attributes</option>
			<option value="Geography">Geography</option>
            
          </select>
        </div>


        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Save Opportunity
        </button>
      </form>
    </div>
	</div>
  );
}
