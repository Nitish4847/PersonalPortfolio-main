import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import HooBank from "../../Assets/Projects/Project1.png";
import movie from "../../Assets/Projects/movie.png";
import Dev from "../../Assets/Projects/Dev-Detective.png";
import pass from "../../Assets/Projects/Project2.png";
import port from "../../Assets/Projects/Project4.png";
import Calculator from "../../Assets/Projects/Project5.png";
import weather from "../../Assets/Projects/Project6.png";
import Ecommerce from "../../Assets/Projects/Project7.png";
import tic_toi from "../../Assets/Projects/Project8.png";
import bank from "../../Assets/Projects/Project9.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HooBank}
              isBlog={false}
              title="HooBank"
              description="I have completed the HooBank website project, a modern and responsive fintech landing page. The website offers a sleek user interface and highlights features of a digital banking platform. It is built using React.js for dynamic UI and Tailwind CSS for efficient styling. JavaScript and JSX were used to handle logic and component structure. The project focuses on clean design, mobile responsiveness, and reusability of components.
"
              ghLink="https://github.com/Nitish4847/project_hoobank-main"
              demoLink="https://project-hoobank-main-five.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Explorer System"
              description="This Movie Explorer System using React.js can provide users with a seamless and interactive interface to search, browse, and discover movies. By integrating API data, filtering, and responsive design, it offers a modern and scalable way to explore a vast movie collection."
              ghLink="https://github.com/Nitish4847/Movie_exploreSystem"
              demoLink="https://movie-explore-system.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="WEATHER APP"
              description="Created a Weather App that displays the current weather condition. This app is made with the help of Html, CSS, and JavaScript and is mobile responsive as well."
              ghLink="https://github.com/Nitish4847/WeatherApp-using-JS-master"
              demoLink="https://weather-app-using-js-master.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dev}
              isBlog={false}
              title=" Dev-Detective "
              description="Dev-Detective is a web application that helps users search for GitHub profiles using usernames. It fetches and displays real-time data like bio, repositories, followers, and more from the GitHub API. The site is built using HTML, CSS, and JavaScript with a clean and responsive UI. It features dark/light mode toggle for better user experience. This project enhances your skills in API integration and DOM manipulation. Dev-Detective is a useful tool for developers to quickly explore GitHub profiles"
              ghLink="https://github.com/Nitish4847/Dev-Detective-Project-main"
              demoLink="https://dev-detective-project-main-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pass}
              isBlog={false}
              title="Random Password Generator"
              description="
              🔧I've utilized HTML, CSS, and JavaScript to create a powerful tool that generates secure passwords tailored to your preferences. 🛠️
              
              .....🔒This project lets you generate secure passwords with various options."
              ghLink="https://github.com/Nitish4847/Random-Password-Generator-using-Javascript-mai"
              demoLink="https://random-password-generator-using-javascript-mai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Portfolio_Website"
              description="
          A responsive Personal Portfolio website designed to highlight skills and accomplishments. Includes dedicated sections such as Home, About, Projects, and Resume. Built using modern web technologies like HTML, CSS, JavaScript, and React. Showcases completed work, educational background, and technical proficiency. Provides a clean, user-friendly interface for exploring a developer’s journey."
              ghLink="https://github.com/Nitish4847/PersonalPortfolio-main"
              demoLink="https://personal-portfolio-main-jet.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calculator}
              isBlog={false}
              title="Calculator_generate"
              description="This project is a simple and interactive web-based calculator built using HTML, CSS, and JavaScript. It performs basic arithmetic operations like addition, subtraction, multiplication, and division. The clean user interface and responsive design ensure smooth user experience across devices."
              ghLink="https://github.com/Nitish4847/calculator-main-main"
              demoLink="https://calculator-main-main.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="E-commerce"
              description="I developed a full-featured E-commerce website that enables users to browse products, add items to a cart, and securely place orders.
The platform includes user authentication, product filtering, and admin dashboard functionalities.
It is built using the MERN stack—MongoDB, Express.js, React.js, and Node.js.
I implemented responsive design using HTML, CSS, and Bootstrap for seamless use across devices."
              ghLink="https://github.com/Nitish4847/E-commerce"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tic_toi}
              isBlog={false}
              title="Tic-Tac-Toe Game "
              description=" I've built a fully functional and responsive Tic-Tac-Toe Game using HTML, CSS, and JavaScript. This was a challenging but rewarding project that allowed me to apply my coding skills and develop my problem-solving abilities."
              ghLink="https://github.com/Nitish4847/TicTacToe-Game-Using-Js-main"
              demoLink="https://tic-tac-toe-game-using-js-main.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title="Basic_Banking_System"
              description="Created this BasicBankingSystem using basic HTML and Tailwind A web application used to tranfer virtual money between multiple users and also record the banking transactions/ activities."
              ghLink="https://github.com/Nitish4847/BankSystem-main"
              demoLink="https://bank-system-main-nine.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
