import React from "react";
import { assets } from "../../assets/images/assets";

const ProductDropDown = () => {
  return (
    <>
      <div className="sidenav">
        <div className="p-dropdown-wrapper">
          <ul>
            <li className="dropdown">
              <input type="checkbox" />
              <a href="#" data-toggle="dropdown">
                Woman’s Fashion
              </a>
              <img
                src={assets.DropdownArrow}
                className="dropdown-arrow-p"
                alt="dropdown"
              />
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <input type="checkbox" />
              <a href="#" data-toggle="dropdown">
                Men’s Fashion
              </a>
              <img
                src={assets.DropdownArrow}
                className="dropdown-arrow-p"
                alt="dropdown"
              />
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <input type="checkbox" />
              <a href="#">Electronics</a>
            </li>
            <li className="dropdown">
              <input type="checkbox" />
              <a href="#">Home & Lifestyle</a>
            </li>
            <li className="dropdown">
              <input type="checkbox" />
              <a href="#">Medicine</a>
            </li>
            <li className="dropdown">
              <input type="checkbox" />
              <a href="#">Sports & Outdoor</a>
            </li>
            <li className="dropdown">
              <input type="checkbox" />
              <a href="#">Baby’s & Toys</a>
            </li>
            <li className="dropdown">
              <input type="checkbox" />
              <a href="#">Groceries & Pets</a>
            </li>
            <li className="dropdown">
              <input type="checkbox" />
              <a href="#">Health & Beauty</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductDropDown;
