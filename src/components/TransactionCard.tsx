const TransactionCard = () => {
    return (
      <div className="w-full bg-gray-50 shadow-md items-center px-10 py-2 flex justify-between rounded-box">
        <section className="flex gap-5">
          <img src="src/assets/shirt.png" alt="shirt" className="w-28" />
          <div className="flex flex-col">
            <p className="font-normal">Transaction</p>
            <p className="font-medium">Total Item: 1</p>
            <p className="font-semibold">01/01/202</p>
          </div>
        </section>
        <section>
          <div className="flex flex-col items-end text-end gap-2">
            <p className="font-extrabold">Rp 100000,-</p>
            <p className="font-bold text-orange-600">Pending</p>
            <p className="font-medium">Transaction Code:</p>
          </div>
        </section>
      </div>
    );
  };
  
  export default TransactionCard;
  