import { Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.svg";
import projImg2 from "../assets/img/project-img2.svg";
import projImg3 from "../assets/img/project-img3.svg";

export const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "Although I am not a designer, I have created this portfolio to showcase my skills and projects. I have used React, \
        Bootstrap, and CSS to create this portfolio. With this in mind, I would like to improve the design of this portfolio in the future.",
      imgUrl: projImg1,
    },
    {
      title: "Predicting Algorithm",
      description: "For this project, I'm working alongside the Simulators Laboratory at my university. The goal is to predict the \
        amount of oxygen and carbon dioxide inside the alveoli by just measuring the amount of oxygen and carbon dioxide in the mouth. This particular project is just starting, \
        but we're planning to use Python and Machine Learning to predict the values.",
      imgUrl: projImg2,
    },
    {
      title: "Semiconductor Nanoestructures",
      description: "In this project, I'm working with a professor from the Physics Department. Although we have been working on this project \
      for a considerable time now, we're now preparing a presentation for an upcoming event. We're using Comsol Multiphysics to simulate the \
      behavior of semiconductor nanostructures and Origin Lab to graph the data.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Row>
        {
          projects.map((project, index) => {
            return (
              <ProjectCard key={index} {...project} />
            )
          })
        }
      </Row>
    </section>
  )
}
