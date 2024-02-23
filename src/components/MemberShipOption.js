import React from "react";

function MembershipOption({ options }) {
  return (
    <div>
      <h1
        style={{ fontFamily: "Oswald, sans-serif" }}
        className="font-bold text-3xl sm:text-5xl lg:text-7xl text-center mt-20 mb-20"
      >
        Membership Options
      </h1>

      <div className="container mx-auto">
        <div className="w-4/5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-2 md:gap-8">
          {options.map((option, index) => (
            <div
              key={index}
              className=" rounded-md shadow-md overflow-hidden mb-20 "
            >
              <div className="text-center h-full bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a
                  href="#"
                  className="flex text-[18px] flex-col no-underline hover:no-underline"
                >
                  <div
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    className="font-bold text-3xl text-gray-800 px-6 my-10"
                  >
                    {option.title}
                  </div>
                  {option.features.map((feature, index) => (
                    <p key={index} className="m-2">
                      {feature}
                    </p>
                  ))}
                </a>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow rounded-full h-full">
                  <div className="flex items-center justify-center">
                    <div className="mt-[64px] mb-11">
                      <button className="font-bold text-white bg-[#F1900E] py-3 px-5  rounded-full  hover:opacity-80 hover:scale-105">
                        INQUIRE FOR RATES
                      </button>
                    </div>
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

export default MembershipOption;
