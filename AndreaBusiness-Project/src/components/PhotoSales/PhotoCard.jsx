import { Col } from "react-bootstrap";

export const PhotoCard = ({ photographer,  description, price, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="photo-imgbx">
        <img src={imgUrl} />
        <div className="photo-txtx">
          <h4>{photographer}</h4>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      </div>
    </Col>
  )
}