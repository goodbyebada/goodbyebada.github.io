"use client";

import { usePathname, useRouter } from "next/navigation";
import Grape from "../page";
import { useEffect, useState } from "react";
import Home from "@/app/page";

export default function Detail() {
  const pathname = usePathname();
  const [content, setContent] = useState("");

  useEffect(() => {
    function getLast() {
      let category = pathname.split("/");
      setContent(category[category.length - 1]);
    }
    getLast();
    //clean up
  }, [pathname]);
  // useEffect를 pathname이 바뀔 때마다 호출

  return (
    <>
      <Grape detailContent={content} />
    </>
  );
}
