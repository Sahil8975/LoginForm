import React from "react";
import { emailValidator, passwordValidator } from "../Component/regexValidator";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = React.useState({ email: "", password: "" });

  const [errorMessage, seterrorMessage] = React.useState("");
  const [successMessage, setsuccessMessage] = React.useState("");

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    if (localStorage.getItem("auth")) navigate.push("/");
  }, []);

  const formSubmitter = (e) => {
    e.preventDefault();
    setsuccessMessage("");
    if (!emailValidator(input.email))
      return seterrorMessage("Please enter valid email id");

    if (!passwordValidator(input.password))
      return seterrorMessage(
        "Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters"
      );
    // setsuccessMessage('Successfully Validated');
    if (input.email !== "admin@a.com" || input.password !== "Sahil@12")
      return seterrorMessage("Invalid email or password");

    navigate.push("/");
    localStorage.setItem("auth", true);
  };

  return (
    <div>
      <div className="main">
        <div
          className="main"
          style={{ backgroundImage: 'url("images/bg-01.jpg")' }}
        >
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form
              className="login100-form validate-form"
              onSubmit={formSubmitter}
            >
              <span className="login">Login Form</span>
              {errorMessage.length > 0 && (
                <div style={{ marginBottom: "10px", color: "red" }}>
                  {errorMessage}
                </div>
              )}
              {successMessage.length > 0 && (
                <div style={{ marginBottom: "10px", color: "green" }}>
                  {successMessage}
                </div>
              )}
              <div
                className="email_header"
                // data-validate="email is required"
                // style={{ marginTop: "2rem" }}
              >
                <span className="label-input100">Email</span>
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Type your username"
                  style={{ marginLeft: "2rem" }}
                  onChange={handleChange}
                />
                <span className="focus-input100" data-symbol="" />
              </div>
              <div className="Password_header">
                <span className="label-input100">Password</span>
                <input
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="Type your password"
                  style={{ marginLeft: "1rem" }}
                  onChange={handleChange}
                />
                <span className="focus-input100" data-symbol="" />
              </div>
              <div className="Forgot_part">
                <a href="#">Forgot password?</a>
              </div>
              <div className="Login_part">
                <button className="login-btn">Login</button>
              </div>
              <div className="SignUp_header">
                <span>Or Sign Up Using</span>
              </div>
              <div className="flex-c-m">
                <a href="#" className="login100-social-item bg1">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#" className="login100-social-item bg2">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#" className="login100-social-item bg3">
                  <i className="fa fa-google" />
                </a>
              </div>
              {/* <div className="flex-col-c p-t-155">
                <span className="txt1 p-b-17">Or Sign Up Using</span>
                <a href="#" className="txt2">
                  Sign Up
                </a>
              </div> */}
            </form>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1" />
    </div>
  );
};

export default Login;
