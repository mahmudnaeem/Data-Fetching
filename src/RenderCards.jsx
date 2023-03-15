import React from "react";

export default function RenderChars({image, name, status, species, gender}){

    return(
        <div className="card">
             <img src={image}/>
                <div className="container">
                    <h4><b>Name: {name.toUpperCase()}</b></h4>
                    <p>Status: {status}</p>
                    <p>Species: {species}</p>
                    <p>Gender: {gender}</p>
                </div>
        </div>
    )
}