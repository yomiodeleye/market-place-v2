import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import Anchor from "../anchor";

const CategoryGrid = ({ spaceBottomClass }) => {
  return (
    <div className={clsx("product-category-container", spaceBottomClass)}>
      <Container>
        <Row className="row-5 space-mb--n10">
          <Col lg={6}>
            <Row className="row-5">
              <Col lg={12}>
                <div className="single-category single-category--three space-mb--10">
                  <div className="single-category__image single-category__image--three">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/category/banner-women.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--three">
                    <div className="title">
                      <p>Women</p>
                      <Anchor path="/shop/left-sidebar">
                        + Store
                      </Anchor>
                    </div>
                  </div>
                  <Anchor path="/shop/left-sidebar" className="banner-link"/>
                </div>
              </Col>
              <Col md={6}>
                <div className="single-category single-category--three space-mb--10">
                  <div className="single-category__image single-category__image--three">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/category/banner-shoes.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--three">
                    <div className="title">
                      <p>Shoes</p>
                      <Anchor path="/shop/left-sidebar">
                        + Store
                      </Anchor>
                    </div>
                  </div>
                  <Anchor path="/shop/left-sidebar" className="banner-link"/>
                </div>
              </Col>
              <Col md={6}>
                <div className="single-category single-category--three space-mb--10">
                  <div className="single-category__image single-category__image--three">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/category/banner-sunglass.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--three">
                    <div className="title">
                      <p>Sunglass</p>
                      <Anchor path="/shop/left-sidebar">
                        + Store
                      </Anchor>
                    </div>
                  </div>
                  <Anchor path="/shop/left-sidebar" className="banner-link"/>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row className="row-5">
              <Col lg={12}>
                <div className="single-category single-category--three space-mb--10">
                  <div className="single-category__image single-category__image--three">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/category/banner-accessories.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--three">
                    <div className="title">
                      <p>Lookbook ss-20</p>
                      <Anchor path="/shop/left-sidebar">
                        + Store
                      </Anchor>
                    </div>
                  </div>
                  <Anchor path="/shop/left-sidebar" className="banner-link"/>
                </div>
              </Col>
              <Col lg={12}>
                <div className="single-category single-category--three space-mb--10">
                  <div className="single-category__image single-category__image--three">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/category/banner-men.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--three">
                    <div className="title">
                      <p>Men</p>
                      <Anchor path="/shop/left-sidebar">
                        + Store
                      </Anchor>
                    </div>
                  </div>
                  <Anchor path="/shop/left-sidebar" className="banner-link"/>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryGrid;
