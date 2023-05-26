// import React, { useState } from "react";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const response = await fetch("http://localhost:8000/users/api/login/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: username,
//         password: password,
//       }),
//     });
//   };

//   return (
//     <div>
//       <h2>Iniciar sesión</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Nombre de usuario"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="Contraseña"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <button type="submit">Iniciar sesión</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
