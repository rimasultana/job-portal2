import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import animation from "../assets/login.json"
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const SignIn = () => {
  const { signInUser} = useContext(AuthContext);
  
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);

    signInUser(email, password)
    .then(result =>{
      console.log(result);
    })
    .catch(error =>{
      console.log("error", error);
    })

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
          <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left">
              Sign Now!
            </h1>
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Login</button>
            </div>

            <p className="mt-4 text-center">
              Don't have an account?{" "}
              <Link
                to={"/register"}
                className="text-primary font-bold link link-hover"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
