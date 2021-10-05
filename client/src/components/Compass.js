import React from "react";

const Compass = ({ direction }) => {
  let arrow = "";
  switch (direction) {
    case "N":
      arrow = "&#8593";
      break;
    case "NE":
      arrow = "&#8599";
      break;
    case "E":
      arrow = "&#8594";
      break;
    case "SE":
      arrow = "&#8600";
      break;
    case "S":
      arrow = "&#8595";
      break;
    case "SW":
      arrow = "&#8601";
      break;
    case "W":
      arrow = "&#8592";
      break;
    case "NW":
      arrow = "&#8598";
      break;
  }
  console.log(arrow);

  return (
    <>
      <span dangerouslySetInnerHTML={{ __html: arrow }} />
    </>
  );
};

export default Compass;
