interface Product {
  id: number;
  title: string;
  body: string;
}

export const revalidate = 10;

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return res.json();
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const products = await res.json();

  return products.slice(0, 5).map(product => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({
  params,
}: {
  params: id;
}) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>
      <p>{product.body}</p>

    </div>
  );
}
