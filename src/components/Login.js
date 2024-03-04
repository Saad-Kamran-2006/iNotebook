import React, { useState } from "react";
import { useHistory } from "react-router-use-history";

const Login = (props) => {
  try {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    // eslint-disable-next-line
    let history = useHistory();

    const handleSubmit = async (evt) => {
      evt.preventDefault();
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlMjA5YjE0M2EzYTY5MTM1NDY0M2U1In0sImlhdCI6MTcwOTMxMjUxMX0._eghy4xGlY7-CXXcR0q3Og5IBIZ3SdALH_iCNTOra9E",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      // console.log(json);
      if (json.success) {
        //? Save the auth token and redirect
        localStorage.setItem("token", json.authToken);
        props.showAlert("Logged In Successfully", "success");
        history.push("/");
      } else {
        props.showAlert("Invalid Credentials", "danger");
      }
    };
    const onChange = (evt) => {
      setCredentials({
        ...credentials,
        [evt.target.name]: evt.target.value,
      });
    };
    return (
      <div className="mt-5">
        <h2>Login to countinue to iNotebook</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  } catch (err) {
    console.log("Login-Err:", err);
  }
};

export default Login;
