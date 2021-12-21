import React, { useState } from "react";
import TinderCard from "react-tinder-card";
//import axios from "./axios";
import "./Cards.css";

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

function Cards() {
  const [count, setCount] = useState(0);
  const [people] = useState([
    {name: "Manan", imgUrl: "https://ia.tmgrup.com.tr/68ced0/0/0/0/0/0/0?u=https://i.tmgrup.com.tr/fikriyat//album/2019/03/24/1553435609045.jpg&mw=752"},
    {name: "SSs", imgUrl: "https://img.paratic.com/dosya/2017/03/ehveniser-eski-turkce-kelimeler.jpg"},
    {name: "Efulim", imgUrl: "https://i.pinimg.com/originals/6a/e5/20/6ae5207325acf5c822ec4f4c19074253.jpg"}
  ]);

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };


  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  
  };

  return (
    <div>
      <p>Click Or Drag Sideways</p>
      <div className="tinderCards">
      <div 
      className="tinderCards__cardContainer"
      >

      {(count !== people.length)?
      people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name) }
            onCardLeftScreen={() => { outOfFrame(person.name);}          } >

            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
              onMouseDown={() => setCount(count + 1)}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        )):
        window.location.reload(false)
        }
              
      </div>
    </div>
    </div>
  );
}

export default Cards;
