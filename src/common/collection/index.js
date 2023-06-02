import React from "react";
import "./collection.css";
import Slider from "react-slick";
import { AiFillCaretRight } from "react-icons/ai";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
const settings = {
   
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
const  Collection = ({ list }) => {
  return (
    <div className="collection-wrapper">
        <div className="max-width collection">
            <div className="Collection-title">Collection</div>
            <div className="collection-subtitle-row">
                <div className="collection-subtitle-text">
                Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends
                </div>
                <div className="collection-location">
                    <div>All Collections in Bengaluru</div>
                    <div className="absolute-center">
                        <div><AiFillCaretRight /></div>
                    </div>
                    </div> 
            </div>
            <Slider {...settings}>
                {list.map((item)=>(
                    <div>
                        <div className="collection-cover">
                            <img src={item.cover} className="collection-image" alt={item.title} />
                            <div className="gradient-bg"></div>
                            <div className="collection-card-title">{item.title}</div>
                            <div className="collection-card-subtitle">
                                <div>{item.places}</div>
                                <div className="absolute-center">
                        <div><AiFillCaretRight /></div>
                    </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

        </div>
    </div>
  );
};

export default  Collection;