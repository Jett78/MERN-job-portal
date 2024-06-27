import React from "react";
const Radiofield = ({ handleChange, value, title, name,disabled }) => {
  return (
    <div className="flex items-center gap-2 text-l font-medium text-light">
      <input type="radio" name={name} value={value} onChange={handleChange} disabled={disabled} />
      <span>{title}</span>
    </div>
  );
};

export default Radiofield;
