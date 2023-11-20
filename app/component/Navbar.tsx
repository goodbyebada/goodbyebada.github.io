import Link from "next/link";
import styles from "../page.module.css";

export default function Navbar({ children }: { children: any }) {
  return (
    <div>
      <div className={styles.header}>
        <h2 className={styles.header_title}>Header</h2>
        <div className={styles.header_navBar}>
          <Link href="/">Wine</Link>
          <Link href="/grape">Grape</Link>
          <Link href="/winary">Winary</Link>
          <Link href="/article">Article</Link>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
