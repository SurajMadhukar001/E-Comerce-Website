import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailError] = useState("");
  const [passwordErr, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  let navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      setEmailError("Email is Required.");
    } else if (!email.includes(".com")) {
      setEmailError("Only .com Domain is allowed");
    }
    if (password === "") {
      setPasswordError("Password is Required.");
    } else if (password.length < 6) {
      setPasswordError("Please Use at least 6 Character");
    }

    if (emailErr || passwordErr) {
      alert("Please fill the required fields");
    } else {
      let existingUser = JSON.parse(localStorage.getItem("users")) || [];

      let user = existingUser.find((item) => {
        return item.userEmail === email;
      });
      console.log(user.userPassword);
      console.log(email);
      if (user.userPassword == password) {
        alert("Successfully Logged In");
        navigate("/");
      } else {
        alert("Try Again");
      }
      //find()
    }
  };
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="card p-3 bgimage1">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleEmail}
                    value={email}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <div class="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      class="form-control"
                      id="autoSizingInputGroup"
                      placeholder="Enter Your Password"
                      onChange={handlePassword}
                      value={password}
                    />
                    <div class="input-group-text" onClick={handleShowPassword}>
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-eye-slash-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                          <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-eye-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-100 text-center">
                  <button
                    type="submit"
                    className="btn btn-outline-dark w-75 rounded-4"
                  >
                    Login Now
                  </button>
                </div>
                <p className="text-center mt-4">
                  Dont't have an Account{" "}
                  <Link to="/sign-up">Register Here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
