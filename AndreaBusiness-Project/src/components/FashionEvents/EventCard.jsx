import { Col } from "react-bootstrap";

export const EventCard = ({ text, start, end, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="event-imgbx">
        <img src={imgUrl} />
        <div className="event-txtx">
          <h4>{text}</h4>
          <p>Starts: {start}, Ends: {end}</p>
        </div>
      </div>
    </Col>
  )
}