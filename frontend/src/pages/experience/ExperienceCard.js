

import Cardpop from './cardpop';
import { Card } from './card';
import axios from "axios";
import React, { useState, useEffect } from "react";
// import experiences from './data';

function ExperienceCard() {

  const [experiences, setExperiences] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:5003/experience/")
        .then((response) => {
          console.log(response.data);
          setExperiences([...response.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);


  return (
    <main>
      {experiences.map((item, index)  => (
        <Card classes="mr"  key={index}>
          <Card.Image src={`http://localhost:5003/experience/uploads/${item.image}`}  />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.desc}</Card.Text>
           {/* <Card.Button>{experience.ctaText} </Card.Button> */}
          </Card.Body>
          <Cardpop/>
        </Card>
      ))}
    </main>
  );
}

export default ExperienceCard;