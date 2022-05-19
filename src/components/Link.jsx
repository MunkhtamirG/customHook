import React from "react";

export default function Link(props) {
  const style = {
    outer: {
      display: "flex",
      width: "100%",
      justifyContent: "space-around",
    },
    inner: {
      backgroundColor: props.selected ? "gray" : "white",
      padding: "20px",
      borderRadius: "20px",
      fontSize: "40px",
    },
  };
  return (
    <div>
      <h3 style={style.inner} onClick={props.onclick}>
        {props.name}
      </h3>
    </div>
  );
}
