"use client";

import { useContext, useEffect, useState } from "react";
import LoaderContext from "@/context/context";

export default function Page() {
  const { loading, setLoading } = useContext(LoaderContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const res = await fetch("https://dummyjson.com/products");
      const json = await res.json();

      setData(json.products);
      setLoading(false);
    };

    fetchData();
  }, []);

  console.log(data)

  return (
    <>
      {loading && <h2>Global Loader component..........</h2>}
      {data.map(p => <div className="border-1 border-white p-1 m-2" key={p.id}>{p.title}</div>)}
    </>
  );
}
