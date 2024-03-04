import React, { useState } from "react";
import { useHistory } from "react-router-use-history";

const SignUp = (props) => {
  try {
    const [credentials, setCredentials] = useState({
      name: "",
      email: "",
      password: "",
      cPassword: "",
    });
    // eslint-disable-next-line
    let history = useHistory();

    const handleSubmit = async (evt) => {
      evt.preventDefault();
      const { name, email, password } = credentials;
      const response = await fetch(
        "http://localhost:5000/api/auth/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlMjA5YjE0M2EzYTY5MTM1NDY0M2U1In0sImlhdCI6MTcwOTMxMjUxMX0._eghy4xGlY7-CXXcR0q3Og5IBIZ3SdALH_iCNTOra9E",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );
      const json = await response.json();
      console.log(json);
      if (json.success) {
        //? Save the auth token and redirect
        localStorage.setItem("token", json.authToken);
        history.push("/");
        props.showAlert("Account Created Successfully", "success");
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
      <div className="container mt-5">
        <h2>Create an account to use iNotebook</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={onChange}
              aria-describedby="emailHelp"
              minLength={4}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={onChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
              style={{ position: "relative", bottom: "-10px" }}
            >
              Password
            </label>
            <div
              style={{
                fontSize: 11,
                position: "relative",
                top: "-1px",
                right: "-2px",
              }}
            >
              Required minimum 8 characters.
            </div>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={onChange}
              minLength={8}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cPassword"
              name="cPassword"
              onChange={onChange}
              minLength={8}
              required
            />
          </div>
          <button
            disabled={
              credentials.name.length < 4 ||
              credentials.password.length < 8 ||
              credentials.cPassword.length < 8 ||
              credentials.cPassword.length < credentials.password.length
            }
            type="submit"
            className="btn btn-primary"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  } catch (error) {}
};

export default SignUp;
