import React from "react";
import styledComponents from "styled-components";

function Card({ label, number, main }) {
  const CardContainer = styledComponents.div`
    border: 1px solid ${main ? "#9991E5" : "#FFF"};
    box-shadow: ${
      main
        ? "0px 0px 13px 3px rgba(40, 40, 40, 0.17)"
        : "0px 0px 7px rgba(40, 40, 40, 0.17);"
    };
    border-radius: 4px;
    background-color: ${main? "#9991E5": "#FFF"};
    width: 173px;
`;

  return (
    <CardContainer className="pl-3 pr-4 flex flex-col gap-2 pt-4 pb-4 text-left" >
      <div className={"text-xs" + (main? " text-white" : " text-black")}>{label}</div>
      <div>
        <h1 className={"text-xl font-bold" + (main? " text-white": " text-black")}>{number}</h1>
      </div>
    </CardContainer>
  );
}

export default Card;
