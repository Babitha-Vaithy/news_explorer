import "./About.css";

import about from "../../assets/about.svg";

function About() {
  return (
    <about className="about">
      <img src={about} alt="About avatar" className="about__avatar" />
      <div className="about__container">
        <h1 className="about__title"> About the author</h1>
        <p className="about__description">
          Babitha Vaithianathan is the project author. This project indicates
          the working of frontend of the sytstem. We have worked on User
          Interface of NewsExplorer where we can search any topics and save the
          content. We can do this once we signup and signin the profile. React,
          javascript, HTML, CSS are the Techniques and technologies are used for
          creating and developing the project. I had a great learning process
          from TripleTen about Javascript where I&apos;m fresher to this IT
          field but currently I&apos;m able to create a webpage on my own.
        </p>
      </div>
    </about>
  );
}

export default About;
