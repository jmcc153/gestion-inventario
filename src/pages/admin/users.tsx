import { usersColumns } from "@/components/dataTable/columns";
import { DataTable } from "@/components/dataTable/dataTable";
import type { Users as UsersType } from "@/types/users";

export const Users = () => {
  const data: UsersType[] = [
    {
      id: "1",
      email: "user1@example.com",
      name: "User One",
      role: "admin",
    },
    {
      id: "2",
      email: "user2@example.com",
      name: "User Two",
      role: "user",
    },
    {
      id: "3",
      email: "user3@example.com",
      name: "User Three",
      role: "user",
    },
  ];
  return (
    <div className="container mx-auto">
      <DataTable columns={usersColumns} data={data} />
    </div>
  );
};
