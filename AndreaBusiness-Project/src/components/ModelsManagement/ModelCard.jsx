import { Col } from "react-bootstrap";

export const ModelCard = ({ name,  portfolio, imgUrl, booking }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="model-imgbx">
        <img src={imgUrl} />
        <div className="model-txtx">
          <h4>{name}</h4>
          <span>{portfolio}</span>
          <span>{booking}</span>
        </div>
      </div>
    </Col>
  )
}