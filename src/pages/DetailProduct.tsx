import { useNavigate, useParams } from "react-router-dom";
import { FaPenSquare, FaTrashAlt } from "react-icons/fa";
import withReactContent from "sweetalert2-react-content";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import Layout from "components/Layout";
import Navbar from "components/Navbar";
import Swal from "utils/Swal";

interface TypeProduct {
  id: number;
  product_name: string;
  stock: number;
  price: number;
  product_image: string;
  user: User;
  description: string;
}

interface User {
  user_id: number;
  name: string;
  address: string;
  profilepicture: string;
}

const DetailProduct = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const { id } = useParams();
  const [cookie] = useCookies(["token", "id"]);
  const checkToken = cookie.token;
  const checkId = cookie.id;
  const [product, setProduct] = useState<TypeProduct>();
  const [userId, setUserId] = useState<string>("");
  const [userImage, setUserImage] = useState<string>("");
  const [productId, setProductId] = useState<string>("");
  const [file, setEditFile] = useState<any>();
  const [product_name, setProductName] = useState<string>("");
  const [stock, setStock] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const owner = checkId == userId;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`products/${id}`, {
        headers: { Authorization: `Bearer ${cookie.token}` },
      })
      .then((res) => {
        setUserImage(res.data.data.user.user_image);
        setProductId(res.data.data.id);
        setUserId(res.data.data.user.user_id);
        setProduct(res.data.data);
      })
      .catch((err) => {
        alert(err());
      });
  };

  const handleEditProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = new FormData();
    body.append("file", file);
    body.append("product_name", product_name);
    body.append("stock", stock);
    body.append("price", price);
    body.append("description", description);

    await axios
      .put(`products/${productId}`, body, {
        headers: { Authorization: `Bearer ${cookie.token}` },
      })
      .then((res) => {
        MySwal.fire({
          title: "Success",
          text: "Product information updated",
          showCancelButton: false,
        });
        navigate(0);
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          title: "Failed",
          text: data.message,
          showCancelButton: false,
        });
      });
  };

  const handleDeleteProduct = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await axios
      .delete(`products/${productId}`, {
        headers: { Authorization: `Bearer ${cookie.token}` },
      })
      .then((res) => {
        MySwal.fire({
          title: "Success",
          text: "Product deleted",
          showCancelButton: false,
        });
        navigate("/profile");
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          title: "Failed",
          text: data.message,
          showCancelButton: false,
        });
      });
  };

  return (
    <Layout>
      <Navbar />
      <section className="flex justify-center items-center gap-10 mx-40 border-2 border-customcyan p-10 rounded-t-3xl">
        <div className="border-2 border-customcyan rounded-2xl p-4">
          <img
            src={product?.product_image}
            alt="image"
            className="w-72 h-72 rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex items-center gap-10">
            <div className="flex flex-col gap-5 w-3/5">
              <div className="font-bold text-xl">{product?.product_name}</div>
              <div className="text-gray-500">Stock: {product?.stock}</div>
              <div className="w-fit py-2 px-5 mt-1 border-2 border-customcyan rounded-xl text-center">
                Rp {product?.price} ,-
              </div>
            </div>
            <div>
              <div className="flex items-center gap-5 border-2 border-customcyan rounded-2xl p-5">
                <div className="h-full flex items-center border-2 border-customcyan rounded-2xl p-2">
                  <img
                    className="w-80 rounded-xl"
                    src={userImage}
                    alt="image"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold">{product?.user.name}</span>
                  <span>{product?.user.address}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center border-2 bg-customcyan rounded-2xl p-3 text-white font-semibold duration-300 hover:cursor-pointer  active:scale-95">
            Add to cart
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-5 mx-40 mt-5 mb-10 border-2 border-customcyan p-10 rounded-b-3xl">
        <span className="text-customcyan font-semibold">Description</span>
        <span>{product?.description}</span>
      </section>
      {owner && (
        <div className="flex justify-center gap-20 mb-20">
          <form onSubmit={(e) => handleEditProduct(e)}>
            <label htmlFor="my-modal-1">
              <p className="text-4xl flex justify-center rounded-xl w-40 py-2 duration-300 hover:cursor-pointer active:scale-90 bg-customcyan text-gray-50">
                <FaPenSquare />
              </p>
            </label>
            <input type="checkbox" id="my-modal-1" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box border-2 border-customcyan flex flex-col justify-center text-customcyan">
                <p className="mb-5 pb-2 text-xl border-b-2 font-medium">
                  Update Product
                </p>
                <div className="flex justify-center gap-5">
                  <div className="flex flex-col gap-5">
                    <p className="py-1">Name:</p>
                    <p className="py-1">Stock:</p>
                    <p className="py-1">Price:</p>
                    <p className="py-1">Description:</p>
                    <p className="py-3">Select Image:</p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <input
                      onChange={(e) => setProductName(e.target.value)}
                      type="text"
                      placeholder="Type new name"
                      className="input input-bordered input-sm w-96 max-w-xs border-customcyan"
                    />
                    <input
                      onChange={(e) => setStock(e.target.value)}
                      type="text"
                      placeholder="Type new stock"
                      className="input input-bordered input-sm w-full max-w-xs border-customcyan"
                    />
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      type="text"
                      placeholder="Type new price"
                      className="input input-bordered input-sm w-full max-w-xs border-customcyan"
                    />
                    <input
                      onChange={(e) => setDescription(e.target.value)}
                      type="text"
                      placeholder="Type new description"
                      className="input input-bordered input-sm w-full max-w-xs border-customcyan"
                    />
                    <input
                      onChange={(e) => setEditFile(e.target.files?.[0])}
                      type="file"
                      className="file-input file-input-bordered w-full border-2 border-customcyan max-w-xs"
                    />
                  </div>
                </div>
                <div className="modal-action">
                  <button
                    type="submit"
                    className="w-20 text-sm text-center border-2 border-customcyan bg-customcyan rounded-xl py-1 text-gray-50 font-medium duration-300 hover:cursor-pointer  active:scale-90"
                  >
                    Update
                  </button>
                  <label
                    htmlFor="my-modal-1"
                    className="w-20 text-sm text-center border-2 border-customcyan rounded-xl py-1 text-customcyan font-medium duration-300 hover:cursor-pointer  active:scale-90"
                  >
                    Cancel
                  </label>
                </div>
              </div>
            </div>
          </form>
          <form>
            <label htmlFor="my-modal-8">
              <p className="text-4xl flex justify-center rounded-xl w-40 py-2 duration-300 hover:cursor-pointer active:scale-90 bg-red-600 text-gray-50">
                <FaTrashAlt />
              </p>
            </label>
            <input type="checkbox" id="my-modal-8" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box border-2 border-customcyan">
                <p className="mb-5 pb-2 text-xl border-b-2 font-medium text-customcyan">
                  Delete Product
                </p>
                <div className="flex flex-col px-5">
                  <p className="text-base font-medium text-justify">
                    Are you sure want to delete this product?
                  </p>
                </div>
                <div className="modal-action">
                  <button
                    onClick={(e) => handleDeleteProduct(e)}
                    type="submit"
                    className="w-36 text-sm text-center border-2 border-red-600 bg-red-600 rounded-xl py-1 text-gray-50 font-medium duration-300 hover:cursor-pointer  active:scale-90"
                  >
                    Delete Account
                  </button>
                  <label
                    htmlFor="my-modal-8"
                    className="w-20 text-sm text-center border-2 border-customcyan rounded-xl py-1 text-customcyan font-medium duration-300 hover:cursor-pointer active:scale-90"
                  >
                    Cancel
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </Layout>
  );
};

export default DetailProduct;
