import React, { useState } from "react";
import { assets } from "../../assets/images/assets";

const TopNav = () => {
  const [selectlang, setSelectlang] = useState("English");
  const LangItems = ["Hindi", "English", "Arabic"];
  return (
    <>
      <div className="top-nav">
        <div className="top-nav-wrapper">
          <div className="content">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>{" "}
            <a href="#">ShopNow</a>
          </div>
          <div className="lang-dropdown">
            <div className="text">{selectlang}</div>
            <div className="arrow-icon">
              <img src={assets.TopArrow} alt="vector-arrow" />
            </div>
            <div className="dropdown-wrapper">
              <ul>
                {LangItems.map((item) => {
                  return (
                    <li
                      onClick={() => {
                        setSelectlang(item);
                      }}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
