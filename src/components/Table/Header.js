import React from "react";
import DownCaret from "../../svgs/DownCaret";
import UpCaret from "../../svgs/UpCaret";
import Cell from "./Cell";

function Header({ columns, noOfColumns, columnsPercents }) {
  const totalColumnsPer = columnsPercents.reduce(
    (total, currentValue) => total + Number(currentValue),
    0
  );
  return (
    <>
      {columns.map((column, index) => (
        <Cell percentage={columnsPercents[index]/110*100} key={index} fontSize={11}>
          <div className="w-full flex items-center">
            {index === 0 ? (
              <div className="mr-2">
                <input type="checkbox" onChange={() => console.log("howfar")} />
              </div>
            ) : (
              ""
            )}
            <div className="">{column}</div>
            <div className="gap-0.5 flex items-center flex-col ml-2">
              <UpCaret />
              <DownCaret />
            </div>
          </div>
        </Cell>
      ))}
      <Cell percentage={10}></Cell>
    </>
  );
}

export default Header;
