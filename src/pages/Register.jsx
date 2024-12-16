import Lottie from "lottie-react";
import animation from "../assets/animation.json";

const Register = () => {
  return (
    <div className="bg-base-200 min-h-screen flex items-center justify-center px-4">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse gap-8 w-full max-w-6xl">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Lottie animationData={animation} className="w-72 sm:w-96 lg:w-full" />
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form className="card-body">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left">
              Register Now!
            </h1>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Register</button>
            </div>

            <p className="mt-4 text-center">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-primary font-bold link link-hover"
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
