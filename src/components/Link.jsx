import React from "react";

export default function Link(props) {
  const style = {
    outer: {
      display: "flex",
      width: "100%",
      justifyContent: "space-around",
      marginTop: "40px",
    },
    inner: {
      backgroundColor: props.selected ? "teal" : "orange",
      padding: "20px",
      borderRadius: "20px",
      fontSize: "40px",
      marginTop: "40px",
    },
  };
  return (
    <div>
      <h3 style={style.inner} onClick={props.onclick} className="btn  ">
        {props.name}
      </h3>
    </div>
  );
}
