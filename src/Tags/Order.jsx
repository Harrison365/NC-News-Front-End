import React from "react";
import { Select } from "react-functional-select";

export default function Order({ order, setOrder }) {
  return (
    <div>
      <select
        onChange={(e) => {
          console.log(e.target.value);
          setOrder(e.target.value);
        }}
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </div>
  );
}
