import React from "react";
import CursorPosition from "./CursorPosition";

//inspired by
//https://blog.devgenius.io/how-to-create-a-custom-cursor-by-using-react-with-no-library-f5f890d82968
const Cursor = () => {
const { x, y } = CursorPosition();
  return (
    <>
      <div
        className={"ring"}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
      <div
        className={"dot"}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};
export default Cursor;




