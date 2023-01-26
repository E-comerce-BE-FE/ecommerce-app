import {useState, useEffect} from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import axios from "axios";

import Layout from "components/Layout";
import Navbar from "components/Navbar";

interface TypeProduct{
  id: number;
  product_name: string;
  stock: number;
  price: number;
  product_image: string;
  user: User;
}

interface User{
  user_id: number;
  name: string;
  address: string;
  profilepicture: string;
}

const DetailProduct = () => {
  const {id} = useParams()

  const [product, setProduct] = useState<TypeProduct>();
  useEffect(() => {
    fetchData();
  }, []);


  function fetchData() {
    axios
      .get(
        `products/${id}`
      )
      .then((res) => {
        setProduct(res.data.data)
      })
      .catch((err) => {
        alert(err());
      })
  }

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
          <img src={product?.product_image} alt="image" />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-5 w-3/5">
              <div className="font-bold text-xl">{product?.product_name}
              </div> 
              <div className="text-gray-500">{product?.stock}</div>
              <div className="w-fit py-2 px-5 mt-1 border-2 border-customcyan rounded-xl text-center">
                {product?.price}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-5 border-2 border-customcyan rounded-2xl p-5">
                <div className="h-full flex items-center border-2 border-customcyan rounded-2xl p-5">
                  <img className="w-20" src={product?.user.profilepicture} alt="image" />
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
        <span>
          Model Layaknya baju kebanyakan, model pasti jadi salah satu
          pertimbangan utama ketika seseorang memilih baju, termasuk gamis.
          Beberapa hal yang seringkali menjadi pertimbangan adalah model kancing
          samping, model pergelangan tangan dan model lipit di bagian badan
          gamis. Bagaimana baju gamis jatuh di tubuh ketika dikenakan juga jadi
          hal yang penting. Ukuran Deskripsi baju gamis yang lengkap dapat
          meyakinkan pelanggan untuk membeli produk Anda, termasuk dengan
          menyertakan berbagai ukuran baju yang memang sesuai antara yang Anda
          tuliskan dan sesungguhnya. Kualtias Bahan Selain itu, bahan yang
          nyaman, ringan, tidak mudah rusak serta menyerap keringat juga
          biasanya menjadi pilihan banyak pembeli. Harga Setelah semuanya cocok
          baik dari segi model, ukuran, dan kualitas bahan, akhirnya harga yang
          menjadi penentuan. Memang harga sesuai dengan kualitas namun pastikan
          Anda menjelaskan kenapa produk Anda memang memiliki harga yang relatif
          lebih mahal, misalnya dari segi bahan yang langka dan berkualitas.
        </span>
      </section>
    </Layout>
  );
};

export default DetailProduct;
