import React from "react";

const page = ({ params: { search } }: { params: { search: string } }) => {
  return <div>page {search}</div>;
};

export default page;
