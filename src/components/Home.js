import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import Card from "./Card";
import CardModal from "./CardModal";

function Home() {
  const [cardData, setCardData] = useState([]);
  const[isopen,setIsOpen] = useState(false);
  const fetchData = async () => {
    try {
      const URL =
        "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";
      const resposne = await axios.get(URL);
      setCardData(resposne.data);
    } catch (error) {
      console.log(error);
    }
  };

 
//   const handleShowDialog = ()=>{
//     console.log("clicked")
//  setIsOpen(true);
//   }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="card-grid">
        {/* <div className="grid-col"> */}
          <Card cardData = {cardData}  />
           {/* {isopen &&( 
          <CardModal cardData={cardData} />
          )} */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Home;
