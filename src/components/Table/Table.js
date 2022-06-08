import React from "react";
import Header from "./Header";
import Rows from "./Rows";

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

function Table() {
  return (
    <div className="w-full">
      <div className="w-full flex text-left uppercase">
        <Header
          columns={["id", "title", "name", "id", "phone"]}
          columnsPercents={["10", "10", "40", "20", "20"]}
        />
      </div>
      <div>
        <Rows data={Users} columnsPercent={["10", "10", "40", "20", "20"]} columns={["id", "title", "name", "id", "phone"]} />
      </div>
    </div>
  );
}

export default Table;
