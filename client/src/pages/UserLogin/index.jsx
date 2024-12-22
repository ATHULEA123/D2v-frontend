import React, {useState} from "react";
import {Col, Layout} from "antd";
import {Header} from "antd/es/layout/layout";
import {Logo} from "../../assets/constant";
import {leftarrow} from "../../assets/constant";
import {Link, useNavigate} from "react-router-dom";

const UserLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Layout />
      <Header className="container ant-header flex-row align-middle px-6 md:px-12">
        <Col span={10} className="px-6 md:px-12 py-3">
          <Link to="/">
            <Logo />
          </Link>
        </Col>
      </Header>
      <div
        className={` w-full flex flex-col justify-center items-center bg-cover shadow-2xl
          h-[90dvh]`}
        style={{
          backgroundImage: "url('/loginbackground.png')",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 w-[30%]">
          <div className="w-full mb-3 flex justify-start items-start">
            <button
              className="backdrop-blur-md flex items-center justify-center text-gray-700 bg-[#FFFFFF99] px-3 py-1.5 rounded-xl font-medium text-l leading-[17px]"
              onClick={() => navigate(-1)}
            >
              <img src={leftarrow} alt="" className="w-7 mr-2" />
              Back
            </button>
          </div>
          <div className="bg-[#FFFFFF99] backdrop-blur-xl rounded-2xl shadow-lg py-8 px-10 w-full ">
            {/* Tabs for Login/Signup */}
            <div className="flex justify-center pb-2 px-3 sm:px-0 mb-6">
              <button
                className={`text-md leading-[50px] w-[100px] ${
                  isLogin ? "text-black border-b-2 border-black" : "text-gray-500"
                }`}
                onClick={() => {
                  setIsLogin(true);
                  setIsOtpSent(false); // Reset OTP state if switching to login
                }}
              >
                Login
              </button>
              {/* <button
                className={`text-md leading-[50px] w-[100px] ${
                  !isLogin ? "text-black border-b-2 border-black" : "text-gray-500"
                }`}
                onClick={() => {
                  setIsLogin(false);
                  setIsOtpSent(false); // Reset OTP state if switching to signup
                }}
              >
                Signup
              </button> */}
            </div>

            {/* Login Form */}
            <div
              className={`transition-all duration-500 transform ${
                isLogin ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 absolute"
              }`}
            >
              {isLogin && !isOtpSent && (
                <form className="flex flex-col items-center gap-4 w-full">
                  <div className="w-full py-10">
                    <label htmlFor="phone" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Enter Phone Number"
                      className="w-full px-4 sm:px-4 py-4 border rounded-xl outline-none border-[rgb(68_68_68_/_20%)] placeholder-[#44444499] font-normal text-[14px] leading-[20.16px] bg-[#FFFFFF33]"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setIsOtpSent(true)} // Simulate sending OTP
                      className="w-full max-w-xs bg-[#996830] text-white py-3 px-20 rounded-xl font-medium text-l leading-[16px] hover:bg-[#7f5526] transition"
                    >
                      Send OTP
                    </button>
                  </div>
                </form>
              )}
            </div>
            {/* OTP Verification Form */}
            {isOtpSent && isLogin && (
              <form className="flex flex-col items-center gap-8 w-full">
                <div className="w-full">
                  <label htmlFor="otp" className="sr-only">
                    OTP
                  </label>
                  <input
                    type="text"
                    id="otp"
                    placeholder="Enter OTP here"
                    className="w-full px-4  py-4 border rounded-2xl outline-none border-[rgb(68_68_68_/_20%)] placeholder-[#44444499] font-normal text-[14px] leading-[20.16px] bg-[#FFFFFF33]"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <button
                    type="button"
                    className="w-full max-w-xs bg-[#996830] text-white py-3 px-20 rounded-xl font-medium text-l leading-[16px] hover:bg-[#7f5526] transition"
                  >
                    Login
                  </button>
                  <p className="text-[#996830] underline underline-offset-4 mt-5">00:06</p>
                </div>
                <p className="text-center text-[#444444]">
                  Didn’t receive OTP?{" "}
                  <button
                    className="text-[#996830] underline underline-offset-4 font-[500] text-[16px] leading-[32px]"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOtpSent(false); // Allow resending OTP
                    }}
                  >
                    Resend
                  </button>
                </p>
              </form>
            )}

            {/* Signup Form */}
            <div
              className={`transition-all duration-500 transform ${
                !isLogin ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 absolute"
              }`}
            >
              {!isLogin && (
                <form className="flex flex-col items-center gap-6 w-full">
                  {/* Form Fields */}
                  <div className="w-full">
                    <label htmlFor="phone" className="sr-only">
                      Name
                    </label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Enter Full Name*"
                      className="w-full px-4  py-4 border rounded-xl outline-none border-[rgb(68_68_68_/_20%)] placeholder-[#44444499] font-normal text-[14px] leading-[20.16px] bg-[#FFFFFF33]"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="phone" className="sr-only">
                      email
                    </label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Enter Mail Id*"
                      className="w-full px-4  py-4 border rounded-xl outline-none border-[rgb(68_68_68_/_20%)] border-opacity-60 placeholder-[#44444499] font-normal text-[14px] leading-[20.16px] bg-[#FFFFFF33]"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="phone" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Enter Phone Number*"
                      className="w-full px-4  py-4 border rounded-xl outline-none border-[rgb(68_68_68_/_20%)] placeholder-[#44444499] font-normal text-[14px] leading-[20.16px] bg-[#FFFFFF33]"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="phone" className="sr-only">
                      Project Location
                    </label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Project Location Area*"
                      className="w-full px-4  py-4 border rounded-xl outline-none border-[rgb(68_68_68_/_20%)] placeholder-[#44444499] font-normal text-[14px] leading-[20.16px] bg-[#FFFFFF33]"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setIsOtpSent(true)} // Simulate sending OTP
                      className="w-full max-w-xs bg-[#996830] text-white py-3 px-20 rounded-xl font-medium text-l leading-[16px] hover:bg-[#855c2d] transition"
                    >
                      Signup
                    </button>
                  </div>
                </form>
              )}
            </div>
            {/* Toggle Message */}
            {!(isOtpSent && isLogin) && (
              <p className="text-center text-[#44444499] text-sm mt-4 mb-5 flex justify-center gap-2">
                {isLogin ? (
                  <>
                    Don’t have an account?{" "}
                    <button
                      className="text-[#996830] underline underline-offset-4 font-[500] text-[14px] leading-[17.64px] "
                      onClick={(e) => {
                        e.preventDefault();
                        setIsLogin(false);
                      }}
                    >
                      Sign Up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      className="text-[#996830] underline underline-offset-4 font-[500] text-[14px] leading-[17.64px] "
                      onClick={(e) => {
                        e.preventDefault();
                        setIsLogin(true);
                      }}
                    >
                      Login Now
                    </button>
                  </>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="bg-white drop-shadow-2xl h-25"></div>
    </>
  );
};

export default UserLogin;
