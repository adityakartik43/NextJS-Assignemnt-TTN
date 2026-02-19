"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuotes } from "../../store/quoteSlice";

export default function QuotesPage() {
  const dispatch = useDispatch();
  const { quotes, loading } = useSelector(state => state.quotes);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, []);

  if (loading) return <h2>Loading Quotes......</h2>;

  return quotes.map(q => (
    <div className="border-1 border-white p-1 m-2 text-yellow-200 flex justify-between" key={q.id}>
      {q.quote} <span className="bg-blue-900 p-1 text-white font-bold rounded-l-lg">{q.author}</span>
    </div>
  ));
}
