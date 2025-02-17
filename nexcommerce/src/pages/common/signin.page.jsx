import { useState } from "react";
import { Link } from "react-router";

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessages({ ...errorMessages, [e.target.name]: "" });
  };

  const validateForm = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    const errors = {};

    if (!emailRegex.test(formData.email)) errors.email = "Enter a valid email.";
    if (!passwordRegex.test(formData.password)) errors.password = "Password must be at least 8 characters long and include both letters and numbers.";

    setErrorMessages(errors);

    if (Object.keys(errors).length === 0) {
      alert("Sign In Successful!");
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-indigo-800 text-center mb-6">Sign In</h2>

        <form onSubmit={validateForm} className="space-y-4">
          {/* Email */}
          <div className="w-full">
            <label htmlFor="email" className="block text-indigo-700 mb-1">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="w-full p-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
              onChange={handleChange}
              value={formData.email}
              aria-label="Email Address"
              title="Enter your email address"
            />
            {errorMessages.email && <p className="text-red-500 text-sm">{errorMessages.email}</p>}
          </div>

          {/* Password */}
          <div className="w-full">
            <label htmlFor="password" className="block text-indigo-700 mb-1">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full p-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
              onChange={handleChange}
              value={formData.password}
              aria-label="Password"
              title="Enter your password"
            />
            {errorMessages.password && <p className="text-red-500 text-sm">{errorMessages.password}</p>}
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full w-full hover:bg-indigo-700 transition"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Sign up link */}
        <div className="mt-4 text-center">
          <p className="text-indigo-700">
            {`Don't have an account?`}
            <Link to="/signup" className="ps-2 text-indigo-600 hover:text-indigo-800 font-medium">
              Sign Up
            </Link>
          </p>
        </div>
        
      </div>
    </div>
  );
}
