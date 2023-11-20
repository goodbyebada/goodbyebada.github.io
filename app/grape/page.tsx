"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Home from "../page";
import styles from "../page.module.css";

export default function Grape({ detailContent }: { detailContent: any }) {
  const names: string[] = nameGenerator();

  const [index, setIndex] = useState(0);

  useEffect(setIndex(index + 1), [index]);

  function nameGenerator(): string[] {
    const catergories: string[] = [];
    const alphabets = "abcdefghijklmnopqrstuvwz";

    for (let index: number = 0; index < alphabets.length; index += 2) {
      let data = `${alphabets[index]}-${alphabets[index + 1]}`;
      catergories.push(data);
    }
    return catergories;
  }

  const router = useRouter();

  function getDefaultContent() {
    return (
      <div>
        <h2>About Grape</h2>
        <div className={styles.button_list}>
          {names.map((name) => (
            <button
              key={index}
              type="button"
              className={styles.button}
              onClick={() => {
                router.push(`./grape/${name}`);
              }}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  function getContent() {
    if (detailContent == null) {
      return getDefaultContent();
    } else {
      return detailContent;
    }
  }

  return (
    <>
      <Home mainContent={getContent()} />
    </>
  );
}
