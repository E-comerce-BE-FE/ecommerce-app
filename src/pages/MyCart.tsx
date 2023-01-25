import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import React from "react";

import CartCard from "components/CartCard";
import Layout from "components/Layout";
import Navbar from "components/Navbar";

const MyCart = () => {
  return (
    <Layout>
      <Navbar />
      <section className="flex justify-between items-center mx-40 mb-5">
        <span className="text-2xl font-bold">My Cart</span>
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
            <CartCard />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-7 mx-40 mt-5 mb-20 border-2 border-customcyan py-10 px-28 rounded-b-3xl">
        <span className="text-lg font-semibold flex justify-between">
          <p>Subtotal :</p>
          <p>Rp 300000,-</p>
        </span>
        <Link to="/summary">
          <div className="flex justify-center border-2 bg-customcyan rounded-2xl p-3 text-white font-semibold duration-300 hover:cursor-pointer  active:scale-95">
            Checkout
          </div>
        </Link>
      </section>
    </Layout>
  );
};

export default MyCart;
