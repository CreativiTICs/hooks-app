import React, { useLayoutEffect, useRef, useState } from "react";

import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

import "./layout.css";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0]; //Condición lógica si hay data entonces toma la data[0]

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />
      <blockquote className="blockquote">
        <p className="mb-0" ref={pTag}>
          {quote}
        </p>
        <br />
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <button onClick={increment} className="btn btn-dark">
        Siguiente Frase
      </button>
    </div>
  );
};
