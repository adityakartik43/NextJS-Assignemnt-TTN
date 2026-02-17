async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  const firstTenPosts = posts.slice(0, 10);

  return (
    <div>
      <h1>Posts</h1>

      {firstTenPosts.map((post) => (
        <div 
          key={post.id} >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
