import React from "react";
import "../../Profile.css";
import Tab from "react-bootstrap/Tab";
import { useDispatch, useSelector } from "react-redux";
import Tabs from "react-bootstrap/Tabs";
import Image70 from "../../../src/img/image-100.jpg";
import Image80 from "../../../src/img/images-200.jpg";
import { logout } from "../../actions/userActions";

function Profile() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      <div className="outer-box" id="sy">
        <div
          className="inner-box"
          style={{
            width: "50%",
            margin: "3rem auto",
          }}
        >
          <div className="name">
            <div className="row" style={{}}>
              <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                <span>
                  <img
                    src={Image80}
                    alt=""
                    style={{
                      borderRadius: "50%",
                      width: "100%",
                      textAlign: "center",
                    }}
                  />
                </span>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                <div style={{ margin: "1rem" }}>
                  {userInfo ? <h1>{userInfo.name}</h1> : ""}
                  <br></br>
                  {userInfo ? <span>@{userInfo.email}</span> : ""}
                </div>
              </div>
            </div>

            <span>My Funny Collection</span>
          </div>
          <div className="tab">
            {" "}
            <Tabs
              defaultActiveKey="Posts"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="Posts" title="Posts">
                <div className="ui-profile-blank">
                  <h2>No Posts</h2>
                  <div className="ui-profile-blank__content">
                    <h3>Let’s make something creative for fun!</h3>
                    <button className="ui-btn btn-color-primary">
                      <div className="ui-base-icon" data-v-e9db3ad8="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 13 13"
                          role="presentation"
                          data-v-e9db3ad8=""
                        >
                          <g fill="white" data-v-e9db3ad8="">
                            <path d="M0 10.5V13H2.5L9.87333 5.62665L7.37333 3.12666L0 10.5ZM11.8067 3.69332C12.0667 3.43332 12.0667 3.01332 11.8067 2.75332L10.2467 1.19332C9.98667 0.933322 9.56667 0.933322 9.30667 1.19332L8.08667 2.41332L10.5867 4.91332L11.8067 3.69332Z"></path>
                          </g>
                        </svg>
                      </div>{" "}
                      Post{" "}
                    </button>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Comments" title="Comments">
                bbbbbbbbbbbb
              </Tab>
              <Tab eventKey="Upvotes" title="Upvotes">
                ccccccccccccc
              </Tab>
              <Tab eventKey="Saved" title="Saved">
                dddddddddddd
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
