import { Column } from "@/types/management-table";
import { IPlant } from "@/types/plant.interface";
import Image from "next/image";

export const plantsColumns: Column<IPlant>[] = [
  // Image
  {
    header: "Image",
    accessor: (plant) => (
      <Image
        src={plant.image}
        alt={plant.name}
        width={50}
        height={50}
        className="rounded-md object-cover"
      />
    ),
  },

  // 🏷 Name
  {
    header: "Name",
    accessor: (plant) => plant.name,
  },

  //  Category
  {
    header: "Category",
    accessor: (plant) => plant.category,
  },

  //  Price
  {
    header: "Price",
    accessor: (plant) => `$${plant.price}`,
  },

  //  Rating
  {
    header: "Rating",
    accessor: (plant) => plant.rating ?? "N/A",
  },

  //  Quantity
  {
    header: "Quantity",
    accessor: (plant) => plant.quantity,
  },

  //  Badge
  {
    header: "Badge",
    accessor: (plant) =>
      plant.badge ? (
        <span className="px-2 py-1 text-xs bg-green-200 text-green-800 rounded">
          {plant.badge}
        </span>
      ) : (
        "—"
      ),
  },
];
