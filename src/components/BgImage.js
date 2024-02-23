import React from "react";

export default function BgImage() {
  return (
    <div id="slider" className="" style={{ fontFamily: "Oswald, sans-serif" }}>
      <div
        className="relative rounded-md overflow-hidden bg-cover object-fit"
        style={{
          backgroundImage:
            "url('https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/young-woman-boxer-training-gym-min.jpg')",
          height: "80vh",
        }}
      >
        <div className="absolute inset-0 bg-[#F1900E] opacity-5"></div>
        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full lg:pl-40 sm:pl-auto">
          <div className="px-4 lg:px-10 w-full lg:w-2/3">
            <h2 className="text-white w-4/6 text-3xl sm:text-5xl sm:leading-tight font-bold mb-8">
              Each program is a masterclass created by experts to elevate your
              emotional well-being
            </h2>
            <p
              style={{ fontFamily: "Open Sans, sans-serif" }}
              className="mb-10 w-4/6 text-white text-base sm:text-lg lg:text-base break-words text-left font-open-sans"
            >
              Workout whenever, wherever and however you like – indoors,
              outdoors and online. Enjoy the most flexible sports and wellness
              offer in Europe!
            </p>
            <button className="flex items-center mt-4 px-6 py-4 bg-[#F1900E] hover:opacity-80 text-white text-sm uppercase focus:outline-none rounded-full font-open-sans">
              <span className="font-bold">Discover Location</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
