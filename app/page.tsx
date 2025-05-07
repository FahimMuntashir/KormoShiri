"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import styles from "./Home.module.css";

const coursesData = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    category: "Software Development",
    duration: "12 weeks",
    level: "Intermediate",
    rating: 4.8,
    reviews: 463,
    enrolls: 1940,
    price: "৳1,999",
    popular: true,
  },
  {
    id: 2,
    title: "Data Analysis with Python",
    category: "Data Science",
    duration: "8 weeks",
    level: "Beginner",
    rating: 4.7,
    reviews: 310,
    enrolls: 1420,
    price: "৳1,499",
    popular: false,
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    category: "Design",
    duration: "6 weeks",
    level: "Beginner",
    rating: 4.9,
    reviews: 256,
    enrolls: 1560,
    price: "৳1,999",
    popular: true,
  },
  {
    id: 4,
    title: "Digital Marketing Strategy",
    category: "Digital Marketing",
    duration: "6 weeks",
    level: "Intermediate",
    rating: 4.6,
    reviews: 188,
    enrolls: 970,
    price: "৳1,499",
    popular: false,
  },
  {
    id: 5,
    title: "Machine Learning Fundamentals",
    category: "Data Science",
    duration: "10 weeks",
    level: "Intermediate",
    rating: 4.7,
    reviews: 170,
    enrolls: 860,
    price: "৳1,499",
    popular: false,
  },
  {
    id: 6,
    title: "Mobile App Development",
    category: "Software Development",
    duration: "8 weeks",
    level: "Advanced",
    rating: 4.7,
    reviews: 170,
    enrolls: 660,
    price: "৳1,499",
    popular: false,
  },
  {
    id: 7,
    title: "Business Analytics Essentials",
    category: "Business",
    duration: "7 weeks",
    level: "Beginner",
    rating: 4.5,
    reviews: 90,
    enrolls: 410,
    price: "৳1,299",
    popular: false,
  },
];

const courseCategories = [
  "All Courses",
  "Software Development",
  "Data Science",
  "Digital Marketing",
  "Design",
  "Business",
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const filteredCourses =
    selectedCategory === "All Courses"
      ? coursesData
      : coursesData.filter((c) => c.category === selectedCategory);

  return (
    <div className={styles.page}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Image
            src="/logo.png"
            alt="Kormoshiri Logo"
            width={400}
            height={400}
            className={styles.logoImg}
            priority
          />
        </div>
        <div className={styles.navLinks}>
          <a href="#features" className={styles.navLink}>
            Features
          </a>
          <a href="#how" className={styles.navLink}>
            How It Works
          </a>
          <a href="#success" className={styles.navLink}>
            Success Stories
          </a>
          <a href="#partners" className={styles.navLink}>
            Partners
          </a>
        </div>
        <div className={styles.navActions}>
          <Link href="/login" className={styles.btn}>
            Log in
          </Link>
          <Link href="/register" className={`${styles.btn} ${styles.primary}`}>
            Get Started
          </Link>
        </div>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            • AI-Powered Career Platform for Bangladesh
          </div>
          <h1 className={styles.heroTitle}>
            Your Bridge to a{" "}
            <span className="highlight">Successful Career</span>
          </h1>
          <p className={styles.heroDesc}>
            Personalized career guidance, industry-curated courses, and
            real-world experience—all in one platform.
          </p>
          <div className={styles.heroBtns}>
            <button className={`${styles.btn} ${styles.primary}`}>
              Start Your Journey →
            </button>
            <button className={styles.btn}>For Employers</button>
          </div>
        </div>
        <Image
          src="/hero.png"
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
          <h2 className={styles.featuresTitle}>
            Your All-in-One Career Development Platform
          </h2>
          <p className={styles.featuresSubtitle}>
            SkillBridge combines AI-powered guidance, industry-led learning, and
            real-world experience to prepare you for success.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>
              AI-Personalized Career Roadmap
            </h3>
            <p className={styles.featureDesc}>
              Get a customized career path based on your skills, interests, and
              industry demand using advanced AI models.
            </p>
            <a className={styles.featureLink} href="#">
              Learn more →
            </a>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>
              Industry-Curated Learning Hub
            </h3>
            <p className={styles.featureDesc}>
              Access short, hands-on courses co-developed with leading companies
              in Bangladesh and beyond.
            </p>
            <a className={styles.featureLink} href="#">
              Learn more →
            </a>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>
              Capstone Projects + Client Briefs
            </h3>
            <p className={styles.featureDesc}>
              Work on real problems from actual companies and build a portfolio
              that stands out to employers.
            </p>
            <a className={styles.featureLink} href="#">
              Learn more →
            </a>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>
              Micro-Internship & Freelance Zone
            </h3>
            <p className={styles.featureDesc}>
              Gain experience through short-term internships and freelance
              opportunities with mentor support.
            </p>
            <a className={styles.featureLink} href="#">
              Learn more →
            </a>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>
              Soft Skills & Communication Suite
            </h3>
            <p className={styles.featureDesc}>
              Practice interviews, group discussions, and presentations with
              AI-powered feedback.
            </p>
            <a className={styles.featureLink} href="#">
              Learn more →
            </a>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Gamified Progress System</h3>
            <p className={styles.featureDesc}>
              Earn XP, unlock achievements, and climb leaderboards as you
              develop your professional skills.
            </p>
            <a className={styles.featureLink} href="#">
              Learn more →
            </a>
          </div>
        </div>
      </section>
      <section id="process" className={styles.processSection}>
        <div className={styles.processHeader}>
          <div className={styles.processBadge}>The Process</div>
          <h2 className={styles.processTitle}>
            Your Journey to Career Success
          </h2>
          <p className={styles.processSubtitle}>
            SkillBridge guides you through every step of your career development
            journey.
          </p>
        </div>
        <div className={styles.roadmapWrapper}>
          <div className={styles.roadmapLine}></div>
          <div className={styles.roadmapSteps}>
            <div className={styles.roadmapStep}>
              <div className={styles.roadmapCircle}>1</div>
              <h3 className={styles.roadmapStepTitle}>AI Assessment</h3>
              <p className={styles.roadmapStepDesc}>
                Complete a comprehensive assessment to identify your strengths,
                interests, and career goals.
              </p>
            </div>
            <div className={styles.roadmapArrow}>&rarr;</div>
            <div className={styles.roadmapStep}>
              <div className={styles.roadmapCircle}>2</div>
              <h3 className={styles.roadmapStepTitle}>Personalized Learning</h3>
              <p className={styles.roadmapStepDesc}>
                Follow your custom learning path with industry-curated courses
                and workshops.
              </p>
            </div>
            <div className={styles.roadmapArrow}>&rarr;</div>
            <div className={styles.roadmapStep}>
              <div className={styles.roadmapCircle}>3</div>
              <h3 className={styles.roadmapStepTitle}>Real Projects</h3>
              <p className={styles.roadmapStepDesc}>
                Apply your skills to real-world projects from actual companies
                in Bangladesh.
              </p>
            </div>
            <div className={styles.roadmapArrow}>&rarr;</div>
            <div className={styles.roadmapStep}>
              <div className={styles.roadmapCircle}>4</div>
              <h3 className={styles.roadmapStepTitle}>Micro-Internships</h3>
              <p className={styles.roadmapStepDesc}>
                Gain hands-on experience through short-term internships with our
                partner companies.
              </p>
            </div>
            <div className={styles.roadmapArrow}>&rarr;</div>
            <div className={styles.roadmapStep}>
              <div className={styles.roadmapCircle}>5</div>
              <h3 className={styles.roadmapStepTitle}>Job Placement</h3>
              <p className={styles.roadmapStepDesc}>
                Connect with employers through our network and showcase your
                verified portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.advisorSection}>
        <div className={styles.advisorContainer}>
          <div className={styles.advisorLeft}>
            <div className={styles.advisorBadge}>AI-Powered Guidance</div>
            <h2 className={styles.advisorTitle}>
              Your Personal Career Advisor
            </h2>
            <p className={styles.advisorDesc}>
              Our AI analyzes your skills, interests, and the current job market
              to create a personalized career roadmap just for you.
            </p>
            <ul className={styles.advisorList}>
              <li>Personalized skill recommendations based on your goals</li>
              <li>Real-time job market analysis for Bangladesh</li>
              <li>Custom learning paths tailored to your career aspirations</li>
              <li>Progress tracking and adaptive recommendations</li>
            </ul>
            <button className={styles.advisorDemoBtn}>
              Try AI Advisor Demo
            </button>
          </div>
          <div className={styles.advisorRight}>
            <div className={styles.advisorChatBox}>
              <div className={styles.advisorChatHeader}>
                <span className={styles.advisorChatTitle}>
                  AI Career Advisor
                </span>
                <span className={styles.advisorChatSub}>
                  Powered by GPT/SMART models
                </span>
              </div>
              <div className={styles.advisorChatMsg}>
                <div className={styles.advisorChatMsgGray}>
                  Based on your interest in data science and the current job
                  market in Bangladesh, I recommend focusing on these skills:
                </div>
                <div className={styles.advisorChatMsgGreen}>
                  1. Python Programming
                  <br />
                  2. SQL & Database Management
                  <br />
                  3. Data Visualization
                  <br />
                  4. Machine Learning Fundamentals
                </div>
                <div className={styles.advisorChatMsgGray}>
                  The tech sector in Dhaka currently has 120+ open positions
                  requiring these skills, with an average salary of
                  65,000/month.
                </div>
                <div className={styles.advisorChatMsgGray}>
                  Would you like me to create a 3-month learning roadmap for
                  these skills?
                </div>
                <div className={styles.advisorChatUser}>hello</div>
              </div>
              <div className={styles.advisorChatInputRow}>
                <input
                  className={styles.advisorChatInput}
                  placeholder="Type your message..."
                  disabled
                />
                <button className={styles.advisorChatSendBtn} disabled>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.coursesSection}>
        <div className={styles.coursesHeader}>
          <div className={styles.coursesBadge}>Learning Paths</div>
          <h2 className={styles.coursesTitle}>Explore Our Courses</h2>
          <p className={styles.coursesSubtitle}>
            Industry-curated courses designed to build the skills employers are looking for.
          </p>
        </div>
        <div className={styles.coursesFilters}>
          {courseCategories.map((cat) => (
            <button
              key={cat}
              className={
                styles.coursesFilterBtn +
                (selectedCategory === cat ? " " + styles.coursesFilterActive : "")
              }
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className={styles.coursesGrid}>
          {filteredCourses.map((course) => (
            <div className={styles.courseCard} key={course.id}>
              <div className={styles.courseCardTop}>
                <span className={styles.courseTag}>{course.category}</span>
                {course.popular && (
                  <span className={styles.courseTagGreen}>Popular</span>
                )}
              </div>
              <div className={styles.courseImgPlaceholder}></div>
              <div className={styles.courseCardBody}>
                <div className={styles.courseTitle}>{course.title}</div>
                <div className={styles.courseMetaRow}>
                  <span className={styles.courseMeta}>{course.duration}</span>
                  <span className={styles.courseMeta}>{course.level}</span>
                </div>
                <div className={styles.courseStatsRow}>
                  <span className={styles.courseRating}>{course.rating} ({course.reviews})</span>
                  <span className={styles.courseEnrolls}>{course.enrolls}</span>
                </div>
                <div className={styles.courseBottomRow}>
                  <span className={styles.coursePrice}>{course.price}</span>
                  <button className={styles.courseEnrollBtn}>Enroll Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.coursesFooter}>
          <button className={styles.coursesViewAllBtn}>View All Courses →</button>
        </div>
      </section>
      <section className={styles.partnersSection}>
        <div className={styles.partnersHeader}>
          <div className={styles.partnersBadge}>Our Network</div>
          <h2 className={styles.partnersTitle}>Industry Partners</h2>
          <p className={styles.partnersSubtitle}>
            We collaborate with leading companies to ensure our curriculum meets
            industry standards.
          </p>
        </div>
        <div className={styles.partnersLogosRow}>
          <div className={styles.partnerLogoPlaceholder}></div>
          <div className={styles.partnerLogoPlaceholder}></div>
          <div className={styles.partnerLogoPlaceholder}></div>
          <div className={styles.partnerLogoPlaceholder}></div>
          <div className={styles.partnerLogoPlaceholder}></div>
          <div className={styles.partnerLogoPlaceholder}></div>
        </div>
      </section>
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Build Your Future?</h2>
          <p className={styles.ctaSubtitle}>
            Join thousands of students already transforming their careers with
            SkillBridge.
          </p>
          <div className={styles.ctaActions}>
            <button className={styles.ctaBtn}>Create Free Account</button>
            <input className={styles.ctaInput} placeholder="Enter your email" />
          </div>
        </div>
      </section>
      <footer className={styles.footerSection}>
        <div className={styles.footerContainer}>
          <div className={styles.footerColLogo}>
            <div className={styles.footerLogoRow}>
              <span className={styles.footerLogoBox}>KS</span>
              <span className={styles.footerBrand}>KormoShiri</span>
            </div>
            <div className={styles.footerDesc}>
              Bridging the gap between education and employment in Bangladesh.
            </div>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.footerColTitle}>Platform</div>
            <a href="#" className={styles.footerLink}>
              Career Roadmaps
            </a>
            <a href="#" className={styles.footerLink}>
              Courses
            </a>
            <a href="#" className={styles.footerLink}>
              Projects
            </a>
            <a href="#" className={styles.footerLink}>
              Internships
            </a>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.footerColTitle}>Company</div>
            <a href="#" className={styles.footerLink}>
              About Us
            </a>
            <a href="#" className={styles.footerLink}>
              Careers
            </a>
            <a href="#" className={styles.footerLink}>
              Blog
            </a>
            <a href="#" className={styles.footerLink}>
              Contact
            </a>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.footerColTitle}>Connect</div>
            <a href="#" className={styles.footerLink}>
              Facebook
            </a>
            <a href="#" className={styles.footerLink}>
              LinkedIn
            </a>
            <a href="#" className={styles.footerLink}>
              Twitter
            </a>
            <a href="#" className={styles.footerLink}>
              Instagram
            </a>
          </div>
        </div>
        <div className={styles.footerCopyrightRow}>
          <div className={styles.footerCopyrightLine}></div>
          <div className={styles.footerCopyright}>
            © 2025 KormoShiri. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
