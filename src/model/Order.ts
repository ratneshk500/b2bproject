import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  quantity: { type: Number, required: true },
  address: { type: String, required: true },
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now },
  user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

  product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
  
  
});

// Prevent model overwrite in dev
export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
