async function page({ params }) {
  const { id } = await params;

  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const todo = await data.json();

  return (
    <>
      <div key={todo.id} className="border-1 border-white p-2 m-2">
        <h1>{todo.title}</h1>
        <h3>{todo.userId}</h3>
        <h4>{todo.completed ? "Completed" : "Not Completed"}</h4>
      </div>
    </>
  );
}

export default page;
