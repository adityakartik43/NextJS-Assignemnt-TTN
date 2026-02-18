export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users.slice(0, 5).map(user => ({
    params: { id: user.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(cxt) {
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
    revalidate: 10, 
  };
}

export default function UserSSG({ user }) {
  return (
    <div>
      <h1>SSG User Page (ISR)</h1>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Company: {user.company?.name}</p>
    </div>
  );
}
