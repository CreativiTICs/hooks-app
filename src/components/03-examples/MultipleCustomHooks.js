import React from "react";

import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0]; //Condición lógica si hay data entonces toma la data[0]

  // console.log(author, quote);

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote">
          <p className="mb-0">{quote}</p>
          <br />
          <footer className="blockquote-footer"> {author} </footer>
        </blockquote>
      )}
      <button onClick={increment} className="btn btn-dark">
        Siguiente Frase
      </button>
    </div>
  );
};
