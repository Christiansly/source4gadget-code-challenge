import React from "react";
import DownCaret from "../../../svgs/DownCaret";
import UpCaret from "../../../svgs/UpCaret";
import Cell from "../Cell";

const Title = ({children}) => {
    return <div className="uppercase flex items-center">{children}</div>;
}

function Header() {
  return (
    <div className="w-full border flex justify-center pl-4">
      <Cell percentage="15" fontSize="11">
          
      <Title > <input type="checkbox" />  id</Title>
        <div className="gap-0.5 flex items-center flex-col ml-2">
          <UpCaret />
          <DownCaret />
        </div>
      </Cell>
      <Cell percentage="15" fontSize="11">
       <Title>title</Title> 
        <div className="gap-0.5 flex items-center flex-col ml-2">
          <UpCaret />
          <DownCaret />
        </div>
      </Cell>
      <Cell percentage="25" fontSize="11">
        <Title>name</Title>
        <div className="gap-0.5 flex items-center flex-col ml-2">
          <UpCaret />
          <DownCaret />
        </div>
      </Cell>
      <Cell percentage="15" fontSize="11">
        <Title>id</Title>
        <div className="gap-0.5 flex items-center flex-col ml-2">
          <UpCaret />
          <DownCaret />
        </div>
      </Cell>
      <Cell percentage="15" fontSize="11">
        <Title>phone</Title>
        <div className="gap-0.5 flex items-center flex-col ml-2">
          <UpCaret />
          <DownCaret />
        </div>
      </Cell>
      <Cell percentage="15"></Cell>
    </div>
  );
}

export default Header;
