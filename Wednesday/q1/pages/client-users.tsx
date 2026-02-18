import React from "react";          
import { useEffect, useState } from "react";
import styled from "styled-components";


const Container = styled.div`
  padding: 40px;
  font-family: var(--font-primary);
`;

const Title = styled.h1`
  font-size: var(--font-large);
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
`;

const Th = styled.th`
  border: 1px solid #e5e7eb;
  padding: 12px;
  background: var(--color-primary);
  color: white;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #e5e7eb;
  padding: 12px;
`;

const Tr = styled.tr`
  transition: 0.2s ease;

  &:hover {
    background: #f3f4f6;
  }
`;

export default function ClientUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      setUsers(data);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  if (loading) return <h1>Loading.......</h1>;

  return (
    <Container>
      <Title>Client Side Fetching</Title>

      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <Tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.phone}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
