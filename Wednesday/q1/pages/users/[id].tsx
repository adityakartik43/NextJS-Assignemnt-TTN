export async function getServerSideProps(cxt) {
  const { id } = cxt.params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  const user = await res.json();

  if (!user.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user },
  };
}

export default function UserSSR({ user }) {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">SSR User Page</h1>

      <div className="
        bg-white 
        shadow-md 
        rounded-xl 
        p-6 
        transition 
        hover:shadow-xl 
        hover:scale-105
        focus-within:ring-2 
        focus-within:ring-blue-500
      ">
        <p className="text-lg font-semibold">{user.name}</p>
        <p className="text-gray-600">{user.email}</p>
      </div>
    </div>
  );
}

