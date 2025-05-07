"use client";
import Link from "next/link";
import styles from "./dashboard.module.css";

const candidates = [
  {
    initials: "RA",
    name: "Rahul Ahmed",
    title: "Frontend Developer · BUET",
    skills: ["React", "JavaScript", "UI/UX"],
    match: 95,
    matchColor: styles.matchPercent,
  },
  {
    initials: "ST",
    name: "Sadia Tasneem",
    title: "Full Stack Developer · DU",
    skills: ["React", "Node.js", "MongoDB"],
    match: 90,
    matchColor: styles.matchPercent,
  },
  {
    initials: "MH",
    name: "Mahir Hasan",
    title: "UI/UX Designer · NSU",
    skills: ["Figma", "UI Design", "HTML/CSS"],
    match: 85,
    matchColor: styles.matchPercent + " " + styles.matchYellow,
  },
];

export default function RecruiterDashboard() {
  return (
    <div className={styles.recruiterWrapper}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarBrand}>KormoShiri</div>
        <nav className={styles.sidebarNav}>
          <Link
            className={styles.sidebarNavItem + " " + styles.active}
            href="/recruiter/dashboard"
          >
            Overview
          </Link>
          <Link className={styles.sidebarNavItem} href="/recruiter/students">
            Browse Students
          </Link>
          <Link className={styles.sidebarNavItem} href="/recruiter/projects">
            Projects
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
          <h1>Recruiter Dashboard</h1>
          <div className={styles.welcome}>Welcome, TechSolutions Ltd.</div>
        </header>
        <div className={styles.topCards}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Available Students</div>
            <div className={styles.cardValue}>248</div>
            <div className={styles.cardSub}>
              Students matching your company's skill requirements
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Active Projects</div>
            <div className={styles.cardValue}>3</div>
            <div className={styles.cardSub}>
              Projects currently posted on the platform
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Applications</div>
            <div className={styles.cardValue}>18</div>
            <div className={styles.cardSub}>
              New applications in the last 7 days
            </div>
          </div>
        </div>
        <section className={styles.candidatesSection}>
          <div className={styles.candidatesHeader}>Top Candidates</div>
          <div className={styles.candidatesSub}>
            Students matching your requirements
          </div>
          <div className={styles.candidateList}>
            {candidates.map((c, i) => (
              <div className={styles.candidateCard} key={i}>
                <div className={styles.candidateInfo}>
                  <div className={styles.candidateAvatar}>{c.initials}</div>
                  <div className={styles.candidateDetails}>
                    <div className={styles.candidateName}>{c.name}</div>
                    <div className={styles.candidateTitle}>{c.title}</div>
                    <div className={styles.candidateTags}>
                      {c.skills.map((s, j) => (
                        <span className={styles.candidateTag} key={j}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span className={c.matchColor}>{c.match}% Match</span>
                  <button className={styles.viewProfileBtn}>
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.candidatesFooter}>
            <button className={styles.candidatesFooterBtn}>
              <span style={{ fontSize: 18, marginRight: 4 }}>🔍</span> View All
              Candidates
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
