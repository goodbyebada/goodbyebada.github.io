"use client";

import { useRouter } from "next/navigation";
import { type } from "os";
import { useEffect, useState } from "react";
import Home from "../page";
import styles from "../page.module.css";

interface DataType {
  data: string;
  index: number;
}

export interface GrapeProps {
  params: string | null;
}

export default function Grape({ params }: GrapeProps) {
  const names: DataType[] = nameGenerator();

  console.log(`${params}`);

  function nameGenerator(): DataType[] {
    const categories: DataType[] = [];

    const alphabets = "abcdefghijklmnopqrstuvwz";

    for (let index: number = 0; index < alphabets.length; index += 2) {
      let data = `${alphabets[index]}-${alphabets[index + 1]}`;
      categories.push({ data, index });
    }
    return categories;
  }

  const router = useRouter();

  function getDefaultContent() {
    return (
      <div>
        <h2>About Grape</h2>
        <div className={styles.button_list}>
          {names.map((e) => (
            <button
              key={e.index}
              type="button"
              className={styles.button}
              onClick={() => {
                router.push(`./grape/${e.data}`);
              }}
            >
              {e.data}
            </button>
          ))}
        </div>
      </div>
    );
  }

  function getContent() {
    if (JSON.stringify(params) == "{}") {
      return getDefaultContent();
    } else {
      return params;
    }
  }

  return (
    <>
      <Home params={getContent()} />;
    </>
  );
}
