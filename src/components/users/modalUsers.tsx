import { CirclePlus } from "lucide-react";
import { Modal } from "../modal/modal";
import type { InputsModalType } from "@/types/users";

export const ModalUsers = () => {
  const inputs: InputsModalType[] = [
    {
      name: "name",
      label: "Nombre completo",
      type: "text",
      placeholder: "Nombre",
    },
    {
      name: "email",
      label: "Correo electrónico",
      type: "text",
      placeholder: "correo@ejemplo.com",
    },
    {
      name: "rol",
      label: "Role",
      type: "select",
      placeholder: "Select a verified rol to display",
      options: [
        { value: "admin", label: "Admin" },
        { value: "user", label: "User" },
      ],
    },
  ];
  return (
    <Modal
      icon={CirclePlus}
      headerTitle="Agregar Usuario"
      inputs={inputs}
    />
  );
};
