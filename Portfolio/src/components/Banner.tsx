import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import bannerImg from "../assets/img/banner-img.svg";
import 'animate.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const freq = 150;
  const [delta, setDelta] = useState(freq);
  const [, setIndex] = useState(1);
  const toRotate = [ "a Systems and Computer Engineering student", "a Biomedical Engineering student", "still learning" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) { 
      setDelta(() => updatedText === fullText ? period : 50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(freq);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{} <span className="txt-rotate"><span className="wrap">Hello ∪.∪ I'm <span style={{color: "yellow"}}>Mateo</span>, and I'm {text}</span></span></h1>
                <p>Scroll down or use the top bar to learn more</p>
          </Col>
          <Col xs={12} md={6} xl={3}>
                <div className={"animate__animated animate__zoomIn"}>
                  <img src={bannerImg} alt="Header Img"/>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
