import Navbar from "./component/Navbar";
import Wine from "./component/wine";
import styles from "./page.module.css";

export default function Home({ params }: { params: any }) {
  return (
    <main className={styles.main}>
      <Navbar>{params == null ? <Wine /> : params}</Navbar>
    </main>
  );
}
