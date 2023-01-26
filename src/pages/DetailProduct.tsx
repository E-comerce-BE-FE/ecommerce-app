import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import Layout from "components/Layout";
import Navbar from "components/Navbar";

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
  const { id } = useParams();
  const [cookie] = useCookies(["token"]);
  const [product, setProduct] = useState<TypeProduct>();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`https://shirayuki.site/products/${id}`, {
        headers: { Authorization: `Bearer ${cookie.token}` },
      })
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => {
        alert(err());
      });
  };

  // const [update, setUpdate] = useState<TypeProduct>();
  // useEffect(()=>{
  //   data();
  // }, [])
  // function data(){
  //   axios.put(`product/${id}`);
    
  // }


  return (
    <Layout>
      <Navbar />
      <section className="flex justify-center items-center gap-10 mx-40 border-2 border-customcyan p-10 rounded-t-3xl">
        <div className="border-2 border-customcyan rounded-2xl">
          <img
            src={product?.product_image}
            alt="image"
            className="w-80 h-80 m-2 rounded-2xl"
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
                <div className="h-full flex items-center border-2 border-customcyan rounded-2xl p-5">
                  <img
                    className="w-20"
                    src={product?.user.profilepicture}
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
      <section className="flex flex-col gap-5 mx-40 mt-5 mb-20 border-2 border-customcyan p-10 rounded-b-3xl">
        <span className="text-customcyan font-semibold">Description</span>
        <span>{product?.description}</span>
      </section>
    </Layout>
  );
};

export default DetailProduct;
