import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import React from "react";

import Layout from "components/Layout";
import Navbar from "components/Navbar";
import ProductCard from "components/ProductCard";
import "styles/index.css";

function App() {
  return (
    <Layout>
      <Navbar />
      <div className="w-full hp-screen px-20 pb-20">
        <div className="flex-1">
          <h2
            className="mb-10"
            style={{
              fontFamily: "Poppins",
              fontSize: "1.75em",
              fontWeight: "700",
              textAlign: "center",
              color: "#000000",
            }}
          >
            All Product
          </h2>
        </div>
        <div className="grid grid-cols-5 gap-10">
          {[...Array(30)].map((e) => (
            <ProductCard />
          ))}
        </div>
        <div className="sticky bottom-20 flex justify-end mr-20 text-customcyan">
          <Link to="add-new-product">
            <div className="bg-gray-50 rounded-full p-1 duration-300 hover:cursor-pointer hover:text-cyan-300 active:scale-90">
              <BsFillPlusCircleFill size={50} />
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default App;
