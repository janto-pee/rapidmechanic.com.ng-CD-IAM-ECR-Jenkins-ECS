import { FilterQuery, QueryOptions } from "mongoose";
import VehicleModel, {
  VehicleDocument,
  VehicleInput,
} from "../model/vehicle.model";

export async function createVehicle(input: VehicleInput) {
  const response = await VehicleModel.create(input);
  return response;
}

export async function findVehicles(id: FilterQuery<VehicleDocument> | string) {
  const response = await VehicleModel.find({ _id: id });
  return response;
}
export async function findVehicle(id: FilterQuery<VehicleDocument> | string) {
  const response = await VehicleModel.findOne({ _id: id });
  return response;
}
export async function updateVehicles(
  id: FilterQuery<VehicleDocument>,
  update: Partial<VehicleInput>,
  option: QueryOptions = { new: true }
) {
  const response = await VehicleModel.findByIdAndUpdate(id, update, option);
  return response;
}
export async function deleteVehicle(id:FilterQuery<VehicleDocument>){
    const response = await VehicleModel.findOneAndDelete({_id: id})
    return response
}
