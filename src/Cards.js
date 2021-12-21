import React, { useState } from "react";
import TinderCard from "react-tinder-card";
//import axios from "./axios";
import randomColor from "randomcolor";
import "./Cards.css";
//import { func } from "assert-plus";

// function TinderCars() {
//   // useEffect(() => {
//   //   async function fetchData() {
//   //     const req = await axios.get("/tinder/cards");

//   //     setPeople(req.data);
//   //   }
//   //   fetchData();
//   // }, []);

//   // console.log(people);
//   return;
// }

function Cards({reloaded}) {
  //const [count, setCount] = useState({index: 0});
  const [swiped] = useState([{name: '', color: '#ddd'}]);
  const [unswiped] = useState([
    {Englishname: "Shirt", Turkishname: "Gömlek"},
    {Englishname: "Handkerchief", Turkishname: "Mendil"},
    {Englishname: "Go!", Turkishname: "Git!"},
    {Englishname: "Shoe", Turkishname: "Ayakabbı"},

    
  ]);

  const outOfFrame = (name) => {
    console.log(...swiped)
    };
  const swipe = (nameToDelete) => {
    //setSwiped({name: nameToDelete, color: "eee"});
    //console.log(...swiped);
  };

  (reloaded) && window.location.reload(false);

  return (
    <div>
      <p>Click Or Drag Sideways</p>
      <div className="tinderCards">
      <div 
      className="tinderCards__cardContainer"
      >

      { unswiped.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["down"]}
            onCardLeftScreen={() => {outOfFrame(person.name);}}>

            <div
              style={{backgroundColor: `${randomColor()}`}}
              className="card"
              onMouseDown={() =>swipe(person.Englishname)}
              >
              <h1 className="card__englishname"> {person.Turkishname} </h1>
              <h2 className="card__turkishname">{person.Englishname} </h2>
            </div>
          </TinderCard>
        ))
        }
              
      </div>
    </div>
    </div>
  );
}

export default Cards;
