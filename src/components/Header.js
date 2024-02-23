import React from "react";
import BgImage from "./BgImage";
import Discover from "./Discover";
import MemberShipOption from "./MemberShipOption";

export default function Header() {
  const membershipOptions = [
    {
      title: "Health",
      features: [
        "Unlimited classes",
        "Daily Locker",
        "Fitness Evaluation",
        "Guest Passes",
        "1 PT Sessionure",
      ],
    },
    {
      title: "Health Plus",
      features: [
        "Health's Features +",
        "Laundry Service",
        "Overnight Locker",
        "Guest Passes",
        "3 PT Sessionure",
      ],
    },
    {
      title: "Other",
      features: [
        "Corporate",
        "Neighborhood",
        "Student",
        "Guest Passes",
        "Spousal",
      ],
    },
  ];

  const discovers = [
    {
      imgUrl: "https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/h.jpg",
      title: "ersonal Training",
      desc: "This apartment features an electric kettle, sofa, and private entrance.",
    },
    {
      imgUrl:
        "https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/jjjjj.jpg",
      title: "Fitness Classes",
      desc: "In the room, designed by Space Copenhagen, every detail is",
    },
    {
      imgUrl: "https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/hhhh.jpg",
      title: "Combine activities",
      desc: "This apartment has a dining area, private entrance and kitchen.",
    },
    {
      imgUrl: "https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/vvv.jpg",
      title: "Boxing Classes",
      desc: "This apartment has a dining area, private entrance and kitchen.",
    },
    {
      imgUrl:
        "https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/hhhh-16.jpg",
      title: "Trx Training",
      desc: "This apartment has a dining area, private entrance and kitchen.",
    },
    {
      imgUrl: "https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/ffff.jpg",
      title: "ePilates and Yoga",
      desc: "This apartment has a dining area, private entrance and kitchen.",
    },
    {
      imgUrl:
        "https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/full-shot-people-barre-group-cla.jpg",
      title: "Barre",
      desc: "This apartment has a dining area, private entrance and kitchen.",
    },
    {
      imgUrl: "https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/9067.jpg",
      title: "Cycling",
      desc: "This apartment has a dining area, private entrance and kitchen.",
    },
    {
      imgUrl: "https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/765.jpg",
      title: "Strength",
      desc: "This apartment has a dining area, private entrance and kitchen.",
    },
  ];

  return (
    <div className="bg-gray-200 ">
      <div className="header bg-gray-200">
        <nav
          className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
          id="header"
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse no-underline"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black no-underline">
                LOGO
              </span>
            </a>
            <button
              id="menuu"
              data-collapse-toggle="navbar-hamburger"
              type="button"
              className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-hamburger"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
      <BgImage />
      <Discover discovers={discovers} />
      <MemberShipOption options={membershipOptions} />
    </div>
  );
}
