import Link from "next/link";
import data from "../data/data.json";

export default function Products() {
  return (
    <>
      <h1>Products List</h1>

      {data.products.map((product) => (
        <div key={product.id}>
          <h3>{product.id+" -> "}{product.name}</h3>
          <p>₹ {product.price}</p>
          <Link href={`/products/${product.id}`}>View Details</Link>
          <hr />
        </div>
      ))}
    </>
  );
}
