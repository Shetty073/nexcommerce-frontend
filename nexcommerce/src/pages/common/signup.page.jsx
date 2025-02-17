import { useState } from "react";
import { Link } from "react-router";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    countryCode: "+1",
    email: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [otpRequested, setOtpRequested] = useState({ mobile: false, email: false });
  const [loadingOtp, setLoadingOtp] = useState({ mobile: false, email: false });
  const [errorMessages, setErrorMessages] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const countryCodes = [
    { code: "+1", flag: "🇺🇸" },
    { code: "+91", flag: "🇮🇳" },
    { code: "+44", flag: "🇬🇧" },
    { code: "+61", flag: "🇦🇺" },
  ];

  // Calculate the max date for DOB (18 years ago from today)
  const maxDob = new Date();
  maxDob.setFullYear(maxDob.getFullYear() - 18);
  const maxDobString = maxDob.toISOString().split("T")[0];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessages({ ...errorMessages, [e.target.name]: "" });
  };

  const requestOtp = (type) => {
    setLoadingOtp({ ...loadingOtp, [type]: true });

    setTimeout(() => {
      setLoadingOtp({ ...loadingOtp, [type]: false });
      setOtpRequested({ ...otpRequested, [type]: true });
      alert(`OTP sent to your ${type === "mobile" ? "mobile" : "email"}`);
    }, 1500); // Simulating OTP request time
  };

  const validateForm = (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{7,14}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    const errors = {};

    if (!nameRegex.test(formData.firstName)) errors.firstName = "First name should contain only letters.";
    if (!nameRegex.test(formData.lastName)) errors.lastName = "Last name should contain only letters.";
    if (!emailRegex.test(formData.email)) errors.email = "Enter a valid email.";
    if (!phoneRegex.test(formData.mobileNumber)) errors.mobileNumber = "Enter a valid mobile number.";
    if (!formData.gender) errors.gender = "Please select a gender.";
    if (!passwordRegex.test(formData.password)) errors.password = "Password must be at least 8 characters long and include both letters and numbers.";
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = "Passwords do not match.";

    setErrorMessages(errors);

    if (Object.keys(errors).length === 0) {
      alert("Signup Successful!");
      setFormData({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        countryCode: "+1",
        email: "",
        dob: "",
        gender: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-indigo-800 text-center mb-6">Create an Account</h2>

        <form onSubmit={validateForm} className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-indigo-700 mb-1">First Name</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                required
                className="w-full p-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
                onChange={handleChange}
                value={formData.firstName}
                aria-label="First Name"
                title="Enter your first name"
              />
              {errorMessages.firstName && <p className="text-red-500 text-sm">{errorMessages.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-indigo-700 mb-1">Last Name</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                required
                className="w-full p-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
                onChange={handleChange}
                value={formData.lastName}
                aria-label="Last Name"
                title="Enter your last name"
              />
              {errorMessages.lastName && <p className="text-red-500 text-sm">{errorMessages.lastName}</p>}
            </div>
          </div>

          {/* Mobile Number */}
          <div className="flex items-center space-x-2">
            <div>
              <label htmlFor="countryCode" className="sr-only">Country Code</label>
              <select
                id="countryCode"
                name="countryCode"
                onChange={handleChange}
                className="border-2 border-indigo-300 p-2 mt-7 h-13 rounded-md bg-gray-100 text-gray-800"
                value={formData.countryCode}
                aria-label="Country Code"
                title="Select country code"
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.flag} {country.code}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="mobileNumber" className="block text-indigo-700 mb-1">Mobile Number</label>
              <input
                id="mobileNumber"
                type="text"
                name="mobileNumber"
                placeholder="Enter your mobile number"
                required
                className="w-full p-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
                onChange={handleChange}
                value={formData.mobileNumber}
                aria-label="Mobile Number"
                title="Enter your mobile number"
              />
              {errorMessages.mobileNumber && <p className="text-red-500 text-sm">{errorMessages.mobileNumber}</p>}
            </div>
            {!otpRequested.mobile ? (
              <button
                type="button"
                onClick={() => requestOtp("mobile")}
                className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
                disabled={loadingOtp.mobile}
              >
                {loadingOtp.mobile ? "Sending..." : "Get OTP"}
              </button>
            ) : (
              <div>
                <label htmlFor="mobileOtp" className="block text-indigo-700 mb-1">Enter OTP</label>
                <input
                  id="mobileOtp"
                  type="text"
                  name="mobileOtp"
                  placeholder="Enter OTP"
                  required
                  className="w-full p-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
                  aria-label="Mobile OTP"
                  title="Enter the OTP sent to your mobile"
                />
              </div>
            )}
          </div>

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
            {!otpRequested.email ? (
              <button
                type="button"
                onClick={() => requestOtp("email")}
                className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition mt-2"
                disabled={loadingOtp.email}
              >
                {loadingOtp.email ? "Sending..." : "Get OTP"}
              </button>
            ) : (
              <div>
                <label htmlFor="emailOtp" className="block text-indigo-700 mb-1">Enter OTP</label>
                <input
                  id="emailOtp"
                  type="text"
                  name="emailOtp"
                  placeholder="Enter OTP"
                  required
                  className="w-full p-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
                  aria-label="Email OTP"
                  title="Enter the OTP sent to your email"
                />
              </div>
            )}
          </div>

          {/* Date of Birth */}
          <div className="w-full">
            <label htmlFor="dob" className="block text-indigo-700 mb-1">Date of Birth</label>
            <input
              id="dob"
              type="date"
              name="dob"
              required
              max={maxDobString}
              className="w-full p-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
              onChange={handleChange}
              value={formData.dob}
              aria-label="Date of Birth"
              title="Select your date of birth"
            />
          </div>

          {/* Gender */}
          <div className="flex items-center space-x-4">
            <label htmlFor="male" className="text-indigo-700">
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                required
                className="mr-2"
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label htmlFor="female" className="text-indigo-700">
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                required
                className="mr-2"
                onChange={handleChange}
              />{" "}
              Female
            </label>
            {errorMessages.gender && <p className="text-red-500 text-sm">{errorMessages.gender}</p>}
          </div>

          {/* Password Fields */}
          <div className="w-full">
            <label htmlFor="password" className="block text-indigo-700 mb-1">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter a password"
              required
              className="w-full p-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
              onChange={handleChange}
              value={formData.password}
              aria-label="Password"
              title="Enter a password"
            />
            {errorMessages.password && <p className="text-red-500 text-sm">{errorMessages.password}</p>}
          </div>

          <div className="w-full">
            <label htmlFor="confirmPassword" className="block text-indigo-700 mb-1">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              required
              className="w-full p-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
              onChange={handleChange}
              value={formData.confirmPassword}
              aria-label="Confirm Password"
              title="Confirm your password"
            />
            {errorMessages.confirmPassword && <p className="text-red-500 text-sm">{errorMessages.confirmPassword}</p>}
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full w-full hover:bg-indigo-700 transition"
            >
              Sign Up
            </button>
          </div>

          {/* Sign up link */}
          <div className="mt-4 text-center">
            <p className="text-indigo-700">
              {`Already have an account?`}
              <Link to="/signin" className="ps-2 text-indigo-600 hover:text-indigo-800 font-medium">
                Sign In
              </Link>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}
