import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

export default function SomethingToSay() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();  
      alert('success')

      const response = await fetch('https://hook.eu2.make.com/4u0ejvj2xoc8p31oc8xbcut4wrsdyxbk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
          title: name,
          phone: phone,
          email: email 
        })
      });
      const data = await response.json();
      console.log('data :', data);
    } 
 

  return (
    <div id="somethingToSay" className='mt-10'>
        <h1 className="font-bold text-3xl sm:text-3xl lg:text-5xl text-center mb-10 ">Have Something To Say?</h1>
 
        <div className="container w-3/5 mx-auto bg-gray-200 mb-20">
          <div id="form" className="flex flex-col md:flex-row md:-mx-4 p-10 ">
          <div id="textt" className="w-full md:w-3/6 text-wrap container-fluid flex flex-col justify-center items-center mx-2 md:order-2">
              <h3 style={{ fontFamily: 'Open Sans, sans-serif' }} className="text-[#808080] text-[20px] text-center">Let us know your questions, suggestions, and concerns by filling out the contact form below.</h3>
              <div className="flex justify-center mt-4">
                <i className="mx-2"><FaFacebook /></i>
                <i className="mx-2"><FaTwitter /></i>
                <i className="mx-2"><FaInstagram /></i>
                <i className="mx-2"><FaGooglePlusG /></i>
              </div>
            </div>


            <div id="input-info" className="md:container md:mx-auto flex-1 md:order-2">
              <form id="post-form" onSubmit={handleSubmit} className="md:w-full">
                <div className="w-full px-3">
                  <label className="block text-lg tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Enter your name" required />
                </div>

                <div id="phone-email-input" className="flex flex-col md:flex-row md:justify-between">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block text-lg tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                      Phone
                    </label>
                    <input className="appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" 
                    type="text" 
                    id="phone" 
                    name="phone" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    placeholder="Enter your phone" required />
                  </div>

                  <div className="w-full md:w-1/2 px-3">
                    <label 
                    className="block text-lg tracking-wide text-gray-700 text-xs font-bold mb-2" 
                    htmlFor="email">
                      Email
                    </label>
                    <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Enter your email" required />
                  </div>
                </div>

                <div className="flex justify-center mt-4">
                  <button className="font-bold w-[95%] text-white bg-[#F1900E] py-4 rounded-full" type="submit">
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
