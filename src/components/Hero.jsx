import Phone from "../assets/Frame 1.png";
import Iphone from "../assets/iPhone-13-Pro-Front.png";
import Iphone2 from "../assets/iPhone-13-Pro-Front (1).png";
import Achievement from "../assets/Group 35924.png"

const Hero = () => {
  return (
    <div className="flex-col-reverse md:grid grid-cols-2">
      <div className=" mt-32 relative">
        <div className=" absolute top-0 right-4 h-72 w-72 rounded-full bg-[#FF5555] mix-blend-multiply filter blur-3xl"></div>
        <div className=" absolute -top-8 right-4 h-72 w-72 rounded-full bg-[#FDE598] mix-blend-multiply filter blur-3xl"></div>
        <div className="">
          <h1 className=" text-6xl font-extrabold">
            Make The Best Financial Decisions
          </h1>
          <p className=" my-6">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
        </div>
        <div className="flex gap-6">
          <button className=" bg-black text-white font-black px-6 py-2 text-base rounded-md">
            Get Started
          </button>
          <button className=" border bottom-1 border-gray-300 rounded-md px-6 py-2">
            Watch Video
          </button>
        </div>
        <div className=" mt-10">
          <img src={Achievement} alt="" />
        </div>
      </div>
      <div className="relative">
        <img src={Iphone2} className=" absolute  " />
        <img src={Iphone} className=" absolute" />
        <img src={Phone} className=" absolute right-50 " />
      </div>
        <div className=" relative left-full">
        <div className=" absolute bottom-12 mix-blend-multiply blur-3xl bg-red-600 w-60 h-60 rounded-full"></div>
        <div className=" absolute bottom-0 mix-blend-multiply blur-3xl bg-yellow-400 w-60 h-60 rounded-full"></div>
        </div>
    </div>
  );
};

export default Hero;
