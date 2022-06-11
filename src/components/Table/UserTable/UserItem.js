import React from "react";
import Cell from "../Cell";
import styledComponents from "styled-components";

function UserItem({ id, name, phone, title }) {
  return (
    <UserItemContainer className="w-full border flex justify-center p-5 bg-white">
      <Cell percentage="15" fontSize="11" fontColor="#A8A8A8">
        {" "}
        <input type="checkbox" className="m-2" /> {id}
      </Cell>
      <Cell percentage="15" fontSize="11" fontColor="#505050">
        {title}
      </Cell>
      <Cell
        percentage="30"
        fontSize="11"
        className="flex gap-3"
        fontColor="#9991E5"
      >
        <div className="rounded-full bg-gray-500 h-8 w-8 mr-3 text-white items-center justify-center text-xs flex">
          {name[0].toUpperCase()}
        </div>
        {name}
      </Cell>
      <Cell percentage="17.5" fontSize="11" fontColor="#505050">
        {id}
      </Cell>
      <Cell percentage="17.5" fontSize="11" fontColor="#505050">
        {phone}
      </Cell>
      <Cell percentage="5">
        <ActionContainer>
          <Dot />
          <Dot />
          <Dot />
        </ActionContainer>
      </Cell>
    </UserItemContainer>
  );
}

export default UserItem;

const UserItemContainer = styledComponents.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 10px;
  height: 57px;
`;

const ActionContainer = styledComponents.div`
  width: 100%;
  gap: 5px;
  display: flex;
  flex-direction: column;
`;

const Dot = styledComponents.div`
width: 4px;
height: 4px;
left: 594px;
top: 16px;

background-color: #352E4D;
`;
