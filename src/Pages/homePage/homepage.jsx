import { NavBar } from "../../Components/navbar/navbar";
import image from "../../assets/my-image.jpg";
import dot from "../../assets/dot.png";
import linkedln from "../../assets/linkedIn.png";
import github from "../../assets/github.png";
import { Link } from "react-router-dom";
import linkedlnn from "../../assets/linkedinnNew.png";
import twitterr from "../../assets/twitter.png";
import githubb from "../../assets/githubb.png";
import instagramm from "../../assets/instagram.png";
import "./homepage.css";
import { ProjectCard } from "../../Components/projectscard/projectsCard";
import cryptous from "../../assets/cryptous-new.png";
import dashboard from "../../assets/dashboard.png";
import tasktracker from "../../assets/task-tracker.png";
// import { ContactForm } from "../../Components/Contact/contactPage"
import resume from "../../assets/resume.pdf";
import arrow from "../../assets/arrow-down.png";

export const HomePage = () => {
  const onDownload = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <section className="section">
        <div className="homepage-intro-div">
          <div>
            <p className="intro-text">
              Hello, I’m <br /> Eniola Ipoola.
            </p>
            <div className="home-contact-div">
              <div>
                <Link to="/contact">
                  <button class="contact-button">
                    Contact Me
                    <img src={dot} alt="Contact Icon" class="contact-icon" />
                  </button>
                </Link>
              </div>
              <div>
                {" "}
                <a
                  href="https://www.linkedin.com/in/eniolaipoola"
                  target="_blank"
                >
                  <img src={linkedln} alt="Icon" />
                </a>
              </div>
              <div>
                {" "}
                <a href="https://github.com/eniolaipoola" target="_blank">
                  <img src={github} alt="Icon" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className="intro-mini">
              I am an Android Engineer keen to build scalable Android products{" "}
              <br /> that meet business goals and satisfy users' needs.
            </p>
            {/* <img src={image} alt="" className="my-image" loading="lazy"/> */}
          </div>
        </div>
      </section>
      {/* Featured Projects */}
      <section className="section">
        <div>
          <img src={arrow} alt="Arrow Down Icon" />
        </div>
        <div>
          <p className="featured-projects">featured projects</p>
        </div>
        <div>
          <ProjectCard
            // imageurl={cryptous}
            projectTitle="Cryptous"
            projectDescription="Cryptous is a website that provides an up-to-date daily coin information sourced from coingecko API."
            year="2023"
            stacks=" React, CSS, Vercel, Coingecko API, Git & Github"
            projectlink="https://crypto-website-six.vercel.app/"
            githublink="https://github.com/jummie-jk/Crypto-website"
          />
          <hr />
          <ProjectCard
            // imageurl={tasktracker}
            projectTitle="Task Tracker"
            projectDescription="Task Tracker is a website that helps you get control of your day by taking a list of all your tasks for the day and adding priority level to each task."
            year="2023"
            stacks=" React, CSS, Vercel, Git & Github"
            projectlink="https://taskss-tracker.vercel.app/"
            githublink="https://github.com/jummie-jk/Task-tracker"
          />
          <hr />
          <ProjectCard
            // imageurl={dashboard}
            projectTitle="Dashboard"
            projectDescription="Dashboard makes data easy and help users gain real-time insights and customization options for better decision-making."
            year="2024"
            stacks=" React, SASS/SCSS, Recharts, Material-UI, Vercel, Git & Github"
            projectlink="https://dashboardd-kit.vercel.app/"
            githublink="https://github.com/jummie-jk/Dashboard"
          />
      
          <hr />
        
        </div>
      </section>
    </div>
  );
};
