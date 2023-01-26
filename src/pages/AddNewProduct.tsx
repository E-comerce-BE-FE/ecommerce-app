import withReactContent from "sweetalert2-react-content";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Layout from "components/Layout";
import Navbar from "components/Navbar";
import Swal from "utils/Swal";
import AuthButton from "components/Button";

const AddNewProduct = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [product_image, setProductImage] = useState<any>();
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
    body.append("product_image", product_image);
    axios
      .post("products", body)
      .then((res) => {
        const { message } = res.data;
        MySwal.fire({
          title: "Success",
          text: message,
          showCancelButton: false,
        });
        navigate("/");
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          title: "Failed",
          text: data.message,
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
            <div className="border-2 border-customcyan rounded-2xl">
              <img src="src/assets/shirt.png" alt="image" />
            </div>
            <form className="flex justify-center mt-5">
              <input
                type="file"
                onChange={(e) => setProductImage(e.target.files?.[0])}
                className="file-input file-input-bordered w-full border-2 border-customcyan max-w-xs"
              />
            </form>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-5 w-3/5">
                <div className="text-xl">
                  <p className="font-bold">{product_name}</p>
                  <input
                    id="inputProduct-name"
                    onChange={(e) => setProductName(e.target.value)}
                    type="text"
                    placeholder="Type product's name"
                    className="file-input file-input-bordered px-3 mt-1 w-full border-2 border-customcyan max-w-xs"
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
          </div>
        </section>
        <section className="flex flex-col gap-5 mx-40 mt-5 border-2 border-customcyan p-10 rounded-b-3xl">
          <span className="text-customcyan font-semibold">Description</span>
          <span>{description}</span>
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
