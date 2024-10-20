import { useState } from "react";

const SortBtn = ({ handelSortBtn }) => {
  const [isSort, setIsSort] = useState(true);
  const handelShortClick = () => {
    setIsSort(!isSort);
    handelSortBtn(isSort);
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-bold">Best Deal For you</h3>
        <button
          onClick={handelShortClick}
          className="rounded-lg text-white font-bold px-8 py-3 bg-[#0E7A81] hover:bg-[#0C6A70] hover:shadow-lg transition-all duration-300"
        >
          Sort by Price
        </button>
      </div>
    </div>
  );
};

export default SortBtn;
