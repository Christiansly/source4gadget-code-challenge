import React from "react";
import Header from "./Header";
import UserItem from "./UserItem";
import "./UserTable.css";
const Users = [
  {
    id: "44444kfkkfkfkff",
    title: "Mr",
    name: "Kehinde Adebisi",
    phone: "09090909090",
  },
  {
    id: "44444kfkkfkfkff",
    title: "Mr",
    name: "Kehinde Adebisi",
    phone: "09090909090",
  },
  {
    id: "44444kfkkfkfkff",
    title: "Mr",
    name: "Kehinde Adebisi",
    phone: "09090909090",
  },
  {
    id: "44444kfkkfkfkff",
    title: "Mr",
    name: "Kehinde Adebisi",
    phone: "09090909090",
  },
  {
    id: "44444kfkkfkfkff",
    title: "Mr",
    name: "Kehinde Adebisi",
    phone: "09090909090",
  },
  {
    id: "44444kfkkfkfkff",
    title: "Mr",
    name: "Kehinde Adebisi",
    phone: "09090909090",
  },
  {
    id: "44444kfkkfkfkff",
    title: "Mr",
    name: "Kehinde Adebisi",
    phone: "09090909090",
  },
  {
    id: "44444kfkkfkfkff",
    title: "Mr",
    name: "Kehinde Adebisi",
    phone: "09090909090",
  },
  {
    id: "44444kfkkfkfkff",
    title: "Mr",
    name: "Kehinde Adebisi",
    phone: "09090909090",
  },
  {
    id: "44444kfkkfkfkff",
    title: "Mr",
    name: "Kehinde Adebisi",
    phone: "09090909090",
  },
  {
    id: "44444kfkkfkfkff",
    title: "Mr",
    name: "Kehinde Adebisi",
    phone: "09090909090",
  },
  {
    id: "44444kfkkfkfkff",
    title: "Mr",
    name: "Kehinde Adebisi",
    phone: "09090909090",
  },
  {
    id: "44444kfkkfkfkff",
    title: "Mr",
    name: "Kehinde Adebisi",
    phone: "09090909090",
  },
];

function UserTable() {
  return (
    <div className="w-full border h-full overflow-y-auto">
      <Header />
      <div className="w-full scrollbar scrollbar-primary">
        {Users.map((user) => (
          <UserItem
            id={user.id}
            name={user.name}
            phone={user.phone}
            title={user.title}
          />
        ))}
      </div>
    </div>
  );
}

export default UserTable;
