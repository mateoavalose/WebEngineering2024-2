import { Row } from "react-bootstrap";
import { WorkCard } from "./WorkCard";
import projImg1 from "../assets/img/work-img1.svg";
import projImg2 from "../assets/img/work-img2.svg";

export const WorkExp = () => {
    const works = [
        {
            title: "Research Assistant, EIA University",
            description: "Project: Finite Element Method Simulation of Optical Responses in Semiconductor Nanostructures for Medical Imaging Applications. \
                Responsibilities: Conducted numerical simulations using the finite element method to analyze the optical properties of semiconductor nanostructures. \
                Processed and analyzed datasets, generating graphs and visualizations to interpret results. Collaborated on the writing of the research paper \
                'Resonances of the optical responses in GaN/InGaN/AlGaN/GaN quantum wells'.",
            startDate: "August 2023",
            endDate: "February 2024",
            imgUrl: projImg1,
        },
        {
            title: "Teaching Assistant, Writing and Orality Laboratory (LEO) - EIA University",
            description: "Responsibilities: Provided individual and group tutoring to over 50 students in academic writing, grammar, and oral presentations. \
                Reviewed and edited undergraduate theses and academic articles for the university journal. Actively participated in the creation and publication \
                of the student journal, from writing a section to conducting final reviews.",
            startDate: "July 2021",
            endDate: "November 2023",
            imgUrl: projImg2,
        },
    ];

    return (
        <section className="work" id="work">
            <Row className="align-items-center">
                {
                    works.map((work, index) => {
                        return (
                            <WorkCard key={index} {...work} />
                        )
                    })
                }
            </Row>
        </section>
    )
}
