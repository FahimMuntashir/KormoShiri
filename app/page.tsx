import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Image
            src="/kormoshiri-logo.png"
            alt="Kormoshiri Logo"
            width={40}
            height={40}
            className={styles.logoImg}
            priority
          />
          <span className={styles.brand}>Kormoshiri</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#features" className={styles.navLink}>Features</a>
          <a href="#how" className={styles.navLink}>How It Works</a>
          <a href="#success" className={styles.navLink}>Success Stories</a>
          <a href="#partners" className={styles.navLink}>Partners</a>
        </div>
        <div className={styles.navActions}>
          <button className={styles.btn}>Log in</button>
          <button className={`${styles.btn} ${styles.primary}`}>Get Started</button>
        </div>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            • AI-Powered Career Platform for Bangladesh
          </div>
          <h1 className={styles.heroTitle}>
            Your Bridge to a <span className="highlight">Successful Career</span>
          </h1>
          <p className={styles.heroDesc}>
            Personalized career guidance, industry-curated courses, and real-world experience—all in one platform.
          </p>
          <div className={styles.heroBtns}>
            <button className={`${styles.btn} ${styles.primary}`}>Start Your Journey →</button>
            <button className={styles.btn}>For Employers</button>
          </div>
        </div>
        <Image
          src="/kormoshiri-logo.png"
          alt="Kormoshiri Hero Graphic"
          width={380}
          height={380}
          className={styles.heroImg}
          priority
        />
      </section>
      <section id="features" className={styles.featuresSection}>
        <div className={styles.featuresHeader}>
          <div className={styles.featuresBadge}>Key Features</div>
          <h2 className={styles.featuresTitle}>Your All-in-One Career Development Platform</h2>
          <p className={styles.featuresSubtitle}>
            SkillBridge combines AI-powered guidance, industry-led learning, and real-world experience to prepare you for success.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>AI-Personalized Career Roadmap</h3>
            <p className={styles.featureDesc}>
              Get a customized career path based on your skills, interests, and industry demand using advanced AI models.
            </p>
            <a className={styles.featureLink} href="#">Learn more →</a>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Industry-Curated Learning Hub</h3>
            <p className={styles.featureDesc}>
              Access short, hands-on courses co-developed with leading companies in Bangladesh and beyond.
            </p>
            <a className={styles.featureLink} href="#">Learn more →</a>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Capstone Projects + Client Briefs</h3>
            <p className={styles.featureDesc}>
              Work on real problems from actual companies and build a portfolio that stands out to employers.
            </p>
            <a className={styles.featureLink} href="#">Learn more →</a>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Micro-Internship & Freelance Zone</h3>
            <p className={styles.featureDesc}>
              Gain experience through short-term internships and freelance opportunities with mentor support.
            </p>
            <a className={styles.featureLink} href="#">Learn more →</a>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Soft Skills & Communication Suite</h3>
            <p className={styles.featureDesc}>
              Practice interviews, group discussions, and presentations with AI-powered feedback.
            </p>
            <a className={styles.featureLink} href="#">Learn more →</a>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Gamified Progress System</h3>
            <p className={styles.featureDesc}>
              Earn XP, unlock achievements, and climb leaderboards as you develop your professional skills.
            </p>
            <a className={styles.featureLink} href="#">Learn more →</a>
          </div>
        </div>
      </section>
      <section id="process" className={styles.processSection}>
        <div className={styles.processHeader}>
          <div className={styles.processBadge}>The Process</div>
          <h2 className={styles.processTitle}>Your Journey to Career Success</h2>
          <p className={styles.processSubtitle}>
            SkillBridge guides you through every step of your career development journey.
          </p>
        </div>
        <div className={styles.roadmapWrapper}>
          <div className={styles.roadmapLine}></div>
          <div className={styles.roadmapSteps}>
            <div className={styles.roadmapStep}>
              <div className={styles.roadmapCircle}>1</div>
              <h3 className={styles.roadmapStepTitle}>AI Assessment</h3>
              <p className={styles.roadmapStepDesc}>
                Complete a comprehensive assessment to identify your strengths, interests, and career goals.
              </p>
            </div>
            <div className={styles.roadmapArrow}>&rarr;</div>
            <div className={styles.roadmapStep}>
              <div className={styles.roadmapCircle}>2</div>
              <h3 className={styles.roadmapStepTitle}>Personalized Learning</h3>
              <p className={styles.roadmapStepDesc}>
                Follow your custom learning path with industry-curated courses and workshops.
              </p>
            </div>
            <div className={styles.roadmapArrow}>&rarr;</div>
            <div className={styles.roadmapStep}>
              <div className={styles.roadmapCircle}>3</div>
              <h3 className={styles.roadmapStepTitle}>Real Projects</h3>
              <p className={styles.roadmapStepDesc}>
                Apply your skills to real-world projects from actual companies in Bangladesh.
              </p>
            </div>
            <div className={styles.roadmapArrow}>&rarr;</div>
            <div className={styles.roadmapStep}>
              <div className={styles.roadmapCircle}>4</div>
              <h3 className={styles.roadmapStepTitle}>Micro-Internships</h3>
              <p className={styles.roadmapStepDesc}>
                Gain hands-on experience through short-term internships with our partner companies.
              </p>
            </div>
            <div className={styles.roadmapArrow}>&rarr;</div>
            <div className={styles.roadmapStep}>
              <div className={styles.roadmapCircle}>5</div>
              <h3 className={styles.roadmapStepTitle}>Job Placement</h3>
              <p className={styles.roadmapStepDesc}>
                Connect with employers through our network and showcase your verified portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
