import React from "react";
import styledComponents from "styled-components";

function Cell({ percentage, children, header, fontSize }) {
  const CellContainer = styledComponents.div`
        width: ${percentage}%;
        font-size: ${fontSize}px;
        display: flex;
        align-items: center;
    `;
  return <CellContainer>{children}</CellContainer>;
}

export default Cell;
