import React, { useEffect, useState } from "react";
import "./CardModal.css";
import "./Card.css";

function CardModal({ cardData, handleShowDialog, cardId,handleCloseModal }) {
  const [filteredData,setFilteredData] = useState([])



  useEffect(()=>{
    setFilteredData( cardData.filter((data) => {
      return data.id === Number(cardId);
    }))
  },[cardId])

  console.log("filtered", filteredData);



  return (
    <>
      {filteredData.map((data) => (
        // <div
        //   key={data.id}
        //   className="dialog"
        //   style={{ position: "absolute" }}
        //   open
        // >
         
          <div  className="card dialog"
           key={data.id}
          
           style={{ position: "absolute" }}
           open
          >
           <button className="close-button" onClick = {handleCloseModal}>X</button>
            <div className="card-img">
              <img
                src={data.thumbnail.small}
                alt={data.title}
                className="img-fluid"
              />
            </div>

            <div className="card-body dialog-body">
              <h2 className="card-title">{data.title}</h2>
              <br />
              <p className="card-text">{data.content}</p>
              <div className="model-footer">
                <div className="profile-box">
                <img src= {data.author.avatar} className="avatar-img"/>
                </div>
                <p style={{marginLeft:"1rem"}}>
                  {data.author.name} -{data.author.role}
                </p>
              </div>
            </div>
          </div>
         
      ))}
    </>
  );
}

export default CardModal;
