import React from "react";
import classes from "./About.module.css";
import japaneseImage from "../assets/japanese.jpg";

const About = () => {
  return (
    <div className={classes.container}>
      <section className={classes.carousel}></section>
      <section className={classes.gallery}>
        <div className={classes.cardContainer}>
          <div className={classes.card}></div>
          <img className={classes.image} src={japaneseImage} alt="Restaurant"/>
        </div>
      </section>
      {/* <h2 className={classes.heading}>About Japan</h2>
      <p className={classes.paragraph}>
        Japan is a country known for its rich culture, fascinating history, and unique lifestyle. From traditional tea ceremonies to cutting-edge technology, Japan offers a diverse and captivating experience for visitors and residents alike.
      </p>
      <p className={classes.paragraph}>
        Japanese culture is deeply rooted in tradition and respect. From the iconic cherry blossom festivals to the intricate art of sushi-making, every aspect of Japanese life reflects a sense of harmony and balance.
      </p>
      <p className={classes.paragraph}>
        In addition to its cultural heritage, Japan is also known for its modern lifestyle and technological innovations. With bustling cities like Tokyo and Kyoto, as well as serene countryside landscapes, Japan offers something for everyone.
      </p> */}
    </div>
  );
};

export default About;
