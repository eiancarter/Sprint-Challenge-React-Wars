import React, {useState, useEffect} from "react";
import PeopleCard from "./PeopleCard";
import axios from "axios";

export default function PhotoList() {
    const [persons, setPersons] = useState([]);


    useEffect(() => {
        axios
            .get("https://swapi.co/api/people/")
            .then(response => {
                console.log(response);
                setPersons(response.data.results);
            })
            .catch (error => {
                console.log("This is not the API you are looking for...", error);
            })
    }, []);

    return (
        <div className="person">
            {persons.map(person => {
                return (
                    <PeopleCard key={person.id} name={person.name} eye_color={person.eye_color} gender={person.gender} hair_color={person.hair_color}/>
                ); 
            })}
        </div>
    )
}