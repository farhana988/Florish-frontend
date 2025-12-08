import { IPlant } from "./plant.interface";

export interface ICartItem {
  id: string;
  plantId: string;
  quantity: number;
  plant: IPlant;
}
