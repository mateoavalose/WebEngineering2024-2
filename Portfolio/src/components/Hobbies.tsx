import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import music from '../assets/img/hob-music.svg';
import gaming from '../assets/img/hob-gaming.svg';
import time from '../assets/img/hob-partnerTime.svg';
import anime from '../assets/img/hob-anime.svg';
import skate from '../assets/img/hob-sk8.svg';

export const Hobbies = () => {
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
        <section className="hobbies" id="hobbies">
            <h3>Hobbies</h3>
            <p>When I have free time, I have many things I like to do. Some of them include: </p>
            <div className="hobbies-bx wow zoomIn">
                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                    <img src={music} alt="Image" />
                    <h5>Music and playing piano</h5>
                </div>
                <div className="item">
                    <img src={gaming} alt="Image" />
                    <h5>Gaming</h5>
                </div>
                <div className="item">
                    <img src={time} alt="Image" />
                    <h5>Spending time with my partner and friends</h5>
                </div>
                <div className="item">
                    <img src={anime} alt="Image" />
                    <h5>Watching anime and series</h5>
                </div>
                <div className="item">
                    <img src={skate} alt="Image" />
                    <h5>Skateboarding</h5>
                </div>
                </Carousel>
            </div>
            
        </section>
    )
}