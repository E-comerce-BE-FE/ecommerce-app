import React from "react";

import Layout from "components/Layout";
import Navbar from "components/Navbar";

const NewProduct = () => {
  return (
    <Layout>
      <Navbar />
      <section className="flex justify-center items-center gap-10 mx-40 border-2 border-customcyan p-10 rounded-t-3xl">
        <div className="flex flex-col">
          <div className="border-2 border-customcyan rounded-2xl">
            <img src="src/assets/shirt.png" alt="image" />
          </div>
          <form className="text-customcyan">
            <label htmlFor="my-modal-6">
              <p className="text-center border-2 border-customcyan rounded-xl px-5 py-3 mt-2 text-customcyan font-medium duration-300 hover:cursor-pointer  active:scale-95">
                Insert product's picture
              </p>
            </label>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box border-2 border-customcyan">
                <p className="mb-5 pb-2 text-xl border-b-2 font-medium">
                  Select Picture
                </p>
                <div className="flex justify-center items-center gap-5">
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full border-2 border-customcyan max-w-xs"
                  />
                </div>
                <div className="modal-action">
                  <button
                    type="submit"
                    className="w-20 text-sm text-center border-2 border-customcyan bg-customcyan rounded-xl py-1 text-gray-50 font-medium duration-300 hover:cursor-pointer  active:scale-90"
                  >
                    Save
                  </button>
                  <label
                    htmlFor="my-modal-6"
                    className="w-20 text-sm text-center border-2 border-customcyan rounded-xl py-1 text-customcyan font-medium duration-300 hover:cursor-pointer  active:scale-90"
                  >
                    Cancel
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-5 w-3/5">
              <div className="text-xl">
                <p className="font-bold">
                  Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
                </p>
                <input
                  type="text"
                  placeholder="Type product's name"
                  className="file-input file-input-bordered px-3 mt-1 w-full border-2 border-customcyan max-w-xs"
                />
              </div>
              <div className="text-gray-500">
                <p>
                  Stock: <span> 99999 pcs</span>
                </p>
                <input
                  type="number"
                  placeholder="Type product's stock"
                  className="file-input file-input-bordered px-3 mt-1 w-full border-2 border-customcyan max-w-xs"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 font-bold text-lg">
                  <span>Rp</span>
                  <span className="">
                    50000<span> ,-</span>
                  </span>
                </div>

                <input
                  type="number"
                  placeholder="Type product's price"
                  className="file-input file-input-bordered px-3 mt-1 w-full border-2 border-customcyan max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-5 mx-40 mt-5 mb-20 border-2 border-customcyan p-10 rounded-b-3xl">
        <span className="text-customcyan font-semibold">Description</span>
        <span>Description input</span>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          className="w-full border-2 border-customcyan rounded-2xl"
        ></textarea>
      </section>
    </Layout>
  );
};

export default NewProduct;
