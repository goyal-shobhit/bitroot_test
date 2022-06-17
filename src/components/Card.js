import React, { useEffect, useState } from "react";
import "./Card.css";
import CardModal from "./CardModal";

function Card({ cardData }) {
  const [isopen, setIsOpen] = useState(false);
  const [imageId, setImageId] = useState(0);

  const handleShowDialog = (e) => {
    setImageId(e.target.id);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {cardData.map((data) => (
        <div className="grid-col" key={data.id}>
          <div id={data.id} className={isopen?"card-blur":"card"}>
            <div className="card-img">
              {/* <a href="#"> */}
              <img
                src={data.thumbnail.small}
                alt={data.title}
                className="img-fluid"
              />
              <div
                className="card-img-text"
                id={data.id}
                onClick={(e) => handleShowDialog(e)}
              >
                Learn More
              </div>
              {/* </a> */}
            </div>

            <div className="card-body">
              <span className="dot1"></span>
              <span className="dot2"></span>
              <h2 className="card-title">{data.title}</h2>
              <br />
              <p className="card-text">{data.content}</p>
              <div className="card-footer">
                <p>
                  {data.author.name} -{data.author.role}
                </p>
                {/* <p>{Math.round((data.date - 25569) * 86400 * 1000)}</p> */}
                <p>{new Date(data.date).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {isopen === true && (
        <CardModal
          cardData={cardData}
          cardId={imageId}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
}

export default Card;
