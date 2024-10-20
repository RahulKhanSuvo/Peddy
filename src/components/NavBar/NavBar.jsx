import logo from "../../assets/logo.webp";
import { IoPersonOutline } from "react-icons/io5";
const NavBar = () => {
  return (
    <div className="flex justify-between mt-9">
      <div className="flex items-center">
        <img src={logo} alt="" />
        <span className="font-black">Peddy</span>
      </div>
      <div className="flex items-center gap-8">
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
