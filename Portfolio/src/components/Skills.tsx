import meter95 from "../assets/img/meter1.svg";
import meter80 from "../assets/img/meter2.svg";
import meter90 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="skill-bx wow zoomIn">
        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
          <div className="item">
            <img src={meter95} alt="Image" />
            <h5>Communication and Writing</h5>
          </div>
          <div className="item">
            <img src={meter80} alt="Image" />
            <h5>Java</h5>
          </div>
          <div className="item">
            <img src={meter90} alt="Image" />
            <h5>Problem-Solving</h5>
          </div>
          <div className="item">
            <img src={meter95} alt="Image" />
            <h5>Microcontroller Programming</h5>
          </div>
          <div className="item">
            <img src={meter90} alt="Image" />
            <h5>Python</h5>
          </div>
        </Carousel>
      </div>
    </section>
  )
}
