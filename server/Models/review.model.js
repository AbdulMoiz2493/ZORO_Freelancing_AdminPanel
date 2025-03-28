import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
      jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
      clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      freelancerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      rating: { type: Number, min: 1, max: 5, required: true },
      feedback: { type: String, trim: true },
    },
    
    { timestamps: true }
);
  
export const Review = mongoose.model("Review", reviewSchema);
  