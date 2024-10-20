import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <>
      <div className="container mx-auto">
        <NavBar></NavBar>
        <Banner></Banner>
      </div>
    </>
  );
};

export default Header;
