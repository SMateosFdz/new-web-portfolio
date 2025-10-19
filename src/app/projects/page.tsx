import styles from "./page.module.css";
import Link from "next/link";

export default function Projects() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Projects</h1>
      </header>
      <main className={styles.main}>
        <h2>Current, in development</h2>
        <div>
            <h3>Studlendar</h3>
            <p>Web app for students that want to improve their organization and marks!</p>
        </div>
        <div>
            <h3>Web portfolio</h3>
            <p>My personal web portfolio</p>
        </div>
        <h2>Future</h2>
        <div>
            <h3>Library of components with Storybook</h3>
            <p>Idea in progress!</p>
        </div>
        <div>
            <h3>Web page for PC creation</h3>
            <p>Idea in progress!</p>
        </div>
      </main>
      <footer className={styles.footer}>
        <Link href="/">Return to main page</Link>
      </footer>
    </div>
  );
}