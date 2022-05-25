import React from "react";

function Tag({ title, number }) {
  return (
    <div className="w-60 justify-between pl-3 pr-3 flex items-center">
      <div>{title}</div>
      <div>{number}</div>
    </div>
  );
}

export default Tag;
