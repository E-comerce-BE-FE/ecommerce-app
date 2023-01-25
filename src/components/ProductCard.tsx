const ProductCard = () => {
  return (
    <div className="card card-compact w-fit bg-gray-300 shadow-xl items-center p-3 duration-300 hover:cursor-pointer hover:scale-105 active:scale-100 rounded-box">
      <figure className="pb-3 w-full">
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          className="rounded-xl duration-300 hover:scale-105"
        />
      </figure>
      <h2 className="card-title">Product Name</h2>
      <p>City Address</p>
      <p className="font-semibold">Price</p>
    </div>
  );
};

export default ProductCard;
