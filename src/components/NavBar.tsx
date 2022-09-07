import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3" sticky="top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/store">Store</Nav.Link>
        </Nav>
        <Button
          variant="outline-success"
          className="rounded-circle"
          style={{
            width: "3rem",
            height: "3rem",
            position: "relative",
          }}
        >
          <BsCart2 style={{ fontSize: "1.5rem" }} />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
