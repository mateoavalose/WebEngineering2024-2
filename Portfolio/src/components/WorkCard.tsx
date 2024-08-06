import { Col } from "react-bootstrap";

type WorkCardProps = {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    imgUrl: string;
};

export const WorkCard = ({ title, description, startDate, endDate,imgUrl }: WorkCardProps) => {
    return (
        <Col size={6} sm={3} md={6}>
            <div className="work-imgbx">
                <img src={imgUrl} />
                <div className="work-txtx">
                    <h4>{title}</h4>
                    <h5>{startDate} - {endDate}</h5>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}
