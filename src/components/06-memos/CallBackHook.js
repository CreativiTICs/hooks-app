import React, { useCallback, useEffect, useState } from "react";

import "../02-useEffect/effects.css";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };

  //El useCallback regresa una versión memorizada de la función para llamarla en otros lugares
  //En el componente donde se va a utilizar la fn se debe poner el React.memo
  const increment = useCallback(
    (num) => {
      // setCounter(counter + 1);
      setCounter((c) => c + num);
    },
    [setCounter]
  );
  //Se usa también con useEffect para que no se dispare cada vez que se renderice la fn
  useEffect(() => {
    ///
  }, [increment]);

  return (
    <div>
      <h1>useCallBackHook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};
