import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

import { $host } from "../../http";
import "./About.css";

function About() {
  const [about, setAbout] = useState([]);
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    $host
      .get(`api/about`)
      .then(({ data }) => {
        setAbout(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    $host.get(`api/team`).then(({ data }) => {
      setTeam(data);
    });
  }, []);

  if (loading) {
    return (
      <div className="loading--block">
        <CircularProgress color="error" />
      </div>
    );
  }

  return (
    <div className="about">
      <div className="about__container">
        <div className="about__main">
          {about &&
            about.map((el) => (
              <>
                <div className="about__main--left">
                  <div className="about__main--title mobile">{el.title}</div>

                  <div className="avout__main--img">
                    <img src={el.image} alt="" />
                  </div>
                </div>
                <div className="about__main--right">
                  <div className="about__main--title desktop">{el.title}</div>
                  <div className="about__main--description">
                    {el.description}
                  </div>
                </div>
              </>
            ))}
        </div>

        <div className="about__statistics">
          <div className="about__statistics--content">
            <div className="about__statistics--item">
              <p>1.0 bn</p>
              <p>Average daily volume</p>
            </div>
            <div className="about__statistics--item">
              <p>700,000+</p>
              <p>Transactions per second</p>
            </div>{" "}
            <div className="about__statistics--item">
              <p>24/7</p>
              <p>Support</p>
            </div>
          </div>
        </div>

        <div className="about__team">
          <div className="about__team--title">Our executive team</div>
          <div className="about__team--content ">
            {team &&
              team.map((el) => (
                <div key={el.id} className="about__team--item">
                  <div className="about__team--logo">
                    <img src={el.image} alt="" />
                  </div>
                  <div className="about__team--name">{el.title}</div>
                  {/* <div className="about__team--position">{el.position}</div> */}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
