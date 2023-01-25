import React from "react";

import Layout from "components/Layout";
import Input from "components/Input";

const ChangePassword = () => {
    return(
        <Layout>
            <div className="w-full h-screen flex flex-col overflow-auto  bg-white">
                <div className="w-full hp-screen">
                    <div className="flex flex-row">
                        <div className="flex-1 bg-white">
                            <div className="flex flex-col">
                                <form className="mx-auto mt-20">
                                    <h2
                                        style={{
                                        fontFamily: "Poppins",
                                        fontSize: "1.75em",
                                        fontWeight: "700",
                                        textAlign: "center",
                                        color: "#000000",
                                        }}
                                    >
                                        Change Password
                                    </h2>
                                    <label className="label">
                                        <span className="label-text">Current Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="current password...."
                                        className="input input-bordered input-primary w-full bg-white"
                                        style={{ border: "4px #22CAB6" }}
                                    />
                                    <label className="label">
                                        <span className="label-text">New Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="new password...."
                                        className="input input-bordered input-primary w-full bg-white"
                                        style={{ border: "4px #22CAB6" }}
                                    />
                                    <label className="label">
                                        <span className="label-text">Confirm New Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="confirm new password...."
                                        className="input input-bordered input-primary w-full bg-white"
                                        style={{ border: "4px #22CAB6" }}
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
                                        Save Change
                                    </button>
                                </form>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ChangePassword;