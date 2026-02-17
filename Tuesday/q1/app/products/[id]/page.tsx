import { notFound } from "next/navigation";

async function getData(id) {
  try {
    const res = await fetch(`http://localhost:3001/products/${id}`);

    const data = await res.json();

    return data;

  } catch (error) {
    return notFound();
  }
}

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const res = await getData(id);
  console.log(res);

  return (
    <>
      <h1>{res.name}</h1>
      <p>Price: ₹ {res.price}</p>
      <p>{res.description}</p>
    </>
  );
}
