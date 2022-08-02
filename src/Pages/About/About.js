import React from "react";
import PageTitle from "../../SharedPages/Other/PageTitle/PageTitle";
import "./aboutus.css";
const About = () => {
  return (
    <>
      <PageTitle pagetitle="About"></PageTitle>
      <div className="aboutus">
        <div className="container">
          <div className="row">
            <h2>Team - pure-Power (BEST BATTERY SELLER)</h2>
            <p>
              We started with one mission: Make Selling fast. Since then, all
              five and a half caffeine sucking night owls are having fun.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
