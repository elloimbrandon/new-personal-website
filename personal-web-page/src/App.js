import "./App.scss";
import { Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar
        // className="flex flex-row border border-dark"
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
      >
        <Navbar.Brand href="#home">BF</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="container flex justify-end border border-dark">
            <Nav.Link href="/">Test1</Nav.Link>
            <Nav.Link href="/">Test2</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* change height to screen size */}
      <div className="container justify-center h-full overflow-scroll flex flex-col align-items-center border border-dark w-screen">
        <div className="container flex flex-col border border-dark align-items-center justify-content-center w-full">
          <img
            className="profile-circle-img"
            src={require("./images/brfeltz.jpg")}
            alt="brfeltz"
          />
          <div className="border border-dark rounded-3xl mt-2 mb-2 p-2">
            <h4>Developer | Designer | Student</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
