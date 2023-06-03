import mongoose from "mongoose";

export interface VehicleInput {
  photos?: any;
  brand: string;
  model: string;
  problem: string;
  chasis: string;
  company: string;
}

export interface VehicleDocument extends VehicleInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  enquiredVehicle: ["_id"];
}

const VehicleSchema = new mongoose.Schema(
  {
    photos: [{}],
    brand: { type: String, required: true, lowercase: true, trim: true },
    model: { type: String, required: true, lowercase: true },
    problem: { type: String, required: true },
    chasis: { type: String, default: "" },
    company: { type: String, default: "" },
    enquiredVehicle: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle" },
  },
  {
    timestamps: true,
  }
);

const VehicleModel = mongoose.model<VehicleDocument>("Vehicle", VehicleSchema);
export default VehicleModel;
