import React from "react";

import bg1 from "../assets/images/bg1.jpg";
import car1 from "../assets/images/car1.png";
import img3 from "../assets/banner/img3.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="relative pt-28 pb-32 overflow-hidden"
      style={{
        background: `url(${bg1}) center `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        backgroundColor: "#0000007a",
      }}
    >
      <div className="container">
        <div>
          <p className="text-lg text-white font-semibold">
            Travel securely with us!
          </p>
          <h1 className="text-5xl text-white font-bold my-4">
            Book your taxi from
            <br />
            anywhare today!
          </h1>
          <p className="text-lg text-gray-200 font-normal mb-7">
            Everything your taxi business needs is already here! <br />
            Ridek made for taxi service companies!
          </p>
        </div>

        <div class="mt-4">
          <Link
            className="text-white px-[30px] text-md py-2.5 bg-[#f90] hover:bg-[#F36A4F] hover:text-white hover:border-current transition-all duration-200"
            href={"#"}
          >
            Book a Taxi
          </Link>
        </div>
        <div className="hidden lg:block absolute right-0 top-0 ">
          <img
            className=" w-[100%] pt-14 z-[9999] relative"
            src={car1}
            alt=""
          />
          <div
            style={{ transform: "skew(-20deg,0deg)" }}
            className="absolute right-28 top-0 w-[450px] h-[112%] flex transform skew-x-0 z-[1] "
          >
            <div className="self-end bg-[#222] w-[100px] h-[80%] relative"></div>
            <div className=" bg-[#f90] w-[200px] h-full relative"></div>
            <div className=" bg-[#222] w-[100px] h-[80%] relative"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
