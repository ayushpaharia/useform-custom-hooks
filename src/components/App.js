import React from "react";

import Navbar from "./layout/Navbar";
import Card from "./layout/Card";
import ContactUs from "./layout/ContactUs";

import "./css/App.css";

function App() {
  const cards = [
    {
      title: "Grandparents Day",
      by: "Raymond Salazar",
      date: new Date(2020, 7, 31, 17, 0),
      image:
        "https://mps.milwaukee.k12.wi.us/MPS-Shared/Media/Kindergarten/DSC08542web.jpg?Medium",
    },
    {
      title: "Preschool Day",
      by: "Walter Stanley",
      date: new Date(2020, 6, 5, 17, 0),
      image:
        "https://mps.milwaukee.k12.wi.us/MPS-Shared/Media/Kindergarten/DSC08542web.jpg?Medium",
    },
    {
      title: "Grandparents Day",
      by: "Raymond Salazar",
      date: new Date(2020, 7, 31, 17, 0),
      image:
        "https://mps.milwaukee.k12.wi.us/MPS-Shared/Media/Kindergarten/DSC08542web.jpg?Medium",
    },
    {
      title: "Preschool Day",
      by: "Walter Stanley",
      date: new Date(2020, 6, 5, 17, 0),
      image:
        "https://mps.milwaukee.k12.wi.us/MPS-Shared/Media/Kindergarten/DSC08542web.jpg?Medium",
    },
    {
      title: "Grandparents Day",
      by: "Raymond Salazar",
      date: new Date(2020, 7, 31, 17, 0),
      image:
        "https://mps.milwaukee.k12.wi.us/MPS-Shared/Media/Kindergarten/DSC08542web.jpg?Medium",
    },
    {
      title: "Preschool Day",
      by: "Walter Stanley",
      date: new Date(2020, 6, 5, 17, 0),
      image:
        "https://mps.milwaukee.k12.wi.us/MPS-Shared/Media/Kindergarten/DSC08542web.jpg?Medium",
    },
    {
      title: "Grandparents Day",
      by: "Raymond Salazar",
      date: new Date(2020, 7, 31, 17, 0),
      image:
        "https://mps.milwaukee.k12.wi.us/MPS-Shared/Media/Kindergarten/DSC08542web.jpg?Medium",
    },
    {
      title: "Preschool Day",
      by: "Walter Stanley",
      date: new Date(2020, 6, 5, 17, 0),
      image:
        "https://mps.milwaukee.k12.wi.us/MPS-Shared/Media/Kindergarten/DSC08542web.jpg?Medium",
    },
  ];
  // const date = cards[0].date;
  // console.log(`
  // Date ${date.getDate()}
  // Day ${date.getDay()}
  // Month ${date.getMonth()}
  // Year ${date.getFullYear()}
  // `);
  return (
    <div className="app">
      <div className="app__navbar">
        <Navbar />
      </div>
      <div className="app__container">
        {cards.map(({ title, by, date, image }, index) => {
          return (
            <Card title={title} by={by} date={date} image={image} key={index} />
          );
        })}
      </div>
      <ContactUs />
    </div>
  );
}

export default App;
