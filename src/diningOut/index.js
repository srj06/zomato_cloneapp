import React from "react";
import "./diningOut.css";
import Collection from "../common/collection";
import { BiAbacus } from "react-icons/bi";
import { diningOut } from "../data/diningOut";
import Filters from "../common/filters";
import ExploreSection from "../common/exploreSection/indx";
const collectionList=[
  {
  id: "1",
  title: "Newly opened restaurants",
  cover: "https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674825385.jpg",
  places: "6",
},
{
  id: "2",
  title:  "Serene Rooftop Places",
  cover: "https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674825836.jpg",
  places: "18",
},
{
  id: "3",
  title: "Picturesque Cafe",
  cover: "https://b.zmtcdn.com/data/collections/bfa5063b43c9b8f6c9c3b1a37c815d3b_1674826835.jpg",
  places: "10",
},
{
  id: "4",
  title: "Trending Restaurants",
  cover: "https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247364.jpg",
  places: "10",
},
{
  id: "5",
  title: "Romantic Places for Dining",
  cover: "https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674825932.jpg",
  places: "11",
},
{
  id: "6",
  title: "Finest Microbreweries",
  cover: "https://b.zmtcdn.com/data/collections/d7755d2b4aea34ef9bfce4d60838750d_1674826498.jpg",
  places: "21",
},
{
  id: "7",
  title: "Best Bars and Pubs",
  cover: "https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674826727.jpg",
  places: "19",
},
{
  id: "8",
  title: "Great Buffets",
  cover: "https://b.zmtcdn.com/data/collections/038023025a7859881a3fa3b3b1c93416_1675080082.jpg",
  places: "17",
},
];
const diningFilters = [
  {
    id:1,
    icon: <div><BiAbacus /></div>,
    
    title: "Filters",
  },
  {
    id:2,
    title: "rating 4.0+",
  },
  {
    id:3,
    title: "Safe and Hygenic",
  },
  {
    id:4,
    title: "Pure-veg",
  },
  {
    id:5,
    title: "Delivery Time",
  },
  {
    id:6,
    title: "Greater offers",
  },


];
const diningList = diningOut;
const  DiningOut= () => { 
  return (
  <div> 
    <Collection list={collectionList}/>
    <div className="max-width">
      <Filters filterList={diningFilters} />
    </div>
    <ExploreSection list={diningList} collectionName="Dine-Out Restaurants in Banglore" />
  </div>
  );
};

export default  DiningOut;
