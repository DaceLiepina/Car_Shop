import { useEffect, useState, type JSX } from "react";
import type User from "./types/User";
import { Link } from "react-router-dom";

export default function UsePage(): JSX.Element {
  const [users, setUser] = useState<User[]>([]);
  async function loadUsers(): Promise<void> {
    const res = await fetch("https://fakestoreapi.com/users");
    const arr = await res.json();
    setUser(arr);
  }
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h2>User list</h2>
      <ul>
        {users.map((user) => (
          <li
            style={{ border: "solid green 1px", margin: "10px", listStyle: "none"}}
            key={user.id}
          >
            <div>Nick: {user.username}</div>
            <div>
              Name, Lastname: {user.name.firstname} {user.name.lastname}
            </div>
            <div>Phone Nr: {user.phone}</div>
            <div>Email: {user.email}</div>
            <div>Zip code: {user.address.zipcode}</div>
            <Link to={String(user.id)}>To user</Link>
          </li>
        ))}
        
      </ul>
    </div>
  );
}
