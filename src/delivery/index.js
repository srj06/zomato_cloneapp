import React from "react";
import Filters from "../common/filters";
import "./delivery.css";
import { BiAbacus } from "react-icons/bi";
import DeliveryCollections from "./deliveryCollections";
import TopBrands from "./deliveryCollections/topBrands";
import ExploreSection from "../common/exploreSection/indx";
import { restaurants } from "../data/restaurants";
const deliveryFilters = [
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
const restaurantList = restaurants;
const  Delivery = () => {
  return ( 
    <div>
  <div className="max-width">
      <Filters filterList={deliveryFilters} />
  </div>
  <DeliveryCollections />
  <TopBrands />
  <ExploreSection list={restaurantList} collectionName="Delivery restaurant in jamshedpur"/>
  </div> 
  ); 
  };

export default  Delivery;