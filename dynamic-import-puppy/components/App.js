import React from "react";

export default ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
          monospace;
      }

      h1 {
        margin-bottom: 0;
        font-size: 37px;
      }

      h2 {
        font-size: 20px;
        margin-top: 5px;
      }

      p {
        font-size: 16px;
      }
      div {
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
      }
    `}</style>
  </div>
);
