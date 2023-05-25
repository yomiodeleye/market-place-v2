import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import { IoIosCart } from "react-icons/io";
import Anchor from "../anchor";

const ImageCtaThree = ({ spaceBottomClass }) => {
  return (
    <div className={clsx("image-cta-two overflow-hidden", spaceBottomClass)}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="image-cta-two__content space-mb-mobile-only--40">
              <h3 className="subtitle space-mb--30">FEATURED PRODUCT</h3>
              <h2 className="title space-mb--30">Montana shelf collection</h2>
              <p className="text space-mb--30">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae reprehenderit excepturi laboriosam sapiente ipsam
                delectus doloremque vel alias eveniet facere!
              </p>
              <Anchor path="/shop/left-sidebar" className="lezada-button lezada-button--medium lezada-button--icon--left">
                  <IoIosCart /> Only $39
              </Anchor>
            </div>
          </Col>
          <Col lg={6}>
            <div className="image-cta-two__image">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/cta/sofa.png"}
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageCtaThree;
