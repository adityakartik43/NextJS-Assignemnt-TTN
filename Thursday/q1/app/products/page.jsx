"use client"; 

import { useEffect, useReducer } from "react";

const initialState = {
  products: [],
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };

    case "GET_PRODUCTS":
      return { ...state, loading: false, products: action.payload };

    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, action.payload] };

    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(p => p.id !== action.payload),
      };

    default:
      return state;
  }
};

export default function ProductsPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async () => {
    dispatch({ type: "SET_LOADING" });

    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    dispatch({ type: "GET_PRODUCTS", payload: data.products });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (state.loading) return <h2>Loading......</h2>;

  return (
    <>
      <button onClick={() =>
        dispatch({
          type: "ADD_PRODUCT",
          payload: { id: Date.now(), title: "New Product" }
        })
      }>
        Add
      </button>

      {state.products.map(p => (
        <div className="border-1 border-white p-1.5 m-2 flex justify-between" key={p.id}>
          {p.title}
          <button className="bg-red-800 p-2 rounded-xl mx-2 hover:bg-red-950 cursor-pointer hover:shadow-2xl shadow-amber-50" onClick={() =>
            dispatch({ type: "DELETE_PRODUCT", payload: p.id })
          }>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
