import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import NavBar from "../NavBar/NavBar";
import Pets from "../PetComtainer/Pets";

const Header = () => {
  const [pets, setPets] = useState([]);
  const [isCategory, setIsCategories] = useState("");
  const [originalPets, setOriginalPets] = useState([]);
  const [likedPets, setLikedPets] = useState([]);
  useEffect(() => {
    const url = isCategory
      ? `https://openapi.programming-hero.com/api/peddy/category/${isCategory}`
      : `https://openapi.programming-hero.com/api/peddy/pets`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPets(isCategory ? data.data : data.pets);
        setOriginalPets(isCategory ? data.data : data.pets);
      });
  }, [isCategory]);
  const handelSortBtn = (i) => {
    if (i) {
      const sortedPets = [...pets].sort((a, b) => b.price - a.price);
      setPets(sortedPets);
    } else {
      setPets(originalPets);
    }
  };
  const hnadelLike = (array) => {
    const id = likedPets.some((a) => a.petId === array.petId);
    console.log(id);
    if (id) {
      alert("already liked");
      return;
    }
    setLikedPets([...likedPets, array]);
  };
  return (
    <>
      <div className="container mx-auto">
        <NavBar></NavBar>
        <Banner></Banner>
        <Categories setIsCategories={setIsCategories}></Categories>
        <Pets
          likedPets={likedPets}
          hnadelLike={hnadelLike}
          handelSortBtn={handelSortBtn}
          pets={pets}
        ></Pets>
      </div>
    </>
  );
};

export default Header;
