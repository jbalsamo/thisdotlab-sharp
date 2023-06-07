import { NavLink } from "@solidjs/router";
import { Col, Container, Nav, Navbar, Row } from "solid-bootstrap";
import { cuteSharps } from "../pages/LikedSharps";

const Header = () => {
  return (
    <div>
      <Navbar bg="light">
        <Row md={12}>
          <Col md={{ span: 4, offset: 0 }}>
            <Navbar.Brand>Sharp Project Data</Navbar.Brand>
          </Col>
          <Nav>
            <Col md={{ span: 4, offset: 2 }}>
              <NavLink href="/">Home</NavLink>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <NavLink href="/likedSharps">
                {" "}
                Liked Sharps ({cuteSharps().length})
              </NavLink>
            </Col>
          </Nav>
        </Row>
      </Navbar>
    </div>
  );
};

export default Header;
