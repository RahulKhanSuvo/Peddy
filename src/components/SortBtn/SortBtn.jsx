const SortBtn = ({ handelSortBtn }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-bold">Best Deal For you</h3>
        <button
          onClick={handelSortBtn}
          className="rounded-lg text-white font-bold px-8 py-3 bg-[#0E7A81] hover:bg-[#0C6A70] hover:shadow-lg transition-all duration-300"
        >
          Sort by Price
        </button>
      </div>
    </div>
  );
};

export default SortBtn;
