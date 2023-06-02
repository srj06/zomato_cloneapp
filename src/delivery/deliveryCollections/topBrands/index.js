import React from "react";
import Slider from "react-slick";
import "./topBrands.css";
import NextArrow from "../../../common/carousel/nextArrow";
import PrevArrow from "../../../common/carousel/prevArrow";
const topBrandsList = [
    {
    id: 1,
    time: "25 min",
    cover: 
    "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp",
    },
    {
        id: 2,
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp",
        },
        {
            id: 3,
            time: "30 min",
            cover: 
            "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp",
            },
            {
                id: 4,
                time: "27 min",
                cover: 
                "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp",
                },
                {
                    id: 5,
                    time: "27 min",
                    cover:
                     "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp",
                    },
                    {
                        id: 6,
                        time: "33 min",
                        cover:
                         "https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179220.png?output-format=webp",
                        },
                        {
                            id: 7,
                            time: "29 min",
                            cover: 
                            "https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png?output-format=webp",
                            },
                            {
                                id: 8,
                                time: "28 min",
                                cover: 
                                "https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp",
                                },
                                {
                                    id: 9,
                                    time: "55 min",
                                    cover: 
                                    "https://b.zmtcdn.com/data/brand_creatives/logos/0c45494107cfd8e2d6e9bd855bfec678_1669019847.png?output-format=webp",
                                    },

];
const settings = {
   
    infinite: false,
    
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
const  TopBrands = () => {
  return (
    <div className="top-brands max-width" > 
    <div className="collection-title">Top brands for you </div>
    <Slider {...settings}>
        {topBrandsList.map((brand)=>{
            return (
                <div>
                 <div className="top-brands-cover">
                
                <img 
                src={brand.cover}
                 className="top-brands-image" 
                 alt={brand.item} 
                 />
            </div>
            </div>
            );
        })}

    </Slider>
    </div>
  );
};

export default  TopBrands;