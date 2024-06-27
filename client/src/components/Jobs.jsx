import React from "react";

const Jobs = ({ result }) => {
  return (
    <div>
      <h3 className="font-semibold text-center text-xl px-4 pt-2">{result.length} Jobs</h3>
      <div>
      {result}
      </div>
    </div>
  );
};

export default Jobs;
