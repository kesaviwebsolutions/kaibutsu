import React from "react";
import meta from "./img/meta.png";
import wallet from "./img/connect.svg";
import Tabnav from "./Tabnav";
// import { IconName } from "react-icons/ai";
import "./Style.css";
import "./Quack.css";
function Header2() {
  return (
    <>
      <div className="Header21">
        <div className="Header2-desktop">
          <div className="row">
            <div className="col-md-3 col-sm-3">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
                style={{ display: "block", marginTop: "1rem" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="col-md-6 col-sm-6" style={{ marginTop: "0.6rem" }}>
              <span className="Header2">
                <span className="header2-svg" id="header2-svg">
                  <svg
                    onClick="myFunction()"
                    id="Capa_2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 159.24 39.53"
                  >
                    <g id="Capa_1-2">
                      <g>
                        <rect
                          width="159.24"
                          height="39.53"
                          rx="10.4"
                          ry="10.4"
                          fill="#ff9826"
                        />
                        <g>
                          <path
                            d="M34.51,23.97c-.06,1.52-.11,2.87-.23,4.19-.08,.84-.38,1.12-1.26,1.12-1.43,0-2.87-.02-4.32-.04-.42-.02-.67-.29-.7-.76-.02-.55-.02-1.05-.02-1.62,.02-3.44,.04-6.89,.08-10.35,0-1.18-.06-2.36-.06-3.5,0-.32,.02-.63,.08-.95,.08-.55,.32-.72,.88-.72,.99-.02,1.92-.02,2.89-.02h1.45c.67,.02,.91,.23,.93,.91,.08,2.19,0,4.34,.17,6.74h2.02c.08-1.88-.11-3.71-.13-5.54-.02-.44-.02-.91,0-1.39,.02-.53,.27-.82,.8-.82,1.43-.02,2.87-.04,4.36,0,.74,.04,.99,.34,.97,1.03-.04,1.03,.02,2.13,.02,3.2,0,.42-.02,.8-.02,1.24,.02,2.97,.06,5.92,.08,8.91,0,.78-.02,1.54-.13,2.28-.08,1.12-.36,1.33-1.24,1.37-1.39,.08-2.76,.06-4.13,.06-.46,0-.59-.17-.59-.67,0-1.33,.02-2.61,.04-3.9v-.78h-1.96Z"
                            fill="#f2f2f2"
                          />
                          <path
                            d="M53.39,29.19c-1.85,.13-3.75-.02-5.65,.04-2.42,.04-3.79-2.38-3.96-4.38-.27-2.59-.25-5.18-.11-7.78,.04-1.58,.4-3.08,1.45-4.36,1.08-1.33,3.16-1.37,4.68-1.45,1.12-.08,2.21-.04,3.35-.04,2.47,0,4.21,1.64,4.36,4.13,.21,3.16,.36,6.05,.13,9.19-.06,.99-.19,1.83-.61,2.66-.82,1.45-2.13,1.92-3.65,2Zm-3.81-11.04c.02,1.29,.02,2.57,.04,3.9,0,2.74,2.61,2.32,2.61,.19,.02-1.41,.02-3.03-.04-4.47-.21-1.98-2.61-1.31-2.61,.38Z"
                            fill="#f2f2f2"
                          />
                          <path
                            d="M69.6,19.88c.04,2.57,.13,5.1,.15,7.67,0,1.26-.46,1.71-1.71,1.71s-2.4-.04-3.6-.13c-.25,0-.49-.04-.74-.11-.46-.13-.65-.34-.65-.82-.02-.38,0-.8,0-1.2v-9.19h-1.37c-.55,0-1.14,.02-1.75-.02-.76-.1-1.16-.51-1.2-1.31-.04-1.31-.04-2.66-.02-3.98,.02-.95,.44-1.29,1.37-1.26,3.67,.02,7.31,.04,10.98,.08,.4,0,.82-.04,1.22-.06,.7-.04,1.14,.25,1.2,.93,.08,.44,.02,.97,.02,1.43-.02,.97-.04,1.92-.13,2.84-.08,.8-.27,.93-1.12,.95-.84,.02-1.71,.08-2.66,.15v2.32Z"
                            fill="#f2f2f2"
                          />
                          <path
                            d="M85.26,19.88c.04,2.57,.13,5.1,.15,7.67,0,1.26-.46,1.71-1.71,1.71s-2.4-.04-3.6-.13c-.25,0-.49-.04-.74-.11-.46-.13-.65-.34-.65-.82-.02-.38,0-.8,0-1.2v-9.19h-1.37c-.55,0-1.14,.02-1.75-.02-.76-.1-1.16-.51-1.2-1.31-.04-1.31-.04-2.66-.02-3.98,.02-.95,.44-1.29,1.37-1.26,3.67,.02,7.31,.04,10.98,.08,.4,0,.82-.04,1.22-.06,.7-.04,1.14,.25,1.2,.93,.08,.44,.02,.97,.02,1.43-.02,.97-.04,1.92-.13,2.84-.08,.8-.27,.93-1.12,.95-.84,.02-1.71,.08-2.65,.15v2.32Z"
                            fill="#f2f2f2"
                          />
                          <path
                            d="M95.1,18.04c1.29,.13,2.57,.13,3.84,.15,.72,.02,.84,.17,.91,.82,.04,.99,.06,1.92,.08,2.93,0,.42-.17,.65-.61,.72-.42,.06-.8,.06-1.22,.06-.97,.06-1.9,0-2.89,0v.55c1.5,.11,3.03,.06,4.53,.08,.57,0,1.14,.02,1.67,.08,.7,.08,1.03,.4,1.03,1.07,.02,1.22,.02,2.44,0,3.67-.02,.72-.36,1.03-1.14,1.03h-9.63c-.93,0-1.35-.4-1.48-1.31-.08-.82-.17-1.62-.15-2.47,.04-3.98,.1-8.01,.15-12.03,0-.15,0-.29,.04-.46,.13-1.2,.55-1.67,1.79-1.71,1.81-.02,3.56,0,5.37-.02,.78,0,1.64-.06,2.44-.06,.57,0,1.12,.04,1.64,.08,.44,.02,.63,.32,.72,.63,.08,.23,.08,.53,.11,.78v3.29c-.02,.91-.29,1.22-1.22,1.22-1.75-.02-3.48-.06-5.23-.13h-.76v1.01Z"
                            fill="#f2f2f2"
                          />
                          <path
                            d="M114.63,16.59c-.19,.55-.36,.63-.91,.48-.82-.21-1.62-.42-2.45-.55-.27-.04-.59,.04-.82,.17-.53,.34-.53,.78-.02,1.12,.19,.13,.44,.25,.67,.34,.74,.42,1.58,.76,2.32,1.22,.8,.55,1.35,1.2,1.71,1.94,1.35,2.76-.13,6.87-3.04,7.78-.86,.27-1.75,.38-2.63,.34-2.47-.13-4.42-.84-6.05-2.53-.4-.4-.27-1.1-.02-1.58,.67-1.29,1.26-2.38,1.83-2.93,.44-.44,.55-.4,1.07-.02,1.07,.76,1.64,1.35,2.78,1.71,1.03,.32,1.31-.57-.29-1.79-.84-.63-1.81-1.12-2.68-1.75-.51-.38-.95-.8-1.37-1.26-1.81-2.13-1.18-4.95,.51-6.55,2.53-2.36,7.42-1.29,10.24-.59,.7,.27,.21,1.18,.06,1.67-.32,.97-.61,1.88-.93,2.8Z"
                            fill="#f2f2f2"
                          />
                          <path
                            d="M127.47,19.88c.04,2.57,.13,5.1,.15,7.67,0,1.26-.46,1.71-1.71,1.71s-2.4-.04-3.6-.13c-.25,0-.49-.04-.74-.11-.46-.13-.65-.34-.65-.82-.02-.38,0-.8,0-1.2v-9.19h-1.37c-.55,0-1.14,.02-1.75-.02-.76-.1-1.16-.51-1.2-1.31-.04-1.31-.04-2.66-.02-3.98,.02-.95,.44-1.29,1.37-1.26,3.67,.02,7.31,.04,10.98,.08,.4,0,.82-.04,1.22-.06,.7-.04,1.14,.25,1.2,.93,.08,.44,.02,.97,.02,1.43-.02,.97-.04,1.92-.13,2.84-.08,.8-.27,.93-1.12,.95-.84,.02-1.71,.08-2.65,.15v2.32Z"
                            fill="#f2f2f2"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="header2-svg">
                  <svg
                    id="Capa_2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 159.24 39.53"
                  >
                    <g id="Capa_1-2">
                      <g>
                        <rect
                          width="159.24"
                          height="39.53"
                          rx="10.4"
                          ry="10.4"
                          fill="#fff"
                        />
                        <g>
                          <path
                            d="M38,28.22c0,.7-.17,.78-.88,.82-1.22,.04-2.46,.06-3.75,.11-1.18,.06-1.48-.17-1.5-1.29-.04-2.17-.11-4.3-.13-6.38-.06-2.97-.08-5.9-.15-8.89,0-.23,0-.51,.06-.8,.06-.38,.32-.55,.7-.53,1.54,.02,3.05,.11,4.59,.04,.7,0,1.05,.25,1.33,.84,.91,2.23,1.88,4.42,2.8,6.6,.08,.27,.21,.48,.46,.7-.08-.8-.13-1.58-.17-2.4-.1-1.52-.17-3.08-.27-4.64,0-.17-.02-.34,.02-.51,.08-.34,.25-.61,.67-.61,1.6-.02,3.25-.06,4.85-.06,.63,0,.84,.23,.84,.93,0,1.64-.06,3.29-.06,4.95-.04,.74,.04,1.43,.04,2.15,.02,2.53,.02,5.02,0,7.56,0,.55-.08,1.12-.15,1.67-.08,.48-.25,.63-.78,.67-.44,.06-.91,.02-1.35,.02h-3.79c-.82,0-.88-.06-1.2-.8-.63-1.69-1.26-3.33-1.88-4.99-.06-.17-.19-.34-.32-.55,0,1.81,.02,3.62,0,5.39Z"
                            fill="#ff9826"
                          />
                          <path
                            d="M53.55,18.04c1.29,.13,2.57,.13,3.84,.15,.72,.02,.84,.17,.91,.82,.04,.99,.06,1.92,.08,2.93,0,.42-.17,.65-.61,.72-.42,.06-.8,.06-1.22,.06-.97,.06-1.9,0-2.89,0v.55c1.5,.11,3.03,.06,4.53,.08,.57,0,1.14,.02,1.67,.08,.7,.08,1.03,.4,1.03,1.07,.02,1.22,.02,2.44,0,3.67-.02,.72-.36,1.03-1.14,1.03h-9.63c-.93,0-1.35-.4-1.48-1.31-.08-.82-.17-1.62-.15-2.47,.04-3.98,.1-8.01,.15-12.03,0-.15,0-.29,.04-.46,.13-1.2,.55-1.67,1.79-1.71,1.81-.02,3.56,0,5.37-.02,.78,0,1.64-.06,2.44-.06,.57,0,1.12,.04,1.64,.08,.44,.02,.63,.32,.72,.63,.08,.23,.08,.53,.11,.78v3.29c-.02,.91-.29,1.22-1.22,1.22-1.75-.02-3.48-.06-5.23-.13h-.76v1.01Z"
                            fill="#ff9826"
                          />
                          <path
                            d="M70.43,14.02c.19-.91,.53-1.22,1.41-1.22,1.26,.02,2.51,.11,3.77,.11,.46,0,.72,.21,.78,.61,.21,.97,.36,1.88,.53,2.8,.15,.8,.29,1.9,.57,2.68,.59-2.19,1.07-4.68,1.64-6.85,.23-1.12,.27-.91,1.62-.91,.84,0,1.69-.02,2.53,0,.57,.02,1.12,.08,1.67,.11,.34,.04,.48,.23,.46,.55-.02,.29-.04,.63-.13,.97-1.22,5.04-2.44,10.11-3.67,15.13-.04,.13-.06,.32-.1,.48-.17,.61-.44,.8-1.12,.82-.74,.02-1.45,0-2.23,0s-1.67,0-2.46,.02c-.42,0-.65-.19-.76-.53-.53-1.62-.72-3.46-1.39-5.31-.38,1.9-.65,3.62-1.18,5.27-.13,.38-.44,.55-.84,.55h-4.87c-.48,0-.84-.21-.99-.67-.19-.51-.36-1.03-.44-1.54-.72-3.33-1.45-6.66-2.19-9.97-.27-1.35-.63-2.72-.97-4.09-.08-.34-.13-.74-.11-1.07,0-.44,.19-.61,.65-.61,1.58-.08,3.14-.13,4.7-.15,.65-.02,.76,.04,.89,.74,.51,2.53,.86,4.87,1.1,7.21,.42-1.54,.74-3.83,1.14-5.12Z"
                            fill="#ff9826"
                          />
                          <path
                            d="M91.38,18.04c1.29,.13,2.57,.13,3.83,.15,.72,.02,.84,.17,.91,.82,.04,.99,.06,1.92,.08,2.93,0,.42-.17,.65-.61,.72-.42,.06-.8,.06-1.22,.06-.97,.06-1.9,0-2.89,0v.55c1.5,.11,3.03,.06,4.53,.08,.57,0,1.14,.02,1.67,.08,.7,.08,1.03,.4,1.03,1.07,.02,1.22,.02,2.44,0,3.67-.02,.72-.36,1.03-1.14,1.03h-9.63c-.93,0-1.35-.4-1.48-1.31-.08-.82-.17-1.62-.15-2.47,.04-3.98,.11-8.01,.15-12.03,0-.15,0-.29,.04-.46,.13-1.2,.55-1.67,1.79-1.71,1.81-.02,3.56,0,5.37-.02,.78,0,1.64-.06,2.44-.06,.57,0,1.12,.04,1.64,.08,.44,.02,.63,.32,.72,.63,.08,.23,.08,.53,.11,.78v3.29c-.02,.91-.29,1.22-1.22,1.22-1.75-.02-3.48-.06-5.23-.13h-.76v1.01Z"
                            fill="#ff9826"
                          />
                          <path
                            d="M110.92,16.59c-.19,.55-.36,.63-.91,.48-.82-.21-1.62-.42-2.44-.55-.27-.04-.59,.04-.82,.17-.53,.34-.53,.78-.02,1.12,.19,.13,.44,.25,.67,.34,.74,.42,1.58,.76,2.32,1.22,.8,.55,1.35,1.2,1.71,1.94,1.35,2.76-.13,6.87-3.03,7.78-.86,.27-1.75,.38-2.63,.34-2.47-.13-4.42-.84-6.05-2.53-.4-.4-.27-1.1-.02-1.58,.67-1.29,1.26-2.38,1.83-2.93,.44-.44,.55-.4,1.07-.02,1.08,.76,1.64,1.35,2.78,1.71,1.03,.32,1.31-.57-.3-1.79-.84-.63-1.81-1.12-2.68-1.75-.51-.38-.95-.8-1.37-1.26-1.81-2.13-1.18-4.95,.51-6.55,2.53-2.36,7.42-1.29,10.24-.59,.7,.27,.21,1.18,.06,1.67-.32,.97-.61,1.88-.93,2.8Z"
                            fill="#ff9826"
                          />
                          <path
                            d="M123.75,19.88c.04,2.57,.13,5.1,.15,7.67,0,1.26-.46,1.71-1.71,1.71s-2.4-.04-3.6-.13c-.25,0-.48-.04-.74-.11-.46-.13-.65-.34-.65-.82-.02-.38,0-.8,0-1.2v-9.19h-1.37c-.55,0-1.14,.02-1.75-.02-.76-.1-1.16-.51-1.2-1.31-.04-1.31-.04-2.66-.02-3.98,.02-.95,.44-1.29,1.37-1.26,3.67,.02,7.31,.04,10.98,.08,.4,0,.82-.04,1.22-.06,.7-.04,1.14,.25,1.2,.93,.08,.44,.02,.97,.02,1.43-.02,.97-.04,1.92-.13,2.84-.08,.8-.27,.93-1.12,.95-.84,.02-1.71,.08-2.65,.15v2.32Z"
                            fill="#ff9826"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="header2-svg">
                  <svg
                    id="Capa_2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 159.24 39.53"
                  >
                    <g id="Capa_1-2">
                      <g>
                        <rect
                          y="0"
                          width="159.24"
                          height="39.53"
                          rx="10.4"
                          ry="10.4"
                          fill="#fff"
                        />
                        <g>
                          <path
                            d="M34.02,25.87c0,.82,.06,1.39,.06,2.17-.02,.78-.19,1.1-.93,1.12-1.26,.04-2.59,.04-3.92,0-.72-.02-1.16-.17-1.22-.91-.08-.82,.02-1.81-.04-2.61,0-.89-.4-1.18-1.24-.99,.02,.61,.06,.99,.08,1.64,.02,.51,.02,1.05,0,1.6-.06,.7-.42,1.14-1.14,1.18-1.18,.08-2.34,.11-3.54,.02-.76-.02-1.05-.38-1.05-1.18,.04-3.6,.04-6.98,.06-10.58v-4.74c0-.84,.32-1.18,1.14-1.2,1.64-.08,3.25-.13,4.87-.17,.82,0,1.64,0,2.49,.02,.97,0,1.9,.27,2.74,.76,.78,.46,1.22,1.14,1.56,1.9,.78,1.79,1.12,5.79,.38,7.5-.34,.76-.89,1.45-1.62,2.09,1.12,.46,1.33,1.37,1.33,2.38Zm-5.1-7.06c.02-.67,0-1.43-.11-2.15-.11-.74-.57-1.05-1.33-.91-.36,.04-.53,.19-.5,.57,.08,1.18,.19,2.36,.27,3.54,.97,.53,1.64,.08,1.67-1.05Z"
                            fill="#ff9826"
                          />
                          <path
                            d="M45.52,29.17c-1.85,.13-3.75-.02-5.65,.04-2.42,.04-3.79-2.38-3.96-4.38-.27-2.59-.25-5.18-.11-7.78,.04-1.58,.4-3.08,1.45-4.36,1.08-1.33,3.16-1.37,4.68-1.45,1.12-.08,2.21-.04,3.35-.04,2.46,0,4.21,1.64,4.36,4.13,.21,3.16,.36,6.05,.13,9.19-.06,.99-.19,1.83-.61,2.66-.82,1.45-2.13,1.92-3.65,2Zm-3.81-11.04c.02,1.29,.02,2.57,.04,3.9,0,2.74,2.61,2.32,2.61,.19,.02-1.41,.02-3.03-.04-4.47-.21-1.98-2.61-1.31-2.61,.38Z"
                            fill="#ff9826"
                          />
                          <path
                            d="M57.47,22.71c.27,.7,.84,1.03,1.6,.99,.55-.04,1.03-.53,1.2-1.2,.04-.23,.11-.48,.11-.7,.08-3.16-.19-6.17-.23-9.27-.06-.86,.29-1.33,1.18-1.35,.91-.04,1.85-.11,2.78-.11,1.01-.02,1.98-.15,2.13,.84,.51,3.29,.63,6.95,.34,10.28-.19,2.59-.8,4.17-2.89,5.61-2.06,1.24-4.32,1.64-6.68,1.24-.93-.13-1.9-.32-2.72-.67-1.92-.84-3.04-2.28-3.27-4.38-.08-.7-.17-1.39-.17-2.09,.02-2.11,.11-4.21,.17-6.3,.02-.97,.06-1.94,.11-2.91,0-.21-.02-.46,.06-.65,.17-.63,.4-.8,.93-.78,1.37,.06,2.76,.04,4.13,.06,.74,0,1.08,.32,1.1,1.03,.13,3.08-.06,6.03-.08,8.96,0,.46,.06,.93,.21,1.39Z"
                            fill="#ff9826"
                          />
                          <path
                            d="M76.97,22.66h2.23c.65,0,.88,.23,.93,.88,.04,.32,.04,.63,.04,.91,0,1.31,0,2.59-.04,3.9,0,.63-.23,.84-.86,.84-3.43,0-6.87,0-10.33-.04-.13,0-.23,.04-.36,.04-.55-.04-.78-.23-.8-.8-.04-1.58-.13-3.16-.13-4.74-.04-2.57,.04-5.14,.04-7.73,0-1.2-.08-2.42-.13-3.62-.02-.84,.23-1.1,1.03-1.07,1.77,0,3.58,.02,5.37,.02,.82,.02,1.05,.25,1.05,1.1-.02,2.36-.06,4.74-.08,7.06-.04,1.07,0,2.17,0,3.27h2.02Z"
                            fill="#ff9826"
                          />
                          <path
                            d="M86.22,18.03c1.29,.13,2.57,.13,3.83,.15,.72,.02,.84,.17,.91,.82,.04,.99,.06,1.92,.08,2.93,0,.42-.17,.65-.61,.72-.42,.06-.8,.06-1.22,.06-.97,.06-1.9,0-2.89,0v.55c1.5,.11,3.03,.06,4.53,.08,.57,0,1.14,.02,1.67,.08,.7,.08,1.03,.4,1.03,1.07,.02,1.22,.02,2.44,0,3.67-.02,.72-.36,1.03-1.14,1.03h-9.63c-.93,0-1.35-.4-1.48-1.31-.08-.82-.17-1.62-.15-2.47,.04-3.98,.11-8.01,.15-12.03,0-.15,0-.29,.04-.46,.13-1.2,.55-1.67,1.79-1.71,1.81-.02,3.56,0,5.37-.02,.78,0,1.64-.06,2.44-.06,.57,0,1.12,.04,1.64,.08,.44,.02,.63,.32,.72,.63,.08,.23,.08,.53,.11,.78v3.29c-.02,.91-.29,1.22-1.22,1.22-1.75-.02-3.48-.06-5.23-.13h-.76v1.01Z"
                            fill="#ff9826"
                          />
                          <path
                            d="M105.35,19.86c.04,2.57,.13,5.1,.15,7.67,0,1.26-.46,1.71-1.71,1.71s-2.4-.04-3.6-.13c-.25,0-.48-.04-.74-.11-.46-.13-.65-.34-.65-.82-.02-.38,0-.8,0-1.2v-9.19h-1.37c-.55,0-1.14,.02-1.75-.02-.76-.1-1.16-.51-1.2-1.31-.04-1.31-.04-2.66-.02-3.98,.02-.95,.44-1.29,1.37-1.26,3.67,.02,7.31,.04,10.98,.08,.4,0,.82-.04,1.22-.06,.7-.04,1.14,.25,1.2,.93,.08,.44,.02,.97,.02,1.43-.02,.97-.04,1.92-.13,2.84-.08,.8-.27,.93-1.12,.95-.84,.02-1.71,.08-2.65,.15v2.32Z"
                            fill="#ff9826"
                          />
                          <path
                            d="M121.01,19.86c.04,2.57,.13,5.1,.15,7.67,0,1.26-.46,1.71-1.71,1.71s-2.4-.04-3.6-.13c-.25,0-.48-.04-.74-.11-.46-.13-.65-.34-.65-.82-.02-.38,0-.8,0-1.2v-9.19h-1.37c-.55,0-1.14,.02-1.75-.02-.76-.1-1.16-.51-1.2-1.31-.04-1.31-.04-2.66-.02-3.98,.02-.95,.44-1.29,1.37-1.26,3.67,.02,7.31,.04,10.98,.08,.4,0,.82-.04,1.22-.06,.7-.04,1.14,.25,1.2,.93,.08,.44,.02,.97,.02,1.43-.02,.97-.04,1.92-.13,2.84-.08,.8-.27,.93-1.12,.95-.84,.02-1.71,.08-2.65,.15v2.32Z"
                            fill="#ff9826"
                          />
                          <path
                            d="M130.85,18.03c1.29,.13,2.57,.13,3.83,.15,.72,.02,.84,.17,.91,.82,.04,.99,.06,1.92,.08,2.93,0,.42-.17,.65-.61,.72-.42,.06-.8,.06-1.22,.06-.97,.06-1.9,0-2.89,0v.55c1.5,.11,3.03,.06,4.53,.08,.57,0,1.14,.02,1.67,.08,.7,.08,1.03,.4,1.03,1.07,.02,1.22,.02,2.44,0,3.67-.02,.72-.36,1.03-1.14,1.03h-9.63c-.93,0-1.35-.4-1.48-1.31-.08-.82-.17-1.62-.15-2.47,.04-3.98,.11-8.01,.15-12.03,0-.15,0-.29,.04-.46,.13-1.2,.55-1.67,1.79-1.71,1.81-.02,3.56,0,5.37-.02,.78,0,1.64-.06,2.44-.06,.57,0,1.12,.04,1.64,.08,.44,.02,.63,.32,.72,.63,.08,.23,.08,.53,.11,.78v3.29c-.02,.91-.29,1.22-1.22,1.22-1.75-.02-3.48-.06-5.23-.13h-.76v1.01Z"
                            fill="#ff9826"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="header2-svg">
                  <svg
                    id="Capa_2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 159.24 39.53"
                  >
                    <g id="Capa_1-2">
                      <g>
                        <rect
                          x="0"
                          width="159.24"
                          height="39.53"
                          rx="10.4"
                          ry="10.4"
                          fill="#fff"
                        />
                        <g>
                          <path
                            d="M12.37,12.86v-.55c.11-.86,.4-1.14,1.24-1.14,1.48,0,2.91,0,4.38,.04,.91,.04,1.81,.08,2.7,.27,2.42,.48,3.98,2.02,4.61,4.4,.53,1.75,.7,3.58,.57,5.46-.11,1.26-.51,2.55-1.1,3.71-1.16,2-2.82,3.35-5.12,3.88-.72,.17-1.45,.25-2.19,.25-1.26-.02-2.49-.02-3.73-.02-.89,0-1.24-.32-1.24-1.29-.02-2.57,0-5.02,0-7.46-.02-2.53-.11-5.02-.13-7.56Zm7.42,9.99c.06-.29,.15-.61,.15-.91,0-.95-.02-1.9-.06-2.84-.02-.42-.06-.84-.21-1.29-.21-.76-.55-1.29-1.45-1.05,.06,2.15,.17,4.68,.23,6.87,.84,.19,1.18-.25,1.35-.78Z"
                            fill="#ff9826"
                          />
                          <path
                            d="M33.61,25.7c-.13,.8-.21,1.48-.34,2.19-.06,.3-.11,.57-.23,.78-.13,.36-.4,.53-.84,.53-1.62-.02-3.25-.02-4.85-.02-.59,0-.95-.27-.95-.84,0-.67,.04-1.33,.19-1.94,.76-3.62,1.54-7.21,2.32-10.75,.21-1.01,.57-1.94,.88-2.89,.36-1.05,.91-1.41,2.02-1.41,1.85,0,3.69,.02,5.5-.02,.84-.02,1.29,.38,1.6,1.01,.13,.25,.19,.55,.27,.84,.55,2.23,1.08,4.45,1.58,6.68,.5,2.17,.88,4.3,1.31,6.43,.11,.53,.25,1.01,.38,1.5,.04,.19,.08,.4,.08,.59,.02,.46-.17,.67-.61,.7h-.21c-1.45,.02-2.89,.08-4.36,.13-.7,.02-.95-.17-1.1-.84s-.21-1.33-.29-1.94c-.06-.3-.08-.53-.13-.72h-2.23Zm.32-3.75h1.47c-.25-1.88-.51-3.65-.74-5.44-.34,1.81-.63,3.6-.74,5.44Z"
                            fill="#ff9826"
                          />
                          <path
                            d="M54.7,16.57c-.19,.55-.36,.63-.91,.48-.82-.21-1.62-.42-2.44-.55-.27-.04-.59,.04-.82,.17-.53,.34-.53,.78-.02,1.12,.19,.13,.44,.25,.67,.34,.74,.42,1.58,.76,2.32,1.22,.8,.55,1.35,1.2,1.71,1.94,1.35,2.76-.13,6.87-3.03,7.78-.86,.27-1.75,.38-2.63,.34-2.47-.13-4.42-.84-6.05-2.53-.4-.4-.27-1.1-.02-1.58,.67-1.29,1.26-2.38,1.83-2.93,.44-.44,.55-.4,1.07-.02,1.08,.76,1.64,1.35,2.78,1.71,1.03,.32,1.31-.57-.3-1.79-.84-.63-1.81-1.12-2.68-1.75-.51-.38-.95-.8-1.37-1.26-1.81-2.13-1.18-4.95,.51-6.55,2.53-2.36,7.42-1.29,10.24-.59,.7,.27,.21,1.18,.06,1.67-.32,.97-.61,1.88-.93,2.8Z"
                            fill="#ff9826"
                          />
                          <path
                            d="M63.22,23.95c-.06,1.52-.11,2.87-.23,4.19-.08,.84-.38,1.12-1.26,1.12-1.43,0-2.87-.02-4.32-.04-.42-.02-.67-.29-.7-.76-.02-.55-.02-1.05-.02-1.62,.02-3.44,.04-6.89,.08-10.35,0-1.18-.06-2.36-.06-3.5,0-.32,.02-.63,.08-.95,.08-.55,.32-.72,.88-.72,.99-.02,1.92-.02,2.89-.02h1.45c.67,.02,.91,.23,.93,.91,.08,2.19,0,4.34,.17,6.74h2.02c.08-1.88-.11-3.71-.13-5.54-.02-.44-.02-.91,0-1.39,.02-.53,.27-.82,.8-.82,1.43-.02,2.87-.04,4.36,0,.74,.04,.99,.34,.97,1.03-.04,1.03,.02,2.13,.02,3.2,0,.42-.02,.8-.02,1.24,.02,2.97,.06,5.92,.08,8.91,0,.78-.02,1.54-.13,2.28-.08,1.12-.36,1.33-1.24,1.37-1.39,.08-2.76,.06-4.13,.06-.46,0-.59-.17-.59-.67,0-1.33,.02-2.61,.04-3.9v-.78h-1.96Z"
                            fill="#ff9826"
                          />
                          <path
                            d="M83.47,19.59c1.26,.59,1.96,1.6,2.07,2.97,.06,.76,.06,1.5,.04,2.25,0,.67-.34,1.26-.7,1.81-.88,1.26-2.09,2.15-3.65,2.4-.74,.13-1.47,.15-2.23,.15-1.39,.02-2.82,0-4.3-.02-.4,0-.8-.04-1.22-.08-.65-.06-.86-.25-.93-.97-.02-.32,0-.67-.02-1.01-.29-3.41-.34-6.81-.32-10.2,0-1.43-.04-2.84-.04-4.24,0-.23,0-.48,.02-.74,.11-.57,.34-.74,.88-.74,2.38,.08,4.78-.08,7.1,.21,3.14,.42,4.57,2.42,4.03,5.48-.15,.7-.57,1.39-.86,2.04-.06,.15-.17,.25-.25,.42,.15,.11,.25,.17,.38,.25Zm-4.05-1.96c.59-.08,.74-.59,.42-1.05-.15-.23-.34-.44-.59-.53-.57-.17-1.16-.08-1.71-.02,.02,.63,.06,1.12,.08,1.73,.61-.02,1.2-.02,1.79-.13Zm-.08,6.66c.55-.04,.95-.34,1.01-.65,.04-.38-.29-.86-.82-1.05-.04-.02-.13-.04-.21-.04-.51-.04-1.01-.04-1.54-.04v1.79c.57,0,1.05,.04,1.56,0Z"
                            fill="#ff9826"
                          />
                          <path
                            d="M96.39,29.17c-1.85,.13-3.75-.02-5.65,.04-2.42,.04-3.79-2.38-3.96-4.38-.27-2.59-.25-5.18-.11-7.78,.04-1.58,.4-3.08,1.45-4.36,1.08-1.33,3.16-1.37,4.68-1.45,1.12-.08,2.21-.04,3.35-.04,2.46,0,4.21,1.64,4.36,4.13,.21,3.16,.36,6.05,.13,9.19-.06,.99-.19,1.83-.61,2.66-.82,1.45-2.13,1.92-3.65,2Zm-3.81-11.04c.02,1.29,.02,2.57,.04,3.9,0,2.74,2.61,2.32,2.61,.19,.02-1.41,.02-3.03-.04-4.47-.21-1.98-2.61-1.31-2.61,.38Z"
                            fill="#ff9826"
                          />
                          <path
                            d="M108.92,25.7c-.13,.8-.21,1.48-.34,2.19-.06,.3-.11,.57-.23,.78-.13,.36-.4,.53-.84,.53-1.62-.02-3.25-.02-4.85-.02-.59,0-.95-.27-.95-.84,0-.67,.04-1.33,.19-1.94,.76-3.62,1.54-7.21,2.32-10.75,.21-1.01,.57-1.94,.88-2.89,.36-1.05,.91-1.41,2.02-1.41,1.85,0,3.69,.02,5.5-.02,.84-.02,1.29,.38,1.6,1.01,.13,.25,.19,.55,.27,.84,.55,2.23,1.08,4.45,1.58,6.68,.5,2.17,.88,4.3,1.31,6.43,.11,.53,.25,1.01,.38,1.5,.04,.19,.08,.4,.08,.59,.02,.46-.17,.67-.61,.7h-.21c-1.45,.02-2.89,.08-4.36,.13-.7,.02-.95-.17-1.1-.84s-.21-1.33-.29-1.94c-.06-.3-.08-.53-.13-.72h-2.23Zm.32-3.75h1.47c-.25-1.88-.51-3.65-.74-5.44-.34,1.81-.63,3.6-.74,5.44Z"
                            fill="#ff9826"
                          />
                          <path
                            d="M131.66,25.87c0,.82,.06,1.39,.06,2.17-.02,.78-.19,1.1-.93,1.12-1.26,.04-2.59,.04-3.92,0-.72-.02-1.16-.17-1.22-.91-.08-.82,.02-1.81-.04-2.61,0-.89-.4-1.18-1.24-.99,.02,.61,.06,.99,.08,1.64,.02,.51,.02,1.05,0,1.6-.06,.7-.42,1.14-1.14,1.18-1.18,.08-2.34,.11-3.54,.02-.76-.02-1.05-.38-1.05-1.18,.04-3.6,.04-6.98,.06-10.58v-4.74c0-.84,.32-1.18,1.14-1.2,1.64-.08,3.25-.13,4.87-.17,.82,0,1.64,0,2.49,.02,.97,0,1.9,.27,2.74,.76,.78,.46,1.22,1.14,1.56,1.9,.78,1.79,1.12,5.79,.38,7.5-.34,.76-.89,1.45-1.62,2.09,1.12,.46,1.33,1.37,1.33,2.38Zm-5.1-7.06c.02-.67,0-1.43-.11-2.15-.11-.74-.57-1.05-1.33-.91-.36,.04-.53,.19-.5,.57,.08,1.18,.19,2.36,.27,3.54,.97,.53,1.64,.08,1.67-1.05Z"
                            fill="#ff9826"
                          />
                          <path
                            d="M133.27,12.86v-.55c.11-.86,.4-1.14,1.24-1.14,1.48,0,2.91,0,4.38,.04,.91,.04,1.81,.08,2.7,.27,2.42,.48,3.98,2.02,4.61,4.4,.53,1.75,.7,3.58,.57,5.46-.11,1.26-.51,2.55-1.1,3.71-1.16,2-2.82,3.35-5.12,3.88-.72,.17-1.45,.25-2.19,.25-1.26-.02-2.49-.02-3.73-.02-.89,0-1.24-.32-1.24-1.29-.02-2.57,0-5.02,0-7.46-.02-2.53-.11-5.02-.13-7.56Zm7.42,9.99c.06-.29,.15-.61,.15-.91,0-.95-.02-1.9-.06-2.84-.02-.42-.06-.84-.21-1.29-.21-.76-.55-1.29-1.45-1.05,.06,2.15,.17,4.68,.23,6.87,.84,.19,1.18-.25,1.35-.78Z"
                            fill="#ff9826"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </span>
            </div>
            <div className="col-md-3 col-sm-3">
              <button
                type="button"
                className="btn-primary connect-wallet"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                style={{
                  display: "block",
                  float: "right",
                  marginTop: "1rem",
                  fontSize: "1rem",
                  color: " #ff9826",
                  fontWeight: "800",
                  border: "none",
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
              >
                CONNECT WALLET
              </button>
            </div>
          </div>
        </div>

        {/* .................................................................................... */}

        <Tabnav />

        {/*MODAL  */}

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content background">
              <div className="modal-header">
                <h5
                  className="modal-title ms-auto text-light"
                  id="staticBackdropLabel"
                >
                  Please Connect Your Wallet
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div
                  className="wallet-images"
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <img
                    src={meta}
                    alt=""
                    className="w-25 px-3 py-3"
                    // onClick={() => {
                    //   Metamask()
                    // }}
                  />
                  <img
                    src={wallet}
                    alt=""
                    className="w-25 px-3 py-3"
                    // onClick={() => {
                    //   WalletC()
                    // }}
                  />
                </div>
              </div>
              {/* <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary autoClose"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div> */}
            </div>
          </div>
        </div>

        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabIndex="-1"
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
              {/* Offcanvas with body scrolling */}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div>Telegram</div>
            <div>Twitter</div>
            <div>Cloud chat</div>
            <div>Whitepaper</div>
            <div>Audit</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header2;
