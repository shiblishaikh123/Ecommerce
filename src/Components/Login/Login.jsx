import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = props => {
  const [stage, setStage] = useState("login"); 
  const [number, setNumber] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [userInput, setUserInput] = useState("");

  let navigate = useNavigate();

  const handleNumberChange = e => {
    const inputValue = e.target.value;
    if (!isNaN(inputValue) && inputValue.length <= 10) {
      setNumber(inputValue);
    } else {
      alert("Enter Only 10 Digit Number");
    }
  };

  const handleOtpChange = e => {
    setUserInput(e.target.value);
  };

  const generateOTP = () => {
    if (number.length === 10) {
      const otp = Math.floor(1000 + Math.random() * 9000).toString();
      setGeneratedOtp(otp);
      alert(`Generated OTP: ${otp}`);
      setStage("otp");
    } else {
      alert("Please Enter the Proper 10 Digit Number");
    }
  };

  const handleValidation = () => {
    if (userInput === generatedOtp) {
      localStorage.setItem("Loggedin", number);
      navigate("/Product");
      props.handleLogin();
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };

  return (
    <div className="login-otp-container flex flex-col items-center justify-center">
      {stage === "login" && (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold m-4">Enter Mobile Number</h1>
          <input
            type="number"
            name="number"
            id="number"
            value={number}
            onChange={handleNumberChange}
            placeholder="Enter Your Number (Max 10 digits)"
            className="border border-gray-300 rounded-md py-2 px-4 mb-4 w-11/12"
          />
          <button
            onClick={generateOTP}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Get OTP
          </button>
        </div>
      )}
      {stage === "otp" && (
        <>
          <h1 className="text-3xl font-bold m-4">Enter OTP</h1>
          <input
            type="text"
            placeholder="Enter OTP"
            value={userInput}
            onChange={handleOtpChange}
            maxLength={4}
            className="border border-gray-300 rounded-md py-2 px-4 mb-4"
          />
          <button
            onClick={handleValidation}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Validate OTP
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
