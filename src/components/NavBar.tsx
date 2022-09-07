import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/store">Store</Nav.Link>
        </Nav>
        <Button style={{ width: "3rem", height: "3rem", position: "relative" }}>
          <BsCart2
            style={{ fontSize: "1.5rem", position: "relative" }}
          />
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
