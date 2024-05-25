import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { aboutCompany, contact, locationObject } from "../utils/constants";
import { useContext } from "react";
import userContext from "../utils/UserContext";

const Footer = () => {

    const {greeting}=useContext(userContext); // userContext
  return (
    <footer className="bg-white ">
      <div className="max-w-[1200px] max-h-[230px] p-10">
        <div className="flex justify-between">
          <ul className="flex flex-col ">
            <li className="flex items-center">
              <Link to="/">
                <img src={logo} alt="logo" className="w-24 inline mr-3" />
              </Link>
              <span className="font-semibold text-2xl ">TheFoodMood</span>
            </li>
            <li className="text-gray-400 my-2">
              &copy; 2024 TFM Technologies Pvt. Ltd
            </li>
          </ul>
          <ul className="flex flex-col">
            <li className="font-semibold text-xl mb-1 text-orange-500">Company</li>
            {aboutCompany.map((item, ind) => (
              <li
                key={ind}
                className="text-gray-400 hover:text-orange-500  cursor-pointer my-1"
              >
                {item}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col">
            <li className="font-semibold text-xl mb-1 text-orange-500">Contact Us</li>
            {contact.map((item, ind) => (
              <li
                key={ind}
                className="text-gray-400 hover:text-orange-500 cursor-pointer my-1"
              >
                {item}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col ">
            <li className="font-semibold text-xl text-orange-500">We Deliver to:</li>

            {locationObject.map((loc, ind) => (
              <li
                key={ind}
                className="text-gray-400 hover:text-orange-500 cursor-pointer my-1"
              >
                {loc.city}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="py-6 absolute left-2/4 -translate-x-2/4">{greeting}</p> 
    </footer>
  );
};

export default Footer;