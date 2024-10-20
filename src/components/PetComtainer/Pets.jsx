import Pet from "../Pet/Pet";
import SortBtn from "../SortBtn/SortBtn";
import PropTypes from "prop-types";
import noInfo from "../../assets/error.webp";
const Pets = ({ pets, handelSortBtn }) => {
  return (
    <div className="mx-4 mb-11">
      <SortBtn handelSortBtn={handelSortBtn}></SortBtn>

      <div className="grid lg:grid-cols-4">
        <div className="col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
            {pets.map((pet) => (
              <Pet key={pet.petId} pet={pet}></Pet>
            ))}
          </div>
        </div>
        <div></div>
      </div>
      <div className={`${pets.length && "hidden"}`}>
        <div className="flex py-24 rounded-3xl bg-[#F8F8F8]  flex-col items-center text-center">
          <img src={noInfo} alt="" />
          <h3 className="font-inter text-3xl font-bold">
            No Information Available
          </h3>
          <p className="font-lato">
            Unfortunately, we couldn't find any information for the selected
            category at this time. Please check back later or explore other
            available options. <br />
            Our team is constantly updating the database to ensure the best
            experience for pet lovers like you.
          </p>
        </div>
      </div>
    </div>
  );
};
Pets.propTypes = {
  pets: PropTypes.array,
  handelSortBtn: PropTypes.func,
};
export default Pets;
