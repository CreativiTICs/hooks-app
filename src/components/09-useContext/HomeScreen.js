import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScreen = () => {
  //Traemos el useContext y el Componente UserContext que creamos
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};
