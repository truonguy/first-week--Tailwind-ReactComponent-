import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Discover({ discovers }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="Discover" className="">
      <h1
        data-aos="fade-up"
        data-aos-duration="2000"
        style={{ fontFamily: "Oswald, sans-serif" }}
        className="font-bold text-3xl sm:text-5xl lg:text-7xl text-center mt-20 mb-20"
      >
        Discover our live classes
      </h1>

      <div className="container mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="w-4/5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-2 md:gap-8"
        >
          {discovers.map((discover, index) => (
            <div
              key={index}
              className="rounded-md shadow-md overflow-hidden mt-8"
            >
              <div
                className="flex h-80 w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${discover.imgUrl})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="text-center bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a
                  href="#"
                  className="flex flex-col no-underline hover:no-underline"
                >
                  <div className="font-bold text-3xl text-gray-800 px-6 mt-4">
                    {discover.title}
                  </div>
                  <i className="text-gray-800 text-base px-6 mt-4">
                    {discover.desc}
                  </i>
                </a>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow">
                  <div className="flex items-center justify-center">
                    <a
                      href="#"
                      className="mx-auto lg:mx-0 underline text-black font-bold rounded-full my-6 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out py-2 px-4"
                    >
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Discover;
