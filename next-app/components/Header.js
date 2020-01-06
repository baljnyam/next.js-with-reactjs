import React from "react";
import Link from "next/link";
import MyLink from "../components/MyLink";

export default () => (
  <div>
    <Link href="/index">
      <a className="title">The pizza place</a>
    </Link>
    <style jsx>{`
      div {
        display: flex;
        justify-content: center;
      }
    `}</style>
  </div>
);
