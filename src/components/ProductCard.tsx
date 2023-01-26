import { Link } from "react-router-dom";

const ProductCard = (props: any) => {
  const { productData } = props;

  return (
    <Link to={`/detail-product/${productData.id}`}>
      <div className="card card-compact w-full h-full bg-gray-300 shadow-xl p-3 duration-300 hover:cursor-pointer hover:scale-105 active:scale-100 rounded-box">
        <figure className="pb-3 w-full">
          <img
            src={productData.product_images}
            alt="Shoes"
            className="rounded-xl duration-300 hover:scale-105 h-60"
          />
        </figure>
        <h2 className="card-title">{productData.product_name}</h2>
        <p>{productData.address}</p>
        <p className="font-semibold">{productData.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
