import React from "react";
import classes from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes["hero-section"]}>
        <div className={classes["heading-section"]}>
          <h2 className={classes.heading}>
            WORK OPPORTUNITIES <br />
            IN JAPAN
          </h2>
          <p className={classes.overview}>
            Diverse Opportunities, Limitless Careers
          </p>
        </div>
      </div>

      <div className={classes.gradient}>
        <h3 className={classes.highlight}>Key Highlights:</h3>

        <div className={classes.cardContainer}>
          <div className={classes.gridCard}>
            <div className={classes.card}>
              <h4>High demand for skilled professionals in technology</h4>
              <p className={classes.highlightDesc}>
                Japan's technology sector is rapidly growing, creating numerous
                opportunities for skilled professionals in fields such as
                software development, cybersecurity, and artificial
                intelligence.
              </p>
            </div>
            <div className={classes.card}>
              <h4>Lucrative job prospects in finance and banking</h4>
              <p className={classes.highlightDesc}>
                With its robust financial industry, Japan offers rewarding
                career opportunities in banking, finance, investment, and
                accounting sectors, attracting both local and international
                talents.
              </p>
            </div>
            <div className={classes.card}>
              <h4>Thriving healthcare industry</h4>
              <p className={classes.highlightDesc}>
                Japan's healthcare sector is expanding, creating diverse job
                openings for healthcare professionals, including doctors,
                nurses, pharmacists, and medical researchers, contributing to
                the nation's well-being.
              </p>
            </div>
            <div className={classes.card}>
              <h4>Emerging opportunities in education and academia</h4>
              <p className={classes.highlightDesc}>
                Japan's commitment to education and research makes it an
                attractive destination for educators, researchers, and
                academics, with a growing number of positions available in
                universities, schools, and research institutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className={classes["footer-quote"]}>
          <p>"Pave your path to success with career opportunities"</p>
        </div>
        <div className={classes["footer-social-handles"]}>
          <div className={classes["social-media-logo"]}>
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div className={classes["social-media-logo"]}>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className={classes["social-media-logo"]}>
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          <div className={classes["social-media-logo"]}>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </footer>

      {/* <h2 className={classes.heading}>Work Opportunities in Japan</h2>
      <p className={classes.overview}>
        Japan offers a wide range of work opportunities across various sectors
        and industries. Whether you're interested in technology, finance,
        healthcare, or education, Japan has something to offer.
      </p>
      <h3 className={classes.highlight}>Key Highlights:</h3>
      <div className={classes.cardContainer}>
        <div className={classes.card}>
          <h4 className={classes.highlight}>High demand for skilled professionals in IT and engineering</h4>
          <p className={classes.highlightDesc}>
            Japan's technology sector is thriving, with numerous opportunities
            for skilled professionals in IT and engineering fields.
          </p>
        </div>
        <div className={classes.card}>
          <h4 className={classes.highlight}>Booming startup ecosystem in cities like Tokyo and Osaka</h4>
          <p className={classes.highlightDesc}>
            Tokyo and Osaka are known for their vibrant startup scenes, attracting
            entrepreneurs and investors from around the world.
          </p>
        </div>
      </div>
      <p className={classes.additionalInfo}>
        In addition to these highlights, Japan is known for its rich culture,
        delicious cuisine, and stunning landscapes. Working in Japan can provide
        not only professional growth but also unforgettable experiences.
      </p> */}
    </div>
  );
};

export default Home;
