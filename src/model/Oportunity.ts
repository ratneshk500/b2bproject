import mongoose from "mongoose";

const OportunitySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  budgetrange: { type: Number, required: true },
  risklevel: { type: String, required: false },
  
  locationtype: {
        type: String,
        default: 'Onsite',
        enum: ['Onsite','Remote','Hybrid']
    },
  address: { type: String, required: true },
  deadlinetoapply: { type: Date, required: true },
  
  startdate: { type: Date, required: true },

  duration: { type: String, required: true },
  
  
  eligibilityfilters: { type: String, default: "Pending" },
  
  createdAt: { type: Date, default: Date.now },
  
  category_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
  
  user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
  
});

// Prevent model overwrite in dev
export default mongoose.models.Oportunity || mongoose.model("Oportunity", OportunitySchema);
