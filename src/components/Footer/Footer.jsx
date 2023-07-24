import React from "react";
import { Container, Col } from "reactstrap";
import "../../styles/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Col lg="12">
          <div className="footer__bottom">
            <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
              <i className="ri-copyright-line"></i>Copyright Gators
              Transportation {year}
            </p>
          </div>
        </Col>
      </Container>
    </footer>
  );
};

export default Footer;
