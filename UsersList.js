import { useEffect, useState } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://6978acbacd4fe130e3d9c9f6.mockapi.io/api/v1/user")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Users List (API Data)</h2>

      {users.map(user => (
        <div key={user.id} style={{
          background: "#f1f1f1",
          padding: "12px",
          marginBottom: "10px",
          borderRadius: "8px"
        }}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
