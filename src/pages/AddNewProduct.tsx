import withReactContent from "sweetalert2-react-content";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import AuthButton from "components/Button";
import Layout from "components/Layout";
import Navbar from "components/Navbar";
import Swal from "utils/Swal";

const AddNewProduct = () => {
  const navigate = useNavigate();
  const [cookie] = useCookies(["token"]);
  const MySwal = withReactContent(Swal);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<any>();
  const [product_name, setProductName] = useState<string>("");
  const [stock, setStock] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    if (product_name && stock && price && description) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [product_name, stock, price, description]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = new FormData();
    body.append("product_name", product_name);
    body.append("stock", stock);
    body.append("price", price);
    body.append("description", description);
    body.append("file", file);
    await axios
      .post("products", body, {
        headers: { Authorization: `Bearer ${cookie.token}` },
      })
      .then((res) => {
        const { message } = res.data;
        MySwal.fire({
          title: "Success",
          text: "New product added",
          showCancelButton: false,
        });
        navigate("/");
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          title: "Try Again",
          text: "Failed to add product",
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <Navbar />
      <form className="mb-20" onSubmit={(e) => handleSubmit(e)}>
        <section className="flex justify-center items-center gap-10 mx-40 border-2 border-customcyan p-10 rounded-t-3xl">
          <div className="flex flex-col">
            <div className="border-2 border-customcyan text-center py-20 rounded-2xl">
              <p className="text-customcyan font-bold text-xl">PRODUCT IMAGE</p>
            </div>
            <form className="flex justify-center mt-5">
              <input
                type="file"
                onChange={(e) => setFile(e.target.files?.[0])}
                className="file-input file-input-bordered w-full border-2 border-customcyan max-w-xs"
              />
            </form>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col gap-5">
              <div className="text-xl">
                <div className="font-bold w-80">
                  <p>Name:</p>
                  <p>{product_name}</p>
                </div>
                <input
                  id="inputProduct-name"
                  onChange={(e) => setProductName(e.target.value)}
                  type="text"
                  placeholder="Type product's name"
                  className="file-input file-input-bordered px-3 mt-1 w-96 border-2 border-customcyan max-w-xs"
                />
              </div>
              <div className="text-gray-500">
                <p>Stock: {stock} pcs</p>
                <input
                  onChange={(e) => setStock(e.target.value)}
                  type="text"
                  placeholder="Type product's stock"
                  className="file-input file-input-bordered px-3 mt-1 w-full border-2 border-customcyan max-w-xs"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 font-bold text-lg">
                  <span>Rp</span>
                  <span className="">
                    {price}
                    <span> ,-</span>
                  </span>
                </div>

                <input
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  placeholder="Type product's price"
                  className="file-input file-input-bordered px-3 mt-1 w-full border-2 border-customcyan max-w-xs"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-5 mx-40 mt-5 border-2 border-customcyan p-10 rounded-b-3xl">
          <span className="text-customcyan font-semibold">Description</span>
          <span className="hidden">{description}</span>
          <textarea
            name=""
            id=""
            onChange={(e) => setDescription(e.target.value)}
            cols={30}
            rows={10}
            className="w-full border-2 border-customcyan rounded-2xl p-5"
          ></textarea>
        </section>
        <div className="flex justify-center mx-60 mt-5">
          <AuthButton
            id="btn-submit"
            label="ADD NEW PRODUCT"
            loading={loading || disabled}
          />
        </div>
      </form>
    </Layout>
  );
};

export default AddNewProduct;
