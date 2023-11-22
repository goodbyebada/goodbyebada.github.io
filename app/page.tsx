import { Content } from "next/font/google";
import Navbar from "./component/Navbar";
import Wine from "./component/wine";
import styles from "./page.module.css";

export interface ParamsInterface {
  content: any | null;
}

export default function Home({ params }: { params: ParamsInterface }) {
  function isEmptyObj() {
    if (params.constructor === Object && Object.keys(params).length === 0) {
      /* default component*/
      return true;
    }
    /* params가 존재할때 */
    return false;
  }

  console.log(params);

  return (
    <main className={styles.main}>
      <Navbar>{isEmptyObj() ? <Wine /> : params}</Navbar>
    </main>
  );
}
