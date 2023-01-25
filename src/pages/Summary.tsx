import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import React from "react";

import Layout from "components/Layout";
import Navbar from "components/Navbar";
import SummaryCard from "components/SummaryCard";

const Summary = () =>{
    return(
        <Layout>
            <div className="w-full h-screen bg-white">
                <Navbar />
                <section className="flex justify-between items-center mx-40 mb-5">
                    <p className="text-2xl font-bold text-black">Transaction Summary</p>
                    <Link to="/">
                        <div className="flex justify-center items-center gap-3 border-2 bg-customcyan rounded-2xl px-3 py-2 text-white font-semibold duration-300 hover:cursor-pointer  active:scale-95">
                            <FaArrowLeft />
                            <p>Back to home</p>
                        </div>
                    </Link>
                </section>
                <section className="flex justify-center items-center gap-10 mx-40 border-2 border-customcyan p-10 rounded-t-3xl">
                    <div className="flex flex-col gap-10 w-full">
                        {[...Array(3)].map((e) => (
                            <SummaryCard />
                        ))}
                    </div>
                </section>
                <section className="flex flex-col gap-7 mx-40 mt-10 mb-20 border-2 border-customcyan py-10 px-28 rounded-b-3xl">
                        <h2 className="text-black font-bold text-2xl">Regata Joli</h2>
                        <p className="text-black font-semibold text-lg">+62890000191</p>
                        <p className="text-black font-semibold text-lg">Jalan Petamburan Gg. Citra III No.91 Rt.02/03
                           <br/> Bulu 71893, Bekasi, Jawa Barat
                        </p>
                </section>
                <section className="flex flex-col gap-7 mx-40 mt-10 mb-20 border-2 border-customcyan py-10 px-28 rounded-b-3xl">
                    <span className="text-lg font-semibold flex justify-between">
                        <p>Total Item:</p>
                        <p>3 pcs</p>
                    </span>
                    <span className="text-lg font-semibold flex justify-between">
                        <p>Total Payment:</p>
                        <p>Rp 330.000,-</p>
                    </span>
                    <Link to="/TransactionPurchase">
                        <div className="flex justify-center border-2 bg-customcyan rounded-2xl p-3 text-white font-bold duration-300 hover:cursor-pointer  active:scale-95">
                            Go To Payment
                        </div>
                    </Link>
                </section>
            </div>
        </Layout>
    )
}

export default Summary;