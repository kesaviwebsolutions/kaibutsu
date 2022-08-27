import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function Loading({ size = 60 }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Spinner
        animation="border"
        variant="warning"
        style={{ width: size, height: size }}
      />
    </div>
  );
}
