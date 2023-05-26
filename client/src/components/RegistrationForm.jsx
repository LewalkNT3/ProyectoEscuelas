import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isStaff, setIsStaff] = useState(false);
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAdminChange = (event) => {
    setIsStaff(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      username: username,
      password: password,
      is_staff: isStaff,
    };

    axios
      .post("http://localhost:8000/users/api/register/", userData)
      .then((response) => {
        console.log(response.data);
        toast.success("Registration successful!");
        navigate("/administrador-alumnos");
      })
      .catch((error) => {
        setError(error.response.data.detail);
      });
  };

  return (
    <div>
      <h2>Registration Form</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={isStaff}
              onChange={handleAdminChange}
            />
            Admin User
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
