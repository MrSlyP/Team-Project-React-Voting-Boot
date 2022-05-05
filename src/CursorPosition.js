import { useEffect, useState } from "react";

//function used to setup cursor's position
//being exported and used in cursor.js
const CursorPosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);
return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);
return mousePosition;
};
export default CursorPosition;