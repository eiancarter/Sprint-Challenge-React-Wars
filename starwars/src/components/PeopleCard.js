import React from "react";

const PeopleCard = props => {
    return (
        <div className="people-list" key={props.id}>
            <p>Name: {props.name}</p>
            <h2>{props.films}</h2>
            {/* <div className="image">
                <img src={props.image} alt="character described"></img>
            </div> */}
            <div className="bottom">
                <h3>Homeworld:</h3>
                    <p>{props.homeworld}</p> 
                <h3>Species:</h3>
                    <p>{props.species}</p> 
            </div>
        </div>
    );
};

export default PeopleCard;