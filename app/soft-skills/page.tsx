"use client";
import Link from "next/link";
import styles from "../dashboard/dashboard.module.css";

export default function SoftSkills() {
  return (
    <div className={styles.dashboardWrapper}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarBrand}>KormoShiri</div>
        <nav className={styles.sidebarNav}>
          <Link className={styles.sidebarNavItem} href="/dashboard">
            Overview
          </Link>
          <Link className={styles.sidebarNavItem} href="/career-roadmap">
            Career Roadmap
          </Link>
          <Link className={styles.sidebarNavItem} href="/learning-hub">
            Learning Hub
          </Link>
          <Link className={styles.sidebarNavItem} href="/projects">
            Projects
          </Link>
          <Link
            className={styles.sidebarNavItem + " " + styles.active}
            href="/soft-skills"
          >
            Soft Skills
          </Link>
          <Link className={styles.sidebarNavItem} href="/portfolio">
            Portfolio
          </Link>
        </nav>
        <div className={styles.sidebarBottom}>
          <Link className={styles.sidebarNavItem} href="#">
            Settings
          </Link>
        </div>
      </aside>
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1>Soft Skills</h1>
        </header>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Practice & Improve</div>
          <div className={styles.cardSub}>
            Develop your communication, teamwork, and leadership skills.
          </div>
          <div style={{ marginTop: 32, color: "#888", textAlign: "center" }}>
            Soft skills activities will appear here.
          </div>
        </div>
      </main>
    </div>
  );
}
