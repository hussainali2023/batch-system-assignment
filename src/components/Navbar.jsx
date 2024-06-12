import Logo from "../assets/Group.png";
const Navbar = () => {
  return (
    <div className=" flex justify-between mt-4">
     <div className=" flex">
     <div>
        <img src={Logo} alt="" />
      </div>
      <div className="  flex ml-20 mt-2 list-none gap-8 text-xl font-bold">
        <li className="text-red-500">Home</li>
        <li>About Us</li>
        <li>Pricing</li>
        <li>Features</li>
      </div>
     </div>
      <div>
        <button className=" bg-black text-white font-bold px-8 py-2 text-base">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
