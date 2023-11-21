import { Link } from "react-scroll";
import "./App.css";
import logo from "./toxoAI.png";
import DALLE from "./DALLE.png";

function App() {
  return (
    <div className="App">
      <div className="first-page-container">
        <nav className="App-nav">
          <div className="nav-links">
            <Link to="our-approach" smooth={true} duration={500}>
              Our approach
            </Link>
            <Link to="why-us" smooth={true} duration={500}>
              Why us?
            </Link>
          </div>
          <div className="nav-logo">
            <img src={logo} alt="Toxo AI Logo" className="logo" />
          </div>
          <div className="nav-button">
            <button className="contact-button">Contact Us!</button>
          </div>
        </nav>

        <div className="background-text">
          Toxo
          <br />
          AI
        </div>

        <header className="App-header">
          <div className="content-container">
            <div className="title-container">
              <h1 className="title">
                Meet innovative
                <br />
                testing solution
              </h1>
              <p className="mission-statement">
                Our mission is to replace costly and ethically challenging
                animal testing with state-of-the-art machine learning solutions,
                offering more accurate and humane alternatives for chemical
                safety assessments.
              </p>
            </div>
            <img
              src={DALLE}
              alt="AI Illustration"
              className="ai-illustration"
            />
          </div>
          <span className="subtitle">Say yes to humane testing</span>

          <footer className="App-footer">
            The Future of Testing: Ethical, Accurate, Machine-Learned
          </footer>
        </header>
      </div>

      <div id="our-approach" className="our-approach">
        <h2 className="our-approach-title">Our approach</h2>
        <div className="approach-items-container">
          {/* Point 1 */}
          <div className="approach-item">
            <div className="number-circle">
              1<span></span>
            </div>

            <div className="approach-text">
              <h3>Data aggregation and analysis</h3>
              <p>
                We collect and analyse data from key toxicology databases such
                as Tox21, ToxRefDB, ChemIDplus, and PubMed. Leveraging Sysrev,
                we organize, setting the stage for insightful and accurate
                predictive modeling.
              </p>
            </div>
          </div>

          {/* Point 2 - Mirrored */}
          <div className="approach-item approach-item-mirrored">
            <div className="number-circle">
              2<span></span>
            </div>
            <div className="approach-text">
              <h3>Advanced Predictive Modelling</h3>
              <p>
                Using ML algorithms, we accurately forecast the effects of
                chemicals on human health. Central to our innovation is the
                prediction of toxomes — intricate mappings of how chemicals
                impact human health.
              </p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="approach-item">
            <div className="number-circle">
              3<span></span>
            </div>
            <div className="approach-text">
              <h3>Industry Applications</h3>
              <p>
                Pharmaceutical companies, researchers, biotech firms, and
                government bodies can leverage our tool for reliable, ethical,
                and cost-effective chemical and drug development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="why-us" className="why-us-section">
        {/* Content for 'Why Us' */}
      </div>
    </div>
  );
}

export default App;
