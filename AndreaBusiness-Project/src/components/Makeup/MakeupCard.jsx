import { Col } from "react-bootstrap";

export const MakeupCard = ({ name,  description, price, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="makeup-imgbx">
        <img src={imgUrl} />
        <div className="makeup-txtx">
          <h4>{name}</h4>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      </div>
    </Col>
  )
}