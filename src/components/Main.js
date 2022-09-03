import React, { useEffect } from "react";
import $ from "jquery";
import { auto } from "@popperjs/core";
import { Button } from "bootstrap";
import Image11 from "../img/quack.png";
import team from "../img/photo.jpg";
import "../Style.css";
import "../Quack.css";
import { useNavigate } from "react-router-dom";
import Upvote from "../Upvote.js";
import Image50 from "../img/kesavi-logo.png";
import Image57 from "../img/meme.jpg";

$(".like").on("click", function () {
  var val = parseInt($(this).text(), 10);
  $(this).toggleClass("is-liked");

  if ($(this).hasClass("is-liked")) {
    val++;
    // User has liked (insert userId, itemId into Likes table)
  } else {
    val--;
    // User removed his like (delete from table Likes where userId and itemId)
  }

  $(this).text(val);
});
// import { Grid, Button, Container, Stack, Typography, Box } from '@mui/material';
<script src="https://code.jquery.com/jquery-3.1.0.js"></script>;
function Main() {
  let navigate = useNavigate();

  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");
  //   if (userInfo) {
  //     navigate("/shifted");
  //   }
  // }, [navigate]);

  return (
    <div className="Main">
      <div className="container-fluid">
        {/* <div className="row">
          <div className="col-md-12 col-sm-12">
            <div
              className="
             col-lg-6 col-md-6 col-sm-6 col-12 
              addBaner123"
              style={{}}
            >
              <div
                style={{
                  width: "90%",
                  border: "0.1rem dashed white",
                  borderRadius: "10px",
                  margin: "1rem auto",
                }}
              >
                <img src={Image50} alt="/" width="90%" />
              </div>
            </div>
          </div>
              </div>*/}
        <div className="row">
          <div
            className=" section2 col-md-3 col-sm-3"
            style={{ marginTop: "2rem" }}
          >
            <div className="first-element" style={{ marginLeft: "1rem" }}>
              <span
                className="top-meme"
                style={{
                  padding: "1rem",
                  fontSize: "1.5rem",
                  display: "block",
                  textAlign: "center",
                }}
              >
                TODAY'S TOP MEMES
              </span>
              <div className="secont-element" style={{ display: "flex" }}>
                <span className="number">#1</span>
                <div
                  className="second-element-img"
                  style={{
                    width: "10rem",
                    height: "10rem",
                    border: "0.5px dotted white",
                  }}
                >
                  <img
                    src={Image57}
                    alt="/"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </div>
                <span className="image11">
                  <img src={Image11} alt="/" style={{ width: "4rem" }} />
                </span>
              </div>
              <div className="secont-element" style={{ display: "flex" }}>
                <span className="number">#2</span>
                <div
                  className="second-element-img"
                  style={{
                    width: "10rem",
                    height: "10rem",
                    border: "0.5px dotted white",
                  }}
                >
                  {" "}
                  <img
                    src={Image57}
                    alt="/"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </div>
                <span className="image11">
                  <img src={Image11} alt="/" style={{ width: "4rem" }} />
                </span>
              </div>
              <div className="secont-element" style={{ display: "flex" }}>
                <span className="number">#3</span>
                <div
                  className="second-element-img"
                  style={{
                    width: "10rem",
                    height: "10rem",
                    border: "0.5px dotted white",
                  }}
                >
                  {" "}
                  <img
                    src={Image57}
                    alt="/"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </div>
                <span className="image11">
                  <img src={Image11} alt="/" style={{ width: "4rem" }} />
                </span>
              </div>
              <div className="secont-element" style={{ display: "flex" }}>
                <span className="number">#4</span>
                <div
                  className="second-element-img"
                  style={{
                    width: "10rem",
                    height: "10rem",
                    border: "0.5px dotted white",
                  }}
                >
                  {" "}
                  <img
                    src={Image57}
                    alt="/"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </div>
                <span className="image11">
                  <img src={Image11} alt="/" style={{ width: "4rem" }} />
                </span>
              </div>
              <div className="secont-element" style={{ display: "flex" }}>
                <span className="number">#5</span>
                <div
                  className="second-element-img"
                  style={{
                    width: "10rem",
                    height: "10rem",
                    border: "0.5px dotted white",
                  }}
                >
                  {" "}
                  <img
                    src={Image57}
                    alt="/"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </div>
                <span className="image11">
                  <img src={Image11} alt="/" style={{ width: "4rem" }} />
                </span>
              </div>
              <hr />
              <button className="view">VIEW ALL</button>
            </div>
          </div>

          <div className="section1 col-md-6 col-sm-6">
            <div
              style={{
                width: "89%",
                border: "0.1rem dashed white",
                borderRadius: "10px",
                margin: "2rem auto",
                height: "20%",
              }}
            >
              <img src={Image50} alt="/" width="100%" height="100%" />
            </div>
            <div>
              <div
                className="Box1A"
                style={{
                  p: 2,
                  width: "90%",
                  border: "1px solid grey",
                  borderRadius: "10px",
                  className: "box1",
                  mx: "auto",
                  margin: "2rem",
                  paddingTop: "0.5rem",
                }}
              >
                <span className="box1a">
                  <span>
                    <img
                      src={Image11}
                      alt="/"
                      style={{ width: "5%", marginLeft: "1rem" }}
                    />{" "}
                  </span>
                  <span style={{ color: "white", margin: "1rem" }}>
                    @Memefreak194
                  </span>
                  <svg
                    id="Capa_2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25.21 4.81"
                    style={{ marginTop: "1.2rem" }}
                  >
                    <g id="Capa_1-2">
                      <g>
                        <circle cx="2.41" cy="2.41" r="2.41" fill="#ffbd29" />
                        <circle cx="12.61" cy="2.41" r="2.41" fill="#ffbd29" />
                        <circle cx="22.8" cy="2.41" r="2.41" fill="#ffbd29" />
                      </g>
                    </g>
                  </svg>
                  <svg
                    id="Capa_2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24.31 28.43"
                  >
                    <g id="Capa_1-2">
                      <path
                        d="M0,28.43V2.35C0,1.73,.26,1.18,.78,.71c.52-.47,1.13-.71,1.82-.71H21.71c.69,0,1.3,.24,1.82,.71,.52,.47,.78,1.02,.78,1.65V28.43l-12.16-4.71L0,28.43Z"
                        fill="#ffbd29"
                      />
                    </g>
                  </svg>
                </span>
                <div className="box2" style={{ mx: "auto" }}>
                  <img
                    src={Image57}
                    alt=""
                    className="h-100"
                    style={{
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </div>
                <span className="box3">
                  <Upvote />
                  {/*     <svg
                    id="Capa_2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 110.83 46.43"
                  >
                    <g id="Capa_1-2">
                      <g>
                        <rect
                          x="0"
                          width="110.83"
                          height="46.43"
                          rx="10.4"
                          ry="10.4"
                          fill="#f2f2f2"
                        />
                        <g>
                          <path
                            d="M11.26,9.07c0-.72,.28-1.38,.84-1.96,.56-.58,1.23-.87,1.98-.87h27.79c.73,0,1.39,.29,1.96,.87,.57,.58,.87,1.23,.87,1.96V30.32c0,.73-.29,1.39-.87,1.96-.58,.57-1.24,.87-1.96,.87H18.33l-7.07,7.07V9.07Zm3.2,23.41l2.54-2.54h24.5V9.44H14.46v23.04Z"
                            fill="#ffbd29"
                          />
                          <path
                            d="M41.87,6.62c.63,0,1.19,.25,1.7,.76,.5,.5,.76,1.07,.76,1.7V30.32c0,.63-.25,1.19-.76,1.7-.5,.5-1.07,.76-1.7,.76H18.17l-6.54,6.54V9.07c0-.63,.25-1.19,.74-1.7,.49-.5,1.06-.76,1.72-.76h27.79M14.09,33.38l3.06-3.06h24.72V9.07H14.09v24.31m0,0v0M41.87,5.87H14.09c-.86,0-1.62,.33-2.25,.98-.63,.65-.95,1.39-.95,2.22V41.12l1.28-1.28,6.32-6.32h23.39c.83,0,1.58-.33,2.23-.98s.98-1.4,.98-2.23V9.07c0-.83-.33-1.58-.98-2.23s-1.4-.98-2.23-.98h0Zm-27.04,3.95h26.29V29.57H16.84l-.22,.22-1.78,1.78V9.82h0Z"
                            fill="#fff"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>}

                  <Upvote />
                  {/*<span>
                    <span className="like">0</span>
                    <span className="like is-liked">3</span>
                    <span className="like">6</span>
                    <span className="like">12</span>
              </span>*/}
                  {/* <svg
                  id="Capa_2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 110.83 46.43"
                >
                  <g id="Capa_1-2">
                    <g>
                      <rect
                        x="0"
                        width="110.83"
                        height="46.43"
                        rx="10.4"
                        ry="10.4"
                        fill="#ffbd29"
                      />
                      <g>
                        <g>
                          <path
                            d="M25.74,40.82c-2.49,0-4.84-.47-7.01-1.38-2.16-.92-4.07-2.19-5.67-3.79-1.6-1.6-2.88-3.51-3.79-5.67-.92-2.16-1.38-4.52-1.38-7.01s.47-4.89,1.39-7.05c.92-2.16,2.19-4.07,3.79-5.67,1.6-1.6,3.51-2.87,5.67-3.77,2.16-.9,4.52-1.36,7-1.36s4.89,.46,7.05,1.36c2.16,.9,4.07,2.17,5.67,3.77,1.6,1.6,2.87,3.51,3.77,5.67,.9,2.16,1.36,4.53,1.36,7.05s-.46,4.84-1.36,7c-.9,2.16-2.17,4.07-3.77,5.67-1.6,1.6-3.51,2.88-5.67,3.79-2.16,.92-4.54,1.38-7.05,1.38Z"
                            fill="#ffbd29"
                          />
                          <path
                            d="M25.74,5.49c2.48,0,4.78,.44,6.9,1.33,2.13,.89,3.98,2.12,5.55,3.69,1.57,1.57,2.8,3.42,3.69,5.55,.89,2.13,1.33,4.43,1.33,6.9s-.44,4.73-1.33,6.86c-.89,2.13-2.12,3.98-3.69,5.55-1.57,1.57-3.42,2.81-5.55,3.71-2.13,.9-4.43,1.35-6.9,1.35s-4.73-.45-6.86-1.35c-2.13-.9-3.98-2.14-5.55-3.71-1.57-1.57-2.81-3.42-3.71-5.55-.9-2.13-1.35-4.41-1.35-6.86s.45-4.78,1.35-6.9c.9-2.13,2.14-3.98,3.71-5.55,1.57-1.57,3.42-2.8,5.55-3.69,2.13-.89,4.41-1.33,6.86-1.33m0-.75c-2.54,0-4.94,.47-7.15,1.39-2.21,.92-4.16,2.22-5.79,3.85-1.63,1.63-2.94,3.58-3.87,5.79-.94,2.21-1.41,4.63-1.41,7.2s.48,4.94,1.41,7.15c.94,2.21,2.24,4.15,3.87,5.79,1.63,1.63,3.58,2.94,5.79,3.87,2.21,.94,4.62,1.41,7.15,1.41s4.99-.48,7.2-1.41c2.21-.94,4.15-2.24,5.79-3.87,1.64-1.64,2.93-3.58,3.85-5.79,.92-2.21,1.39-4.61,1.39-7.15s-.47-4.98-1.39-7.19c-.92-2.21-2.22-4.16-3.85-5.79-1.64-1.64-3.58-2.93-5.79-3.85-2.21-.92-4.63-1.39-7.19-1.39h0Z"
                            fill="#fff"
                          />
                        </g>
                        <g>
                          <path
                            d="M25.74,38.2c-4.31,0-7.96-1.47-10.86-4.37-2.9-2.9-4.37-6.55-4.37-10.86s1.47-7.96,4.37-10.86c2.9-2.9,6.56-4.37,10.86-4.37s7.96,1.47,10.86,4.37c2.9,2.9,4.37,6.56,4.37,10.86s-1.47,7.96-4.37,10.86c-2.9,2.9-6.55,4.37-10.86,4.37Z"
                            fill="#fff"
                          />
                          <path
                            d="M25.74,8.11c4.22,0,7.76,1.42,10.6,4.26,2.84,2.84,4.26,6.37,4.26,10.6s-1.42,7.76-4.26,10.6c-2.84,2.84-6.37,4.26-10.6,4.26s-7.76-1.42-10.6-4.26-4.26-6.37-4.26-10.6,1.42-7.76,4.26-10.6,6.37-4.26,10.6-4.26m0-.75c-4.41,0-8.15,1.51-11.13,4.48-2.97,2.97-4.48,6.72-4.48,11.13s1.51,8.15,4.48,11.13c2.97,2.97,6.72,4.48,11.13,4.48s8.15-1.51,11.13-4.48c2.97-2.97,4.48-6.72,4.48-11.13s-1.51-8.15-4.48-11.13c-2.97-2.97-6.72-4.48-11.13-4.48h0Z"
                            fill="#ffbd29"
                          />
                        </g>
                        <path
                          d="M30.99,13.62h-10.05c-.41,0-.75,.09-1.03,.26s-.52,.44-.72,.79l-3.41,7.95c-.06,.15-.11,.36-.15,.66-.04,.29-.07,.51-.07,.66v1.05c0,.41,.09,.71,.28,.9,.19,.19,.49,.28,.9,.28h9.35l-1.22,5.77v1.01c0,.15,.12,.32,.35,.52l.83,.87,7.04-7.6c.12-.23,.23-.47,.35-.7s.17-.48,.17-.74v-9.05c0-.67-.26-1.27-.79-1.81-.52-.54-1.14-.81-1.84-.81Z"
                          fill="#ffbd29"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                <svg
                  id="Capa_2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 110.83 46.43"
                >
                  <g id="Capa_1-2">
                    <g>
                      <rect
                        width="110.83"
                        height="46.43"
                        rx="10.4"
                        ry="10.4"
                        fill="#f2f2f2"
                      />
                      <g>
                        <g>
                          <path
                            d="M26.09,41.07c-2.51,0-4.89-.46-7.05-1.36-2.16-.9-4.07-2.17-5.67-3.77-1.6-1.6-2.87-3.51-3.77-5.67-.9-2.16-1.36-4.54-1.36-7.05s.46-4.84,1.36-7c.9-2.16,2.17-4.07,3.77-5.67,1.6-1.6,3.51-2.88,5.67-3.79,2.16-.92,4.54-1.39,7.05-1.39s4.84,.47,7.01,1.39c2.16,.92,4.07,2.19,5.67,3.79,1.6,1.6,2.88,3.51,3.79,5.67,.92,2.16,1.38,4.52,1.38,7.01s-.47,4.89-1.38,7.05c-.92,2.16-2.19,4.07-3.79,5.67-1.6,1.6-3.51,2.87-5.67,3.77s-4.52,1.36-7.01,1.36Z"
                            fill="#ffbd29"
                          />
                          <path
                            d="M26.09,5.73c2.45,0,4.73,.45,6.86,1.35,2.13,.9,3.98,2.14,5.55,3.71,1.57,1.57,2.81,3.42,3.71,5.55,.9,2.13,1.35,4.41,1.35,6.86s-.45,4.78-1.35,6.9c-.9,2.13-2.14,3.98-3.71,5.55s-3.42,2.8-5.55,3.69c-2.13,.89-4.41,1.33-6.86,1.33s-4.78-.44-6.9-1.33c-2.13-.89-3.98-2.12-5.55-3.69s-2.8-3.42-3.69-5.55c-.89-2.13-1.33-4.43-1.33-6.9s.44-4.73,1.33-6.86c.89-2.13,2.12-3.98,3.69-5.55,1.57-1.57,3.42-2.81,5.55-3.71s4.43-1.35,6.9-1.35m0-.75c-2.57,0-4.99,.48-7.2,1.41-2.21,.94-4.15,2.24-5.79,3.87s-2.93,3.58-3.85,5.79c-.92,2.21-1.39,4.61-1.39,7.15s.47,4.98,1.39,7.19c.92,2.21,2.22,4.16,3.85,5.79,1.64,1.64,3.58,2.93,5.79,3.85,2.21,.92,4.63,1.39,7.19,1.39s4.94-.47,7.15-1.39c2.21-.92,4.16-2.22,5.79-3.85,1.63-1.63,2.94-3.58,3.87-5.79,.94-2.21,1.41-4.63,1.41-7.2s-.48-4.94-1.41-7.15c-.94-2.21-2.24-4.15-3.87-5.79s-3.58-2.94-5.79-3.87c-2.21-.94-4.62-1.41-7.15-1.41h0Z"
                            fill="#fff"
                          />
                        </g>
                        <g>
                          <path
                            d="M26.09,38.45c-4.31,0-7.96-1.47-10.86-4.37-2.9-2.9-4.37-6.55-4.37-10.86s1.47-7.96,4.37-10.86c2.9-2.9,6.55-4.37,10.86-4.37s7.96,1.47,10.86,4.37c2.9,2.9,4.37,6.56,4.37,10.86s-1.47,7.96-4.37,10.86c-2.9,2.9-6.56,4.37-10.86,4.37Z"
                            fill="#fff"
                          />
                          <path
                            d="M26.09,8.36c4.22,0,7.76,1.42,10.6,4.26s4.26,6.37,4.26,10.6-1.42,7.76-4.26,10.6-6.37,4.26-10.6,4.26-7.76-1.42-10.6-4.26-4.26-6.37-4.26-10.6,1.42-7.76,4.26-10.6,6.37-4.26,10.6-4.26m0-.75c-4.41,0-8.15,1.51-11.13,4.48-2.97,2.97-4.48,6.72-4.48,11.13s1.51,8.15,4.48,11.13c2.97,2.97,6.72,4.48,11.13,4.48s8.15-1.51,11.13-4.48c2.97-2.97,4.48-6.72,4.48-11.13s-1.51-8.15-4.48-11.13c-2.97-2.97-6.72-4.48-11.13-4.48h0Z"
                            fill="#ffbd29"
                          />
                        </g>
                        <path
                          d="M20.84,32.57h10.05c.41,0,.75-.09,1.03-.26s.52-.44,.72-.79l3.41-7.95c.06-.15,.11-.36,.15-.66,.04-.29,.07-.51,.07-.66v-1.05c0-.41-.09-.71-.28-.9-.19-.19-.49-.28-.9-.28h-9.35l1.22-5.77v-1.01c0-.15-.12-.32-.35-.52l-.83-.87-7.04,7.6c-.12,.23-.23,.47-.35,.7s-.17,.48-.17,.74v9.05c0,.67,.26,1.27,.79,1.81,.52,.54,1.14,.81,1.84,.81Z"
                          fill="#ffbd29"
                        />
                      </g>
                    </g>
                  </g>
                </svg> */}
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 ad-Banner-2">
            <div
              style={{
                border: "0.1rem dashed white",
                borderRadius: "10px",
                width: "90%",
                marginTop: "2rem",
              }}
            >
              <img src={Image50} alt="/" style={{ width: "100%" }} />
              <img src={Image50} alt="/" style={{ width: "100%" }} />
              <img src={Image50} alt="/" style={{ width: "100%" }} />
              <img src={Image50} alt="/" style={{ width: "100%" }} />
              <img src={Image50} alt="/" style={{ width: "100%" }} />
              <img src={Image50} alt="/" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
