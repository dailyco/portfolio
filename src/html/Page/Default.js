import React from "react";
import About from "../Template/About";
import Skill from "../Template/Skill";
import Footer from "../Template/Footer";
import Projects from "../Template/Projects";
import Contact from "../Template/Contact";
import Landing from "../Template/Landing";
import Timeline from "../Template/Timeline";

import "../../scss/main.scss";
import "../../scss/vendors/normalize.scss";

function Default() {
  return (
    <>
      {/* <div id="preloader">
        <div className="load">
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
      </div> */}
      <Landing></Landing>
      {/* <div className="layout">
        <section className="card neumorphism-card-big">
          <About></About>
        </section>
        <section className="card neumorphism-card-big">
          <Skill></Skill>
        </section>
        <section className="card neumorphism-card-big">
          <Timeline></Timeline>
        </section>
        <section className="card neumorphism-card-big">
          <Projects></Projects>
        </section>
        <section className="card neumorphism-card-big">
          <Contact></Contact>
        </section>
      </div> */}
      {/* <Footer></Footer> */}
    </>
  );
}

export default Default;
