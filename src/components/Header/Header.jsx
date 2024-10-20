import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import NavBar from "../NavBar/NavBar";
import Pets from "../PetComtainer/Pets";

const Header = () => {
  const [pets, setPets] = useState([]);
  // console.log(pets);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
      .then((res) => res.json())
      .then((data) => setPets(data.pets));
  }, []);
  return (
    <>
      <div className="container mx-auto">
        <NavBar></NavBar>
        <Banner></Banner>
        <Categories></Categories>
        <Pets pets={pets}></Pets>
      </div>
    </>
  );
};

export default Header;
