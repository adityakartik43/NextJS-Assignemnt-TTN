import data from "../data/data.json";

export default function About() {
  return (
    <>
      <h1>{data.company.name}</h1>
      <p>{data.company.description}</p>
    </>
  );
}
