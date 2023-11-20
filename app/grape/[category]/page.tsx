"use client";
import { usePathname, useRouter } from "next/navigation";
import Home from "@/app/page";
import Grape from "../page";

export default function Detail() {
  const pathname = usePathname();
  const router = useRouter();

  function getLast(): String {
    let category = pathname.split("/");
    console.log(category);
    return category[category.length - 1];
  }

  return (
    <>
      <Grape detailContent={<div>{getLast()}</div>} />
    </>
  );
}
