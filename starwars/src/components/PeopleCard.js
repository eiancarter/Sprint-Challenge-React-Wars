// import React from "react";

// const PeopleCard = props => {
//     return (
//         <div className="people-list" key={props.id}>
//             <p>Name: {props.name}</p>
//             <h2>{props.films}</h2>
//             <div className="bottom">
//                 <h3>Homeworld:</h3>
//                     <p>{props.homeworld}</p> 
//                 <h3>Species:</h3>
//                     <p>{props.species}</p> 
//             </div>
//         </div>
//     );
// };

// export default PeopleCard;

import React from 'react';
import {
  Card, CardText, CardBody,
  CardHeader, CardSubtitle, Button, CardFooter
} from 'reactstrap';

const PeopleCard = (props) => {
  return (
    <div className="people-list" key={props.id}>
      <Card body inverse style={{ color: '#FFFFF', backgroundColor: '#333', borderColor: '#333' }}>
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody color='#FFFFF' margin='1%'>
          <CardHeader>{props.name}</CardHeader>
          <CardSubtitle>Eye Color: {props.eye_color}</CardSubtitle>
          <CardSubtitle>Hair Color: {props.hair_color}</CardSubtitle>
          <CardText>Gender: {props.gender}</CardText>
        </CardBody>
        <CardFooter>
            <Button color='danger'>Learn More</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PeopleCard;