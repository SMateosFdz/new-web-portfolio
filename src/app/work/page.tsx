import styles from "./page.module.css";
import Link from "next/link";

export default function Work() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Work experience</h1>
      </header>
      <main className={styles.main}>
        <div>
            <h2>Decathlon España S.A.</h2>
            <p>Technical parcel handler</p>
            <p>July 2023 - September 2023</p>
        </div>
        <div>
            <h2>Decathlon España S.A.</h2>
            <p>Technical parcel handler</p>
            <p>June 2024 - August 2024</p>
        </div>
        <div>
            <h2>NTT Data España</h2>
            <p>Frontend Intern (university internship)</p>
            <p>February 2025 - July 2025</p>
        </div>
        <div>
            <h2>NTT Data España</h2>
            <p>Frontend junior engineer</p>
            <p>July 2025 - Present</p>
        </div>
      </main>
      <footer className={styles.footer}>
        <Link href="/">Return to main page</Link>
      </footer>
    </div>
  );
}