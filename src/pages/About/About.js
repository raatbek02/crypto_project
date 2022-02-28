import React from "react";
import about_us_bitcoincity from "../../assets/images/about_us_bitcoincity.png";
import "./About.css";

function About() {
  const team = [
    {
      id: 1,
      name: "Brian Armstrong",
      position: "Co-Founder & Chief Executive Officer",
      image:
        "https://images.ctfassets.net/c5bd0wqjc7v0/KJatB7PzZO39yprpEojKW/6a443107e2ce8748d0928516935b4a84/brian.jpeg",
    },
    {
      id: 2,
      name: "Emilie Choi",
      position: `President & Chief Operating Officer`,
      image:
        "https://images.ctfassets.net/c5bd0wqjc7v0/3dPU2RwEVDMBC2STR4F3Lv/dc3647ecad9497cf3d365349b4bbcf08/emilie.jpeg",
    },
    {
      id: 3,
      name: "Surojit Chatterje",
      position: "Chief Product Officer",
      image:
        "https://images.ctfassets.net/c5bd0wqjc7v0/63XieTmAt4VRbqLAU9r2Ff/79f3c871c6e7a2e5a00b2174517b7e11/Surojit.jpeg",
    },
    {
      id: 4,
      name: "Alesia Haas",
      position: "Chief Financial Officer",
      image:
        "https://images.ctfassets.net/c5bd0wqjc7v0/7pA2IaoYN6JP77cWXbUolr/c26cf8bd147f6a9bff1c022f452031e8/alesia.jpeg",
    },
    {
      id: 5,
      name: "L.J. Brock",
      position: "Chief People Officer",
      image:
        "https://images.ctfassets.net/c5bd0wqjc7v0/5BBLQKjqSVeqWV6A8bx5h8/28f356a617e951dc91a69021dee96c9e/lj.jpeg.png",
    },
    {
      id: 6,
      name: "Paul Grewal",
      position: "Chief Legal Officer",
      image:
        "https://images.ctfassets.net/c5bd0wqjc7v0/51C3v4pSyPskDg203iPi7p/e222e7654b7a99f100a9a79f5ef0fc69/paul.jpeg",
    },
  ];
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__main">
          <div className="about__main--left">
            <div className="avout__main--img">
              <img src={about_us_bitcoincity} alt="" />
            </div>
          </div>
          <div className="about__main--right">
            <div className="about__main--title">About BitcoinCity</div>
            <div className="about__main--description">
              We are building the cryptoeconomy – a more fair, accessible,
              efficient, and transparent financial system enabled by crypto. We
              started in 2012 with the radical idea that anyone, anywhere,
              should be able to easily and securely send and receive Bitcoin.
              Today, we offer a trusted and easy-to-use platform for accessing
              the broader cryptoeconomy.
            </div>
          </div>
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
            {team.map((el) => (
              <div key={el.id} className="about__team--item">
                <div className="about__team--logo">
                  <img src={el.image} alt="" />
                </div>
                <div className="about__team--name">{el.name}</div>
                <div className="about__team--position">{el.position}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
