import { CiGrid41, CiCalendar } from "react-icons/ci";
import { TbGenderHermaphrodite } from "react-icons/tb";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
const Pet = ({ pet }) => {
  const { image, pet_name, breed, gender, date_of_birth, price } = pet;
  return (
    <div className="border p-5 rounded-xl">
      <img className="w-full h-52 object-cover rounded-xl" src={image} alt="" />
      <div className="space-y-2 mt-6 pb-4 border-b">
        <div className=" ">
          <h3 className="font-inter font-bold text-lg">{pet_name}</h3>
        </div>
        <div>
          <p className="flex gap-1 items-center">
            <CiGrid41 />
            Breed: {breed}
          </p>
          <p className="flex gap-1 items-center">
            <TbGenderHermaphrodite />
            Birth: {date_of_birth}
          </p>
          <p className="flex gap-1 items-center">
            <CiCalendar />
            Gender: {gender}
          </p>
          <p className="flex gap-1 items-center">
            <PiCurrencyDollarSimpleBold />
            Price: {price} $
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4">
        <button className="border flex justify-center items-center rounded-lg py-3 font-bold hover:bg-[#0E7A81] hover:text-white  text-xl px-6">
          <AiOutlineLike />
        </button>
        <button className="border flex justify-center items-center rounded-lg py-2 text-[#0E7A81]  hover:bg-[#0E7A81] hover:text-white  text-xl px-6 font-bold">
          Adopt
        </button>
        <button className="border flex justify-center items-center rounded-lg py-2 text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white  text-xl px-6 font-bold">
          Details
        </button>
      </div>
    </div>
  );
};

export default Pet;
