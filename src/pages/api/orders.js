import connectDB from "@/DB/connectDB";
import Order from "@/model/Order";

//import AuthCheck from "@/middleware/AuthCheck";


export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    try {
      const order = await Order.create(req.body);
      return res.status(201).json(order);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  if (req.method === "GET") {
    try {
      ///const orders = await Order.find({});
	  
	  
	  /*
	  const db = client.db("mydb");


	 const orders = await Order.aggregate([
   
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$user" }, // flatten user array

      // Join products
      {
        $lookup: {
          from: "products",
          localField: "product_id",
          foreignField: "_id",
          as: "productDetails",
        },
      },
    ]).toArray();
	 */

	 const orders = await Order.aggregate([
        {
          $lookup: {
            from: "users",              // collection to join
            localField: "user_id",       // field in orders
            foreignField: "_id",        // field in users
            as: "userDetails",          // alias for joined data
          },
        },
        {
          $unwind: "$userDetails", // flatten array
        },
		{
        $lookup: {
          from: "products",
          localField: "product_id",
          foreignField: "_id",
          as: "productDetails",
        },
      },
		
		
      ]);


	 
	  return res.status(200).json(orders);
    } catch (err) {
      return res.status(500).json({ error: "Failed to fetch orders" });
    }
  }

  res.setHeader("Allow", ["POST", "GET"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
