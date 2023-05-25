import React from "react";
import { LineWave } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="min-h-[90vh] flex justify-center items-center">
      <LineWave height="100" width="100" color="#f87171" ariaLabel="line-wave" />
    </div>
  );
};

export default Loading;
