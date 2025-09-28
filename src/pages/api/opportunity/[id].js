//connection with mangodb localhost  and create user table and its api in next ja
//import dbConnect from "@/lib/mongodb";
//import User from "@/lib/models/User";
import connectDB from "@/DB/connectDB";
import Opportunity from "@/model/Oportunity";


export default async function handler(req, res) {
  
  await connectDB();
  const { id } = req.query;
  
 

  if (req.method === "GET") {
    const Opportunity1 = await Opportunity.findById(id);
    return res.status(200).json(Opportunity1);
  }

  if (req.method === "PUT") {
    try {
      const Opportunity = await Opportunity.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).json(Opportunity);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  if (req.method === "DELETE") {
    try {
      await Opportunity.findByIdAndDelete(id);
      return res.status(200).json({ message: "User deleted" });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
