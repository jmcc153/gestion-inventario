import { CirclePlus } from "lucide-react";
import { Modal } from "../modal/modal";
import type { InputsModalType } from "@/types/users";

export const ModalInventory = () => {
  const inputs: InputsModalType[] = [
    {
      name: "name",
      label: "Nombre",
      type: "text",
      placeholder: "Nombre",
    },
    {
      name: "category",
      label: "Categoría",
      type: "select",
      placeholder: "Seleccione una categoría",
      options: [
        { value: "category1", label: "Categoría 1" },
        { value: "category2", label: "Categoría 2" },
      ],
    },
    {
      name: "quantity",
      label: "Cantidad",
      type: "number",
      placeholder: "Cantidad",
    },
    {
      name: "price",
      label: "Precio",
      type: "number",
      placeholder: "Precio",
    },
  ];
  return (
    <Modal icon={CirclePlus} headerTitle="Agregar Producto" inputs={inputs} />
  );
};
