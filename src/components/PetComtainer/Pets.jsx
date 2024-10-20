import Pet from "../Pet/Pet";
import SortBtn from "../SortBtn/SortBtn";

const Pets = ({ pets }) => {
  return (
    <div className="mx-4">
      <SortBtn></SortBtn>
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
    </div>
  );
};

export default Pets;
