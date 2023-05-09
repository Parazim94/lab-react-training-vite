import React from "react";

function IdCard ({lastName, firstName, gender, height, birth, picture}) {
    return (
        <div>
            <h4>First Name: {firstName}</h4>
            <h4>Last Name: {lastName}</h4>
            <h4>Gender: {gender}</h4>
            <h4>Height: {height}</h4>
            <h4>birth: {}</h4>
            <img src={picture} alt="selfie" />
        </div>
    )
}

export default IdCard;