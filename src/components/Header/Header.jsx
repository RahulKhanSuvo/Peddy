import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import NavBar from "../NavBar/NavBar";
import Pets from "../PetComtainer/Pets";

const Header = () => {
  const [pets, setPets] = useState([]);
  const [isCategory, setIsCategories] = useState("");
  useEffect(() => {
    const url = isCategory
      ? `https://openapi.programming-hero.com/api/peddy/category/${isCategory}`
      : `https://openapi.programming-hero.com/api/peddy/pets`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPets(isCategory ? data.data : data.pets);
      });
  }, [isCategory]);
  const handelSortBtn = () => {
    const sortedPets = [...pets].sort((a, b) => b.price - a.price);
    setPets(sortedPets);
  };
  return (
    <>
      <div className="container mx-auto">
        <NavBar></NavBar>
        <Banner></Banner>
        <Categories setIsCategories={setIsCategories}></Categories>
        <Pets handelSortBtn={handelSortBtn} pets={pets}></Pets>
      </div>
    </>
  );
};

export default Header;
