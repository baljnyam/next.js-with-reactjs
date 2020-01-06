import React from "react";

export default ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        padding: 10px;
        display: flex;
        justify-content: center;
      }
    `}</style>
  </div>
);
