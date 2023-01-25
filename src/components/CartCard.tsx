const CartCard = () => {
  return (
    <div className="w-full bg-gray-50 shadow-md items-center px-10 py-2 flex justify-between rounded-box">
      <section className="flex gap-5">
        <img src="src/assets/shirt.png" alt="shirt" className="w-28" />
        <div className="flex flex-col">
          <p className="font-semibold">Product Name</p>
          <p>Seller: Name</p>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-end text-end gap-2">
          <p className="font-semibold">Rp 100000,-</p>
          <div className="btn-group rounded-xl text-center w-full">
            <button className="rounded-l-xl  w-fit px-2 border-2 border-customcyan duration-300 active:scale-90">
              -
            </button>
            <button className="w-full px-2 border-y-2 border-customcyan hover:cursor-default ">
              1
            </button>
            <button className="rounded-r-xl w-fit px-2 border-2 border-customcyan text-center duration-300 active:scale-90">
              +
            </button>
          </div>
          <span className="px-4 w-fit rounded-xl border-2 border-customcyan text-red-600 font-semibold hover:cursor-pointer duration-300 active:scale-90">
            Remove
          </span>
        </div>
      </section>
    </div>
  );
};

export default CartCard;
