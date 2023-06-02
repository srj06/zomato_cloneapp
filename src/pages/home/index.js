import React, { useState } from "react";
import Header from "../../header";
import TabOptions from "../../tabOptions";
import Footer from "../../footer";
import Delivery from "../../delivery";
import DiningOut from "../../diningOut";
import Nightlife from "../../nightlife";


const HomePage = () => {
    const [activeTab, setActiveTab]= useState("Delivery");
  return (
   <div> 
     <Header />
     <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
     {getCorrectScreen(activeTab)}
     <Footer />
     </div>
  );
  };
  const getCorrectScreen= (tab) => {
    switch(tab) {
        case "Delivery":
            return <Delivery /> ;
            case "Dining Out":
                return <DiningOut />;
                case "Nightlife":
                    return <Nightlife />;
                default:
                    return <Delivery />;
    }
  };

export default HomePage;