import { items } from "../data/items.js";
import { Col, Row } from "react-bootstrap";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {items.map((item) => (
          <Col key={item.id}>
            <h2>{item.name}</h2>
            {/* <img src={item.imgUrl} alt="" /> */}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
