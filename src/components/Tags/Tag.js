import React from "react";
import styledComponents from "styled-components";

function Tag({ title, number, active = false }) {
  console.log(active);
  const TagContainer = styledComponents.div`
  background: ${active ? "" : "#F0F0F0"};
  box-shadow:"0px 2px 3px rgba(0, 0, 0, 0.09)";
  border-radius: 4px;
  border: 0.5px solid ${active ? "#9F96EF" : "F0F0F0"};
  margin-bottom: 11px;
  font-size: 11px;
  height: 26px;
  color: ${active ? "#9991E5" : "#505050"};
  `;
  return (
    <TagContainer className="w-60 justify-between pl-3 pr-3 flex items-center">
      <div>{title}</div>
      <div>{number}</div>
    </TagContainer>
  );
}

export default Tag;
