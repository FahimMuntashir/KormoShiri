"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./dashboard.module.css";

interface User {
  id: number;
  full_name: string;
  email: string;
  role: "student" | "recruiter";
}

interface Profile {
  id: number;
  user_id: number;
  bio: string | null;
  skills: string | null;
  education: string | null;
  experience: string | null;
  profile_picture: string | null;
}

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user");
    const profileData = localStorage.getItem("profile");

    if (!userData) {
      router.push("/login");
      return;
    }

    setUser(JSON.parse(userData));
    if (profileData) {
      setProfile(JSON.parse(profileData));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("profile");
    router.push("/login");
  };

  if (!user) {
    return null;
  }

  // Mock data for minimal functionality
  const progress = 78;
  const xp = 3240;
  const xpThisWeek = 120;
  const rank = "Silver Developer Rank";
  const deadlines = [
    { name: "Frontend Project", due: "2 days" },
    { name: "Mock Interview", due: "5 days" },
  ];
  const nextSteps = [
    {
      title: "Complete React Fundamentals",
      desc: "3 modules remaining · 65% complete",
      icon: "📄",
    },
    {
      title: "Start E-commerce Project",
      desc: "Deadline in 7 days",
      icon: "📅",
    },
    {
      title: "Practice Mock Interview",
      desc: "Scheduled for Friday",
      icon: "💬",
    },
  ];
  const skills = [
    { name: "React.js", value: 65 },
    { name: "Communication", value: 82 },
    { name: "Problem Solving", value: 70 },
    { name: "UI/UX Design", value: 45 },
  ];

  return (
    <div className={styles.dashboardWrapper}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarBrand}>KormoShiri</div>
        <nav className={styles.sidebarNav}>
          <a className={styles.sidebarNavItem + " " + styles.active}>
            Overview
          </a>
          <a className={styles.sidebarNavItem}>Career Roadmap</a>
          <a className={styles.sidebarNavItem}>Learning Hub</a>
          <a className={styles.sidebarNavItem}>Projects</a>
          <a className={styles.sidebarNavItem}>Soft Skills</a>
          <a className={styles.sidebarNavItem}>Portfolio</a>
        </nav>
        <div className={styles.sidebarBottom}>
          <a className={styles.sidebarNavItem}>Settings</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1>Dashboard</h1>
          <div className={styles.welcome}>Welcome, {user.full_name}</div>
        </header>
        <div className={styles.topCards}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Overall Progress</div>
            <div className={styles.progressPercent}>{progress}%</div>
            <div className={styles.progressBarBg}>
              <div
                className={styles.progressBar}
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className={styles.cardSub}>
              Career readiness score based on all activities
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>XP Points</div>
            <div className={styles.xpPoints}>{xp.toLocaleString()}</div>
            <div className={styles.xpThisWeek}>
              +{xpThisWeek} this week{" "}
              <span className={styles.xpRank}>· {rank}</span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Upcoming Deadlines</div>
            <div className={styles.deadlineCount}>{deadlines.length}</div>
            <div className={styles.deadlineList}>
              {deadlines.map((d, i) => (
                <div key={i} className={styles.deadlineItem}>
                  {d.name} ({d.due})
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.bottomCards}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Recommended Next Steps</div>
            <div className={styles.cardSub}>Based on your career roadmap</div>
            <ul className={styles.nextStepsList}>
              {nextSteps.map((step, i) => (
                <li key={i} className={styles.nextStepItem}>
                  <span className={styles.nextStepIcon}>{step.icon}</span>
                  <div>
                    <div className={styles.nextStepTitle}>{step.title}</div>
                    <div className={styles.nextStepDesc}>{step.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Skill Progress</div>
            <div className={styles.cardSub}>Your top skills development</div>
            <ul className={styles.skillList}>
              {skills.map((skill, i) => (
                <li key={i} className={styles.skillItem}>
                  <div className={styles.skillNameRow}>
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className={styles.skillBarBg}>
                    <div
                      className={styles.skillBar}
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
