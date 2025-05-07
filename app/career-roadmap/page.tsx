"use client";
import Link from "next/link";
import styles from "../dashboard/dashboard.module.css";

export default function CareerRoadmap() {
  return (
    <div className={styles.dashboardWrapper}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarBrand}>KormoShiri</div>
        <nav className={styles.sidebarNav}>
          <Link className={styles.sidebarNavItem} href="/dashboard">
            Overview
          </Link>
          <Link
            className={styles.sidebarNavItem + " " + styles.active}
            href="/career-roadmap"
          >
            Career Roadmap
          </Link>
          <Link className={styles.sidebarNavItem} href="/learning-hub">
            Learning Hub
          </Link>
          <Link className={styles.sidebarNavItem} href="/projects">
            Projects
          </Link>
          <Link className={styles.sidebarNavItem} href="/soft-skills">
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
          <h1>Career Roadmap</h1>
        </header>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Your Journey</div>
          <div className={styles.cardSub}>
            Visualize your career steps and milestones.
          </div>
          <div style={{ marginTop: 32, color: "#888", textAlign: "center" }}>
            Timeline and steps will appear here.
          </div>
        </div>
      </main>
    </div>
  );
}
