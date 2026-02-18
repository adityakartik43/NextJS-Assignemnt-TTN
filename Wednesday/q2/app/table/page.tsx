"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

interface User {
  id: number;
  name: string;
  email: string;
}

const Table = styled.table`
  width: 100%;
  margin-top: 20px;

  th {
    background: #1e293b;
    padding: 12px;
    text-align: left;
  }

  td {
    padding: 12px;
    border-bottom: 1px solid #334155;
  }

  tr:hover {
    background: #0f172a;
  }
`;

export default function TablePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users Table (Client Fetch)</h1>

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
