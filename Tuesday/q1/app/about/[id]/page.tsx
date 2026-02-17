
import { notFound } from "next/navigation";
async function getEmpData(id: string) {
  try {
    const res = await fetch(`http://localhost:3001/employees/${id}`);
    const data = await res.json();


    return data;
  } catch (err) {
    return notFound();
  }
}


export default async function EmpDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const res = await getEmpData(id);

  console.log(res);

  return (
    <>
      <h1>{res.name}</h1>
      <p>Role: {res.role}</p>
      <p>Experience: {res.experience}</p>
      <p>Bio: {res.bio}</p>
    </>
  );
}
