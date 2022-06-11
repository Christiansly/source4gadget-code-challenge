import React from "react";
import styledComponents from "styled-components";

function Cell({ percentage, children, header, fontSize, fontColor }) {
  const CellContainer = styledComponents.div`
        width: ${percentage}%;
        font-size: ${fontSize}px;
        display: flex;
        align-items: center;
        color: ${fontColor}
    `;
  return <CellContainer>{children}</CellContainer>;
}

export default Cell;
