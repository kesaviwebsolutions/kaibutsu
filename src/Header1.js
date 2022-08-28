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
    dispatch(logout())
    navigate("/")
  }

  let navigate = useNavigate();
  return (
    <div className="header1">
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
              <li>
                <Button
                  onClick={handleShow}
                  style={{ color: "#fff", fontWeight: "700" }}
                >
                  SIGN UP
                </Button>
              </li>
              <li>
                <Button
                  onClick={handleDisplay}
                  style={{ color: "#fff", fontWeight: "700" }}
                >
                  LOGIN
                </Button>
              </li>
              {/* <Link to="/shifted">
                <li>shifted</li>
              </Link> */}

              {/* <li className="avatar">
                <svg
                  id="Capa_2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32.94 31.95"
                >
                  <g id="Capa_1-2">
                    <g>
                      <circle cx="16.2" cy="9.64" r=".77" fill="#ffbd29" />
                      <circle cx="21.9" cy="8.56" r=".51" fill="#ffbd29" />
                      <path
                        d="M16.59,8.15s.08-.05,.04-.07c-.23-.19-.7-.46-1.3-.34-.43,.09-.75,.56-.9,.84-.02,.04,.03,.09,.07,.06,.88-.72,1.72-.59,2.1-.48Z"
                        fill="#ffbd29"
                      />
                      <path
                        d="M22.58,7.61c-.13-.16-.41-.42-.84-.43-.31,0-.59,.27-.74,.43-.02,.03,0,.06,.04,.05,.7-.36,1.26-.14,1.5,0,.03,.02,.06-.02,.04-.04Z"
                        fill="#ffbd29"
                      />
                      <path
                        d="M32.93,14.28c.06-.71-.3-1.37-1.05-1.8-1-.57-2-.66-2.95-.39-.41,.12-.93,.42-1.3,.7-.05,.04-.11,.05-.17,.03-.27-.07-.91-.14-1.3-.32-.34-.16-.63-.32-.96-.51-.47-1.52-1.22-3.35-2.3-5.62C20.08,.43,15.63-.32,12.44,.1c-.96,.13-1.6,.31-2.18,.5-.89,.16-1.9,.37-2.94,.63,0,0,0,0,0,0C4.54,1.8,1.55,3.09,.04,5.9c-.03,.03-.04,.04-.04,.04l.03-.02s-.02,.04-.03,.06c0,0,.12-.11,.36-.28l1.94-1.34c.23-.14,.48-.29,.73-.44,.3-.16,.63-.34,.95-.52,.54-.28,1.11-.54,1.71-.79l1.32-.46-.13,.03s.08-.02,.12-.04c0,0,0,0,.01,0-1.8,.63-3.95,1.84-5.21,4.17l3.92-2.49c-.08,.11-.16,.23-.23,.35-1.19,1.22-1.71,2.48-1.71,2.48,.44-.61,.84-1.14,1.22-1.61-.51,.98-.94,2.07-1.13,3.21-.27,1.59-.33,3.84-.01,5.68,.41,2.36,1.19,3.74,1.86,5.33,.55,1.3,1,2.48,1.3,4.12l.93,8.57,.04-2.3c0-2.73,.37-4.2-.12-6.52-.36-1.7-.87-2.93-1.43-4.27-.65-1.56-1.3-3.06-1.71-5.57-.29-1.78-.42-3.45-.16-4.98,.22-1.31,.62-2.51,1.23-3.56,.71-1.22,2.09-2.81,3.66-3.3,.14-.04,.28-.09,.42-.14,.32-.09,.68-.19,1.05-.29,.43-.08,.93-.14,1.58-.23,.47-.06,.93-.15,1.37-.15,1.26,0,2.39,.16,3.46,.64,2.03,.92,3.75,2.71,4.98,5.32,.77,1.62,1.51,3.51,1.96,4.8-.32-.22-.5-.36-.85-.52-.22-.1-.84-.44-1.41,.08-.62,.57-.48,.58-1.12,.66-.12,.02-.42,.05-.59,.05-.12,0-.29,0-.39,0-.47,.03-1.06,.25-1.5,.58-.52,.39-.74,.8-.92,1.42-.07,.23-.2,.56-.25,.77-.1,.37-.1,.48-.23,.92-.03,.1-.11,.42-.15,.51-.49,1.21-.76,2.27,.37,3.3,1.34,1.22,2.07,1.5,4.48,1.7,.15,.01,.3,.03,.44,.04,0,2.73-.08,8.19,.41,10.51l.07-.71c.11-1.14,.11-2.29,0-3.44-.12-1.35-.2-3.57,.22-6.27,1.08,.17,1.95,.43,3.06,.72,.6,.15,1.18,.2,1.72,.2,1.33,0,2.24-.44,3.32-1.33,1.04-.85,1.55-1.9,1.4-2.69-.11-.57-.38-1.08-1.24-1.52l-.06-.14c.1-.03,.21-.06,.25-.08,.85-.39,1.53-1.08,1.6-1.94Zm-2.33-.3c-2.32-.64-4.04,4.48-7.4,5.1,0,0-1.55,.35-4.05,0,0,0-.01,0,0,.01,.28,.1,1.67,.43,3.02,.38,2.87-.12,2.93,.39,4.13,.63,1.02,.2,2.4,.59,3.84-.78,.61-.58,.64-1.6,.3-2.34,0-.02-.02-.04-.03-.06-.05-.11,.08-.13,.29-.06,.13,.07,.25,.13,.36,.2,.24,.17,.49,.4,.61,.59,.03,.05,.06,.11,.08,.17-.16,1.14-1.32,1.91-1.32,1.91,0,0-1.73,1.16-3.22,1.07-1.49-.09-3.1-.61-5.15-.69-1.47-.05-2.95-.32-3.67-.46-.33-.21-.64-.48-.96-.83-.85-.91-.76-1.59-.34-2.68,.04-.1,.23-.64,.27-.74,.14-.38,.23-.65,.33-1.02,.05-.21,.19-.54,.28-.75,.38-.93,.87-1.18,1.18-1.37,.32-.2,.92-.26,1.01-.26,.15,0,.53-.01,.69-.03,.28-.03,.75-.03,1.31-.64,.15-.16,.33-.3,.52-.3,.32,0,.68,.24,.81,.32,.44,.26,.71,.46,1.23,.79,.64,.41,.9,.67,1.5,.91,.09,.04,.68,.26,.91,.32,.06,.01,.11,.11,.07,.16-.64,.72-1.1,1.52-1.2,1.72-.01,.02,0,.05,.02,.07,.02,0,.03,0,.05,0,.1-.14,.22-.28,.34-.42l-.34,.42s2.23-2.55,4.38-2.22c.89,.14,2.03,.95,1.62,1.83-.27,.39-.73,.7-1.25,.73,0,0,1.19-1.3-.2-1.68Z"
                        fill="#ffbd29"
                      />
                    </g>
                  </g>
                </svg>
              </li> */}
              {/* <li className="img2">
                <div className="dropdown">
                  <button className="dropbtn">
                    <img src={Image2} alt="" />
                  </button>
                  <div className="dropdown-content">
                    <p style={{ cursor: "pointer" }} onClick={handleLogout}>
                      Logout
                    </p>
                  </div>
                </div>
              </li> */}
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
  );
}

export default Header1;
