import React from "react";
import { Link } from "react-router-dom";

import Layout from "components/Layout";
import Input from "components/Input";

const Register = () => {
  return (
    <Layout>
      <div className="w-full h-screen flex flex-col overflow-auto  bg-white">
        <div className="w-full hp-screen">
          <div className="flex flex-row pb-20">
            <div className="flex-1 bg-white">
              <div className="flex flex-col">
                <form className="mx-auto mt-7">
                  <h2
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "1.75em",
                      fontWeight: "700",
                      textAlign: "center",
                      color: "#22CAB6",
                    }}
                  >
                    Register
                  </h2>
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered input-primary w-full bg-white"
                    style={{ border: "4px solid #22CAB6" }}
                  />
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered input-primary w-full bg-white"
                    style={{ border: "4px solid #22CAB6" }}
                  />
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="+6281299997777"
                    className="input input-bordered input-primary w-full bg-white"
                    style={{ border: "4px solid #22CAB6" }}
                  />
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text-area"
                    placeholder="Enter your address"
                    className="input input-bordered input-primary w-full bg-white"
                    style={{ border: "4px solid #22CAB6" }}
                  />
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="******************"
                    className="input input-bordered input-primary w-full bg-white"
                    style={{ border: "4px solid #22CAB6" }}
                  />
                  <button
                    className="btn w-full"
                    style={{
                      marginTop: "1rem",
                      backgroundColor: "#22CAB6",
                      border: "none",
                      color: "white",
                    }}
                  >
                    Signup
                  </button>
                </form>
                <p className="text-black mx-auto mt-5">
                  Don't have an account?{" "}
                  <Link id="to-login" to="/login">
                    <span className="text-blue-600 font-bold">Login</span>
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex-1 bg-white">
              <img
                src="src/assets/Deliver_Mail.png"
                className="mx-auto alig-center justify-center mt-20"
                style={{ width: "60%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
