import Logo from "../assets/Group.png";
const Navbar = () => {
  return (
    <div className=" flex justify-between mt-4">
     <div className=" flex">
     <div>
        <img src={Logo} className="" alt="" />
      </div>
      <div className="  flex ml-2 md:ml-20 mt-1 md:mt-2 list-none gap-2 md:gap-8 text-sm md:text-xl font-medium md:font-bold">
        <li className="text-red-500">Home</li>
        <li>About Us</li>
        <li>Pricing</li>
        <li>Features</li>
      </div>
     </div>
      <div>
        <button className=" bg-black text-white font-medium md:font-bold px-3 md:px-8 py-2 text-sm md:text-base">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
