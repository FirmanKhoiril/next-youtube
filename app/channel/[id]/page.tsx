import React from "react";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return <div>page {id}</div>;
};

export default page;
