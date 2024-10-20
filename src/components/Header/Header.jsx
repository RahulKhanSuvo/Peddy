import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <>
      <div className="container mx-auto">
        <NavBar></NavBar>
        <Banner></Banner>
        <Categories></Categories>
      </div>
    </>
  );
};

export default Header;
