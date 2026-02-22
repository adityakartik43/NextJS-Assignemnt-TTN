async function page({ params }) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return (
    <>
      <div key={user.id} className="border-1 border-white p-2 m-2">
        <h1>{user.name}</h1>
        <h3>{user.username}</h3>
        <h4>{user.email}</h4>
      </div>
    </>
  );
}

export default page

