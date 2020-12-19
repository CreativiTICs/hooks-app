import React, { memo } from "react";

//La función memo evita que se vuelvan a hacer peticiones React.memo
export const Small = memo(({ value }) => {
  console.log("Me volví a llamar :(");
  return <small>{value}</small>;
});
