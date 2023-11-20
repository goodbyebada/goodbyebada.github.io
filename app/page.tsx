import Navbar from "./component/Navbar";
import Wine from "./component/wine";
import styles from "./page.module.css";

export default function Home({ mainContent }: { mainContent: any }) {
  return (
    <main className={styles.main}>
      <Navbar>{mainContent == null ? <Wine /> : mainContent}</Navbar>
    </main>
  );
}
