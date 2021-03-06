import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MyLink({ href, title, prefetch }) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.pathname === href ? "red" : "black"
  };

  useEffect(() => {
    if (prefetch) router.prefetch(href);
  });

  const handleClick = e => {
    e.preventDefault();
    console.log("Having fun with Next.js.");
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick}>
      {title}
      <style jsx>{`
        a {
        margin: 10px;
      `}</style>
    </a>
  );
}
