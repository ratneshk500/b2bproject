import connectDB from "@/DB/connectDB";
import Order from "@/model/Order";

//import AuthCheck from "@/middleware/AuthCheck";



export default async function handler(req:any, res:any) {
  await connectDB();

  if (req.method === "POST") {
    try {
      const order = await Order.create(req.body);
      return res.status(201).json(order);
    } catch (err) {
      if (err instanceof Error) {
      return res.status(400).json({ error: err.message });
      }
    }
  }

  if (req.method === "GET") {
    const orders = await Order.find({});
    return res.status(200).json(orders);
  }

  res.setHeader("Allow", ["POST", "GET"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
