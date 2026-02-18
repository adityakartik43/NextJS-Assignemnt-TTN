import styles from "./users.module.css";

interface User {
  id: number;
  name: string;
  email: string;
}

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1 className="mb-6">Users (Server Fetch)</h1>

      {users.map(user => (
        <div
          key={user.id}
          className={`${styles.card} hover:scale-101 focus:ring-1 focus:ring-green-100`}
          tabIndex={0}
        >
          <p className={styles.name}>{user.name}</p>
          <p className={styles.email}>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
