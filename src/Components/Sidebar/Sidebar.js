import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faClock,
  faHeart,
  faShoppingCart,
  faSearchDollar,
  faUser,
  faClockFour,
  faMessage,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import logo from "../../images/speaker.png";

const Sidebar = () => {
  return (
    <>
      <div className="drawer drawer-mobile w-[22%]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* Sidebar content here */}
            <li className="mb-6">
              <a href="/" className="font-bold text-4xl">
                <img src={logo} alt="Logo"></img>MK Sounds
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon className="pr-3 text-violet-400" icon={faHouseUser} />
                Home
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon className="pr-3 text-violet-400" icon={faClock} />
                Explore
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon className="pr-3 text-violet-400" icon={faHeart} />
                Saved
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon className="pr-3 text-violet-400" icon={faShoppingCart} />
                Cart
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon className="pr-3 text-violet-400" icon={faSearchDollar} />
                Selling
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon className="pr-3 text-violet-400" icon={faUser} />
                Profile
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon className="pr-3 text-violet-400" icon={faClockFour} />
                History
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon className="pr-3 text-violet-400" icon={faMessage} />
                Contact Us
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon className="pr-3 text-violet-400" icon={faGear} />
                Settings
              </a>
            </li>
          </ul>
          <div>
            <div className="card w-full bg-violet-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title font-bold">Need Help</h2>
                <p className="text-justify">
                  If a dog chews shoes whose shoes <br /> does he choose?
                </p>
                <div className="card-actions justify-start">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
