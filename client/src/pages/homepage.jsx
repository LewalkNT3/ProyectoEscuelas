import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Homepage() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/users/api/user-detail/",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        setUserDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="links-container">
      <h1>Homepage</h1>
      {userDetails && (
        <div>
          <h2>Detalles del usuario:</h2>
          <p>Nombre: {userDetails.username}</p>
          {/* Mostrar otros detalles del usuario según tu necesidad */}
          {userDetails.is_staff && (
            <div>
              <h3>Enlaces exclusivos de administrador:</h3>
              <ul>
                <li>
                  <Link to="/administrador-alumnos">Administrar alumnos</Link>
                </li>
                {/* Agrega otros enlaces exclusivos para administradores */}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
