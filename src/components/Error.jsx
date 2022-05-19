import React from "react";

export default function Error() {
  const styleError = {
    background:
      "#bdc3c7,-webkit-linear-gradient(to right, #2c3e50, #bdc3c7),linear-gradient(to right, #2c3e50, #bdc3c7)",

    height: "100vh",
    color: "white",
    textAlign: "center",
    paddingTop: "45vh",
    fontSize: "100px",
    fontWeight: "900",
  };
  return <div style={styleError}>Error</div>;
}
