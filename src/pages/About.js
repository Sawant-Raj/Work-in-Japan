import React from "react";
import classes from "./About.module.css";
import teaCeremoyImage from "../assets/japanese.jpg";
import japaneseCultureImage from "../assets/japan-culture-scene.avif";
import japaneseFoodImage from "../assets/ramen.png";

const About = () => {
  return (
    <div className={classes.container}>
      <section className={classes.gallery}>
        <div className={classes.cardContainer}>
          <div className={classes.card}></div>
          <div className={classes.content}>
            <img className={classes.image} src={japaneseCultureImage} />
            <div className={classes.description}>
              <h2 className={classes.title}>Japanese Culture</h2>
              <p className={classes.text}>
                Japanese culture is a captivating blend of tradition and
                modernity, characterized by its rich heritage, intricate
                rituals, and profound respect for harmony and balance.Japan's
                technological advancements coexist harmoniously with its
                reverence for ancient customs, creating a unique and dynamic
                cultural tapestry.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.gallery}>
        <div className={classes.cardContainer}>
          <div className={classes.card}></div>
          <div className={classes.content}>
            <img className={classes.image} src={teaCeremoyImage} />
            <div className={classes.description}>
              <h2 className={classes.title}>Tea ceremony in Japan</h2>
              <p className={classes.text}>
                The Japanese tea ceremony, known as "chanoyu" or "sado," is a
                centuries-old ritual steeped in tradition and philosophy. Rooted
                in Zen Buddhism, it emphasizes harmony, respect, purity, and
                tranquility.n a custom tea room, every detail holds profound
                meaning, from utensil arrangement to the host's gestures in the
                Japanese tea ceremony.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.gallery}>
        <div className={classes.cardContainer}>
          <div className={classes.card}></div>
          <div className={classes.content}>
            <img className={classes.image} src={japaneseFoodImage} />
            <div className={classes.description}>
              <h2 className={classes.title}>Japanese Food</h2>
              <p className={classes.text}>
                Japanese cuisine is renowned for its exquisite flavors,
                meticulous preparation, and aesthetic presentation. Ramen, a
                beloved comfort food, offers a hearty broth with noodles and an
                array of toppings, satisfying both the palate and soul.Japanese
                food delights not only the taste buds but also nourishes the
                spirit with its cultural significance and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
