import React from "react";
import './card.scss'

export const Card = ({img, name, gender, status}) => {
    return(
        <div className="card">
            <img src={img} alt={name}></img>
            <div className="text">
                <h3>{name}</h3>
                <p>Gender: {gender}</p>
                <p>Status: {status}</p>
                <button>Go somewhere</button>
            </div>
        </div>
    );
};