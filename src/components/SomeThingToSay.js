import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGooglePlusG,
} from "react-icons/fa";

export default function SomethingToSay() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  const closeToast = async (e) => {
    setShowSuccessToast(false);
  };

  const handleSubmit = async (e) => {
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 3000);

    e.preventDefault();

    const response = await fetch(
      "https://hook.eu2.make.com/4u0ejvj2xoc8p31oc8xbcut4wrsdyxbk",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          title: name,
          phone: phone,
          email: email,
        }),
      }
    );
    const data = await response.json();
    console.log("data :", data);

    // Show success toast
  };

  return (
    <div id="somethingToSay" className="mt-10">
      {showSuccessToast && (
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          id="toast-success"
          className="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ms-3 text-sm font-normal">
            Item moved successfully.
          </div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            onClick={() => setShowSuccessToast(false)}
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}
      <h1
        data-aos="fade-up"
        data-aos-duration="2000"
        className="font-bold text-3xl sm:text-3xl lg:text-5xl text-center mb-10 "
      >
        Have Something To Say?
      </h1>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="container w-3/5 mx-auto bg-gray-200 mb-10"
      >
        <div id="form" className="flex flex-col md:flex-row md:-mx-4 p-10 ">
          <div
            id="textt"
            className="w-full md:w-3/6 text-wrap container-fluid flex flex-col justify-center items-center mx-2 md:order-2"
          >
            <h3
              style={{ fontFamily: "Open Sans, sans-serif" }}
              className="text-[#808080] text-[20px] text-center"
            >
              Let us know your questions, suggestions, and concerns by filling
              out the contact form below.
            </h3>
            <div className="flex justify-center mt-4">
              <i className="mx-2">
                <FaFacebook />
              </i>
              <i className="mx-2">
                <FaTwitter />
              </i>
              <i className="mx-2">
                <FaInstagram />
              </i>
              <i className="mx-2">
                <FaGooglePlusG />
              </i>
            </div>
          </div>

          <div
            id="input-info"
            className="md:container md:mx-auto flex-1 md:order-2"
          >
            <form id="post-form" onSubmit={handleSubmit} className="md:w-full">
              <div className="w-full px-3">
                <label
                  className="block text-lg tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div
                id="phone-email-input"
                className="flex flex-col md:flex-row md:justify-between"
              >
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block text-lg tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone"
                    required
                  />
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block text-lg tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  className=" hover:opacity-80 font-bold w-[95%] text-white bg-[#F1900E] py-4 rounded-full"
                  type="submit"
                >
                  CONTACT US
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
