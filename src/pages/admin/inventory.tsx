import { inventoryColumns } from "@/components/dataTable/columns";
import { DataTable } from "@/components/dataTable/dataTable";
import { ModalInventory } from "@/components/inventory/modalInventory";
import type { InventoryType } from "@/types/inventory";

export const Inventory = () => {
  const inventoryData: InventoryType[] = [
    {
      id: "1",
      name: "Product 1",
      category: "Category 1",
      quantity: 10,
      price: 100,
    },
    {
      id: "2",
      name: "Product 2",
      category: "Category 2",
      quantity: 5,
      price: 200,
    },
  ];
  return (
    <div>
      <h1>Inventario</h1>
      <div className="flex justify-end py-2">
        <ModalInventory />
      </div>
      <DataTable columns={inventoryColumns} data={inventoryData} />
    </div>
  );
};
