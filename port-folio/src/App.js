import "./App.css";
import { projectdata } from "./projectdata";
import { experience } from "./Experience";
import profile1 from "../src/images/profile.jpg";
import profile2 from "../src/images/profile1.jpg";


function App() {
  const DownloadResume = () => {
    const url =
      "https://drive.google.com/file/d/1lnscKMBrzxxfSJZ_MhnR_IM7qtdFa0hO/view?usp=drive_link";
    const anchor = document.createElement("n");
    anchor.href = url;
    anchor.download = "NikhileshKarnala_Resume.pdf";
    anchor.click();
  };

  return (
    <div className="MainBody bg-light">

      <div className="header">
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-light mb-0  d-flex justify-content-between align-items-center">
            <a class="navbar-brand d-flex align-items-center" href="#home">
              N
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#Home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#experience">
                    Expereince
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#projects">
                    Projects
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <section id="home">
        <div className="banner-row">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6 ">
                <h1>
                  Nikhilesh <span>Karnala</span>
                </h1>
                <p>
                I’m a versatile developer proficient in Node.js with 1 year of expertise in crafting
                robust web solutions and APIs. Proficient in Express.js, MongoDB, and modern
                technologies including serverless , Socket.IO, and Redis. Dedicated to
                delivering stellar results, I constantly seek new ways to enhance projects with
                creativity and precision, ensuring seamless integration and efficiency for web
                applications
                </p>
                <ul className=" listul d-flex m-0 p-0">
                  <li className="m-2 p-0">
                    <a href="https://github.com/Nikky6">
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </li>
                  <li className="m-2 p-0">
                    <a href="https://www.linkedin.com/in/k-nikhil-590ab5247/">
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 d-flex align-items-center  ">
                <img className="imageClass" src={profile1} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="about-row">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4 d-flex align-items-center  ">
                <img className="" src={profile2} alt="" />
              </div>
              <div className="col-md-6 col-md-offset-1">
                <p>About Me</p>
                <h2>Associate Software Engineer</h2>
                <p>
                  I have two years of experience in MERN Stack Development,
                  primarily working with React and Node.js technologies. My
                  focus has been on React for front-end development and building
                  serverless backends framework. I've handled various modules,
                  developed new APIs as per project requirment, used redis for
                  store statis and reduce the time response of API.
                </p>
                <button onClick={() => DownloadResume()}>
                  {" "}
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="Projects-row">
          <h3 className="d-flex justify-content-center mb-4">Expereince</h3>
          <div className="container">
            {experience.map((value, index, array) => (
              <div key={index}>
                <h5>{value.companyName}</h5>
                <p>
                  <b>Role:</b> {value.Role}{" "}
                </p>
                <p>
                  <b>Years:</b>
                  {value.years}
                </p>
                <p>
                  <b>Discription:</b>{" "}
                  {value.discription.map((value, key) => (
                    <ul key={key}>
                      <li>{value}</li>
                    </ul>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="Projects-row project-colours">
          <h3 className="d-flex justify-content-center mb-4">Projects</h3>

          <div className="container">
            {projectdata.map((value, index, array) => (
              <div key={index}>
                <h5>{value.projectName}</h5>
                <p>
                  <b>Techologies:</b> {value.Techologies}{" "}
                </p>
                <p>
                  <b>Discription:</b> {value.discription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="contact-row">
          <h3 className="text-center mb-4 mt-4">Contact</h3>

          <div className="container">
            <div className="row">
              <div className="col-md-6 contactPage">
                <p>
                  <b>Mobile: </b> +91 9182748023
                </p>
                <p>
                  <b>Email: </b> nikhilesh.karnala@gmail.com
                </p>
                <p>
                  <b>Linkedin: </b>{" "}
                  <a href="https://www.linkedin.com/in/k-nikhil-590ab5247/">
                    Nikhilesh Karnala
                  </a>
                </p>

                <p>
                  <b>Github: </b>{" "}
                  <a href="https://github.com/Nikky6">Nikhilesh Karnala</a>
                </p>

                <div className="d-flex  mt-4 mb-2">
                  <button
                    className="contactButton"
                    onClick={() => DownloadResume()}
                  >
                    {" "}
                    Download Resume
                  </button>
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-4 mt-2">
                  <iframe
                    className="embed-responsive-item"
                    title="Resume"
                    src="https://drive.google.com/file/d/1lnscKMBrzxxfSJZ_MhnR_IM7qtdFa0hO/view?usp=drive_link"
                    allowFullScreen
                    width="100%"
                    height="400px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;