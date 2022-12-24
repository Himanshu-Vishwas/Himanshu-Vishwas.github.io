import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/himanshu-vishwas/"><img src={navIcon1} alt="" target="_blank" /></a>
                <a href="https://github.com/Himanshu-Vishwas"><img src={navIcon2} alt="" target="_blank"/></a>
                <a href="https://www.instagram.com/hi__himanshu/"><img src={navIcon3} alt="" target="_blank"/></a>
                <a href="https://www.sololearn.com/profile/8864070"><img src={navIcon4} alt="" target="_blank"/></a>
            </div>
            <p>&copy; Himanshu </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
