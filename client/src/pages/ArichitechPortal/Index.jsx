import React, {useState, useEffect} from "react";
import {Logo} from "../../../src/assets/constant";
import {IoArrowBack} from "react-icons/io5";

const ArchitectPortal = ({portalType}) => {
  const [isOtpStep, setIsOtpStep] = useState(false);
  const [timer, setTimer] = useState(60); // Countdown timer (1 minute)

  const heading = portalType === "master" ? "Master's Portal" : "Architect's Portal";
  console.log(portalType);

  // Handle countdown timer
  useEffect(() => {
    if (isOtpStep && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval); // Cleanup interval
    }
  }, [isOtpStep, timer]);

  // Handle back button click
  const handleBackClick = () => {
    setIsOtpStep(false);
    setTimer(60); // Reset the timer
  };

  // Handle Send OTP / Verify OTP button click
  const handleButtonClick = () => {
    if (!isOtpStep) {
      setIsOtpStep(true); // Switch to OTP step
    } else {
      // Add logic for OTP verification here
    }
  };

  return (
    <div className="container">
      <div className="p-2 py-5">
        <Logo />
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex items-center mt-16 justify-center">
          <h1 className="text-4xl font-semibold text-[rgba(153,104,48,0.6)] text-center">{heading}</h1>
        </div>
        <div className={`flex justify-center text-center mt-6 m-auto  ${isOtpStep?"w-80":""}`}>
          <div className="flex w-full justify-start">
            {isOtpStep && (
              <button onClick={handleBackClick} className="text-black text-[24px] ">
                <IoArrowBack />
              </button>
            )}
            <h2 className="text-[rgba(68,68,68,1)] text-2xl font-bold ml-0 flex-1 ">SIGN IN</h2>
          </div>
        </div>
        <div className="flex flex-col items-center mt-16">
          <input
            type="text"
            placeholder={isOtpStep ? "Enter OTP here" : "Enter mobile number here"}
            name={isOtpStep ? "otp" : "phone"}
            className="px-5 py-3 text-base w-80 font-light rounded-xl border placeholder-[rgba(196,163,134,1)] outline-none  focus:ring-1 focus:ring-[#996833] custom-portal-input"
          />
          <button
            onClick={handleButtonClick}
            className="mt-10 bg-[#996833] hover:bg-[#854e1f] text-white font-semibold py-2 px-4 rounded-xl w-[170px]"
          >
            {isOtpStep ? "Login" : "Send OTP"}
          </button>
          {isOtpStep && (
            <div className="mt-4 text-center text-gray-500">
              <p className="text-sm">{`00:${timer < 10 ? `0${timer}` : timer}`}</p>
              <p className="text-sm mt-2">
                Didn't receive OTP?{" "}
                <button
                  // Resend OTP logic
                  className="text-[#996833] underline"
                >
                  Resend
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArchitectPortal;