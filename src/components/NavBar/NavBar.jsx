import logo from "../../assets/logo.webp";
import { IoPersonOutline } from "react-icons/io5";
const NavBar = () => {
  return (
    <div className="flex font-lato justify-between mx-4 mt-2 md:mt-9">
      <div className="flex gap-2 md:gap-4 items-center">
        <img src={logo} alt="" />
        <span className="font-black text-2xl md:text-3xl">Peddy</span>
      </div>
      <div className=" hidden md:flex items-center gap-8">
        <a href="">Home</a>
        <a href="">Shop</a>
        <a href="">Contact</a>
      </div>
      <div className=" border rounded-full">
        <div className="w-11 h-11 flex items-center justify-center text-2xl">
          <IoPersonOutline />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
