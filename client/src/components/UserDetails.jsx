import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/api/users/${id}/`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleApprove = () => {
    axios
      .post(`http://localhost:8000/users/api/users/${id}/approve/`)
      .then((response) => {
        setUser({ ...user, is_approved: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeny = () => {
    axios
      .post(`http://localhost:8000/users/api/users/${id}/deny/`)
      .then((response) => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Detail</h2>
      <p>Username: {user.username}</p>
      <p>Status: {user.is_approved ? "Approved" : "Pending"}</p>
      {!user.is_approved && (
        <div>
          <button onClick={handleApprove}>Approve</button>
          <button onClick={handleDeny}>Deny</button>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
