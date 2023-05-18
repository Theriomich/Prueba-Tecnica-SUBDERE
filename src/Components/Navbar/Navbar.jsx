import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function NavBar() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="justify-content-center"
      style={{
        background: "rgb(128,94,24)",
        background:
          "linear-gradient(90deg, rgba(128,94,24,1) 50%, rgba(203,161,75,1) 58%)",
      }}
    >
      <Container>
        <Navbar.Brand
          className="mx-auto"
          style={{
            fontSize: "40px",
            color: "white",
          }}
        >
          Librería
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
