import React, { useState } from "react";
import Image1 from "./img/Quack-original-logo.png";
import Image2 from "./img/quack.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SingUp from "./SignUp";
import Login from "./Login";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Style.css";
import "./Quack.css";
import { logout } from "./actions/userActions";
import Accordion from "react-bootstrap/Accordion";

function Header1() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleHide = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleDisplay = () => setShow2(true);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  let navigate = useNavigate();
  return (
    <div className="header1">
      <div className="container-fluid">
        <div className="row">
          <div className=" col-lg-3 col-md-3 col-sm-3">
            <form
              className="d-flex"
              role="search"
              style={{ margin: "2.5rem 1rem" }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-6">
            <span className="quack-img">
              <img src={Image1} alt="" />
            </span>
          </div>
          <div className="col-lg-4 col-md-3 col-sm-3">
            <span>
              <ul style={{ margin: "2rem auto" }}>
                <li className="notification-button">
                  <svg
                    id="Capa_2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 23.07 30.62"
                  >
                    <g id="Capa_1-2">
                      <path
                        d="M0,26.03v-2.3H3.03V12.02c0-2.14,.59-4.05,1.78-5.72,1.19-1.67,2.76-2.72,4.7-3.16v-1.11c0-.59,.2-1.07,.59-1.45s.87-.57,1.42-.57,1.03,.19,1.42,.57,.59,.87,.59,1.45v1.11c1.95,.43,3.52,1.49,4.72,3.16,1.2,1.67,1.8,3.58,1.8,5.72v11.71h2.99v2.3H0Zm11.54,4.59c-.77,0-1.44-.3-2.02-.9-.58-.6-.87-1.32-.87-2.16h5.77c0,.84-.28,1.56-.85,2.16-.56,.6-1.24,.9-2.04,.9Zm-6.34-6.89h12.72V12.02c0-1.89-.61-3.5-1.84-4.82-1.23-1.33-2.73-1.99-4.51-1.99s-3.29,.66-4.52,1.99c-1.24,1.33-1.86,2.93-1.86,4.82v11.71Z"
                        fill="#ffbd29"
                      />
                    </g>
                  </svg>
                </li>
                <li className="add-button">
                  <svg
                    id="Capa_2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 29.4 29.4"
                  >
                    <g id="Capa_1-2">
                      <path
                        d="M13.12,29.4v-13.12H0v-3.15H13.12V0h3.15V13.12h13.12v3.15h-13.12v13.12h-3.15Z"
                        fill="#ffbd29"
                      />
                    </g>
                  </svg>
                </li>
                <li className="saved-button">
                  <svg
                    id="Capa_2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 22.34 28.92"
                  >
                    <g id="Capa_1-2">
                      <path
                        d="M2.39,25.29l8.78-3.71,8.78,3.71V2.39H2.39V25.29Zm-2.39,3.63V2.39C0,1.76,.24,1.2,.72,.72c.48-.48,1.04-.72,1.68-.72H19.95c.64,0,1.2,.24,1.68,.72,.48,.48,.72,1.04,.72,1.68V28.92l-11.17-4.79L0,28.92ZM19.95,2.39h0Z"
                        fill="#ffbd29"
                      />
                    </g>
                  </svg>
                </li>

                <li className="img2">
                  <div className="dropdown">
                    <button
                      className="dropbtn"
                      style={{
                        margin: "0px",
                        border: "none",
                        padding: "0px",
                        backgroundColor: "black",
                      }}
                    >
                      <img src={Image2} alt="" />
                    </button>
                    <div className="dropdown-content">
                      <p style={{ cursor: "pointer" }}>My Profile</p>
                      <p style={{ cursor: "pointer" }}>Saved</p>
                      <p style={{ cursor: "pointer" }}>Setting</p>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckDefault"
                        >
                          Dark Mode
                        </label>
                      </div>
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleLogout();
                        }}
                      >
                        Download Quack
                      </p>
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleLogout();
                        }}
                      >
                        Help Center
                      </p>
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleLogout();
                        }}
                      >
                        Report Problems
                      </p>
                      <div>
                        <Accordion defaultActiveKey="0 ">
                          <Accordion.Item eventKey="0 ">
                            <Accordion.Header className="bg-none">
                              Terms & Policies
                            </Accordion.Header>
                            <Accordion.Body>Terms</Accordion.Body>
                            <Accordion.Body>Policy</Accordion.Body>
                            <Accordion.Body>Copyright</Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>Advertise</Accordion.Header>
                            <Accordion.Body>Advertise on Quack</Accordion.Body>
                            <Accordion.Body>Reports ads</Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>Contact</Accordion.Header>
                            <Accordion.Body>Career</Accordion.Body>
                            <Accordion.Body>Business</Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>

                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleLogout();
                        }}
                      >
                        Logout
                      </p>
                    </div>
                  </div>
                </li>

                <>
                  <li>
                    <Button
                      onClick={() => {
                        handleShow();
                      }}
                      style={{
                        color: "#fff",
                        fontWeight: "700",
                        width: "125%",
                      }}
                    >
                      SIGN UP
                    </Button>
                  </li>
                  <li>
                    <Button
                      onClick={() => {
                        handleDisplay();
                      }}
                      style={{ color: "#fff", fontWeight: "700" }}
                    >
                      LOGIN
                    </Button>
                  </li>
                </>

                {/* <Link to="/shifted">
                  <li>shifted</li>
                </Link> */}
              </ul>
            </span>
          </div>
        </div>

        {/* <!-- Modal sign up --> */}

        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-light ms-auto">SIGN UP</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SingUp />
          </Modal.Body>
        </Modal>

        {/* Modal login */}

        <Modal
          show={show2}
          onHide={handleHide}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-light ms-auto">LOGIN</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Login />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Header1;
