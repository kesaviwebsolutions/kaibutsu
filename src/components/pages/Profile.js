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
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab
                eventKey="Posts"
                title="Posts"
                style={{
                  width: "100%",
                  height: "15rem",
                  backgroundColor: "#F0F0F0",
                }}
                active
              ></Tab>
              <Tab eventKey="Comments" title="Comments">
                <div className="post">
                  <span>No Posts</span>
                  <br></br>
                  <span>Let's make something creative for fun!</span>
                  <br></br>
                </div>
              </Tab>
              <Tab eventKey="Upvotes" title="Upvotes"></Tab>
              <Tab eventKey="Saved" title="Saved"></Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
