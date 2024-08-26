import { useNavigate, Link } from "react-router-dom";
import { Element } from "react-scroll";

import Logo11 from "../../logo/ECH-logo11.png";
import BackgroundVideo from "../../logo/Stock.mp4";

function Home() {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate(`/form`);
  };

  const text1 =
    "We can take the burden out of labor certification recruitment required by DOL. Our staff will determine the legal print advertising needed and quote you the ad as specified. We will collect all necessary screenshots and tearsheets. You will have online access to all documentation and hard copies can be furnished upon request. We can invoice employers directly and accept online payments; eliminating accounting overhead.";
  const text2 =
    "Through our undisputed dedication to our clientele and our commitment to bringing value, we seek to become the most preferred Labor Certification Agency. We are partners to our clients. We will work to surpass your expectations, because meeting expectations is never enough.";

  return (
    <div className="site-header">
      <div className="welcome">
        <video autoPlay loop muted className="background-video">
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img className="logo5" src={Logo11} alt="Logo5" />
        <h1 className="header-text">
          Our goal is complete satisfaction of your labor certification
          requirements
        </h1>
        <button onClick={handleNav} className="welcome-button">
          Request A Quote
        </button>
      </div>
      {/* 
      <ScrollLink to="info" smooth={true} duration={500} offset={-70}>
        ABOUT
      </ScrollLink> */}
      <Element name="about">
        <div className="info">
          <div className="about-1">
            <h1>What We Do</h1>
            <p>{text1}</p>
          </div>

          <div className="about-2">
            <h1>What We Can Provide</h1>
            <p>Radio Broadcasts</p>
            <p>Cultural Newspapers</p>
            <p>Local Newspapers and Periodicals</p>
            <p>SWA (State Workforce Agency)</p>
            <p>Private Employment Firms</p>
            <p>Campus Career Centers</p>
            <p>Professional and Trade Organizations</p>
            <p>Job Search Websites</p>
          </div>
        </div>
      </Element>

      <div className="about-3">
        <p>Efficient</p>
        <p>Cost Effective</p>
        <p>Honorable</p>
      </div>
      <div className="about-4">
        <p>
          {text2}{" "}
          <span className="bold-text">
            Additional benefits include: Prompt Professional Attention, Weekend
            and Holiday Availability, 24/7 Access to Your Required Documents and
            Full Compliance With DOL Regulations.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Home;
