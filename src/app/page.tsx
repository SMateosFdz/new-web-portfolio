import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Santiago Mateos Fernández</h1>
        <h2>Web portfolio</h2>
      </header>
      <main className={styles.main}>
        <ul>
            <li><Link href="/work">Work experience</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact me!</Link></li>
        </ul>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/SMateosFdz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github-mark-white.svg"
            alt="Github icon"
            width={16}
            height={16}
          />
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/santiago-mateos-fernandez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin-white.svg"
            alt="LinkedIn icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        {/* <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a> */}
      </footer>
    </div>
  );
}
