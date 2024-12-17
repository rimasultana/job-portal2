import { useContext, useState } from "react";
import Lottie from "lottie-react";
import animation from "../assets/animation.json";
import { toast } from "react-hot-toast";
import AuthContext from "../Context/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {
  const [passwordError, setPasswordError] = useState("");

  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    console.log(name, email, photo, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("Error", error.message);
      });

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 6 characters long, include at least 1 uppercase letter, 1 lowercase letter, and 1 number."
      );
    } else {
      toast.success("Registered Successfully!");
    }
  };

  return (
    <div className="bg-base-200 min-h-screen flex items-center justify-center px-4">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse gap-8 w-full max-w-6xl">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Lottie
            animationData={animation}
            className="w-72 sm:w-96 lg:w-full"
          />
        </div>

        <div className="card bg-base-100 w-full max-w-md shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left">
              Register Now!
            </h1>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo URL"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              {passwordError && (
                <p className="text-sm text-red-600 mt-2">{passwordError}</p>
              )}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Register</button>
            </div>

            <p className="mt-4 text-center">
              Already have an account?{" "}
              <Link
              to={"/signin"}
                className="text-primary font-bold link link-hover"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
