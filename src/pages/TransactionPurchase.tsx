import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import React from "react";

import Layout from "components/Layout";
import Navbar from "components/Navbar";
import TransactionCard from "components/TransactionCard";

const TransactionPurchase = () =>{
    return(
        <Layout>
            <div className="w-full h-screen bg-white">
                <Navbar />
                <section className="flex justify-between items-center mx-40 mb-5">
                    <p className="text-2xl font-bold text-emerald-400">My Purchases      <span className="grid-col-5 gap-10 text-black">My Sales</span></p>
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
                            <TransactionCard />
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default TransactionPurchase;