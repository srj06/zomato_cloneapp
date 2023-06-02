import React from "react";
import "./header.css";
import {  CiLocationOn } from "react-icons/ci";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSearch  } from "react-icons/bi";
import { AiOutlineDown  } from "react-icons/ai";
 

const Header = () => {
  return (
  <div className="max-width header"> 
      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
      alt="Zomato-logo"
      className="header-logo"
      />
      <div className="header-right">
          <div className="header-location-search-container">
              <div className="location-wrapper">
                 <div className="location-icon-name">
                    <div className="absolute-center location-icon">
                    <div>
                     < CiLocationOn />
                        </div>
                        </div>
                        <div className="absolute-center">
                 <div>Bengaluru </div>
                     </div>
                     </div>
                     <div className="absolute-center">
                     <div><AiFillCaretDown  /></div>
                 </div>
                 </div>
                 <div className="location-search-separator"></div>
                 <div className="header-searchbar"></div>
                 <div className="absolute-center search-icon">
                 <div><BiSearch /></div>
                 <input placeholder="Search here" className="search-input " />
                 </div>
             </div>
             <div className="profile-wrapper">
                <img src="https://b.zmtcdn.com/data/user_profile_pictures/693/c56f235fffd3b573f610bf8eb0b40693.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="profile" className="header-profile-image" />
                    <span className="header-username">Suraj</span>
                    <div className="absolute-center profile-options-icons">
                    <div><AiOutlineDown /></div>
                    </div>
             </div>
        </div>
  </div>
  
  
  );
  };

export default Header;