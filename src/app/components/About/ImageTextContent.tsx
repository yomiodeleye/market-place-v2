import { Container, Row, Col } from "react-bootstrap";
import Anchor from "../anchor";

const ImageTextContent = () => {
  return (
    <div className="about-text-bg-area space-mb--r130">
      <Container className="wide">
        <Row className="no-gutters">
          <Col lg={6}>
            <div className="about-bg-content">
              <h2 className="about-bg-content__title">
                A timeless piece of jewelry has lasting value.
              </h2>
              <p className="about-bg-content__text">
                I think part of the beauty of our relationship with jewelry is
                that it can change and evolve as we do ourselves. Trends come
                and go, style evolves.
              </p>
              <Anchor path="/other/about">MORE ABOUT US</Anchor>
            </div>
          </Col>
          <Col lg={6}>
            <div
              className="about-bg-background"
              style={{
                backgroundImage: `url("${
                  process.env.PUBLIC_URL +
                  "/assets/images/backgrounds/bg-about.jpg"
                }")`
              }}
            ></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageTextContent;
