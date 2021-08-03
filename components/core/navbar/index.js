import React from "react";

export default function Navbar() {
  return (
    <>
      <div>This is the Navbar</div>

      <style jsx>
        {`
          div {
            background: #fff;
            color: #000;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 10px;
            font-size: 16px;
            font-weight: light;
          }
        `}
      </style>
    </>
  );
}
