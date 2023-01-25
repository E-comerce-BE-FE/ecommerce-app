const SummaryCard = () => {
    return (
      <div className="w-full bg-gray-50 shadow-md items-center px-10 py-2 flex justify-between rounded-box">
        <section className="flex gap-5">
            <img src="src/assets/shirt.png" alt="shirt" className="w-28" />
            <div className="flex flex-col py-2">
                <p className="font-semibold">Product Name</p>
                <p>Total Item: 1pcs</p>
            </div>
        </section>
        <section>
            <div className="flex flex-col items-end text-end gap-2">
                <p className="font-semibold">Rp 100000,-</p>
            </div>
        </section>
      </div>
    );
  };
  
  export default SummaryCard;
  