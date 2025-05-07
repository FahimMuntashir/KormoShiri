"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./dashboard.module.css";

interface User {
  id: number;
  full_name: string;
  email: string;
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

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>KormoShiri</div>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Log out
        </button>
      </nav>

      <main className={styles.main}>
        <div className={styles.welcomeSection}>
          <h1>Welcome, {user.full_name}!</h1>
          <p>Your career journey starts here.</p>
        </div>

        <div className={styles.dashboardGrid}>
          <div className={styles.card}>
            <h2>Profile Overview</h2>
            <div className={styles.profileInfo}>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              {profile?.bio && (
                <p>
                  <strong>Bio:</strong> {profile.bio}
                </p>
              )}
              {profile?.skills && (
                <p>
                  <strong>Skills:</strong> {profile.skills}
                </p>
              )}
            </div>
            <button className={styles.editButton}>Edit Profile</button>
          </div>

          <div className={styles.card}>
            <h2>Career Progress</h2>
            <div className={styles.progressInfo}>
              <p>
                Complete your profile to get personalized career
                recommendations.
              </p>
            </div>
            <button className={styles.actionButton}>View Progress</button>
          </div>

          <div className={styles.card}>
            <h2>Recommended Courses</h2>
            <div className={styles.coursesList}>
              <p>Complete your profile to get course recommendations.</p>
            </div>
            <button className={styles.actionButton}>Browse Courses</button>
          </div>

          <div className={styles.card}>
            <h2>Job Opportunities</h2>
            <div className={styles.jobsList}>
              <p>Complete your profile to see matching job opportunities.</p>
            </div>
            <button className={styles.actionButton}>View Jobs</button>
          </div>
        </div>
      </main>
    </div>
  );
}
