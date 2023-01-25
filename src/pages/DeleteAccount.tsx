import React from "react";
import { Link } from "react-router-dom";

import "src/styles/DelAcc.css";

export default function DelAcc() {
  return (
    <>
      <div className="w-full bg-white h-screen flex flex-col justify-center mx-auto">
        <h1 className="title-del">Delete Account</h1>
        <p className="del-paragraf">
          Delete your account will permanently remove all your information
          from our platform. Your account cannot be reactivated. If you're sure
          you want to delete, select the 'Delete Account' button. If you
          have any issues, please let us know before deleting.
        </p>
        <div className="flex flex-row mx-auto mt-8">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <input
            type="text"
            placeholder="enter your password to delete account"
            className="input input-bordered input-primary w-full bg-white"
            style={{ border: "10px #D9D9D9" }}
          />
          <label
            className="btn "
            style={{
              backgroundColor: "#22cab6",
              marginTop: "1rem",
              borderRadius: "10px",
              color: "white",
              border: "none",
              fontFamily: "Poppins",
            }}
          >
            Delete Account
          </label>
          <Link to="/profile">
            <button
              className="btn"
              style={{
                marginTop: "1rem",
                borderRadius: "10px",
                color: "white",
                marginLeft: "1rem",
                width: "100px",
              }}
            >
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}