import { useState } from "react";
import pageFlip from "./freesound_community-page-flip.mp3";
import styles from "./Testimonials.module.css";
function Testimonials() {
  const [currId, setCurrId] = useState(0);
  const page = new Audio(pageFlip);

  const handlePrev = () => {
    page.currentTime = 0;
    page.play();
    setCurrId((currId + testimonialsData.length - 1) % testimonialsData.length);
  };
  const handleNext = () => {
    page.currentTime = 0;
    page.play();
    setCurrId((currId + 1) % testimonialsData.length);
  };

  const testimonialsData = [
    {
      id: 1,
      quote:
        "This product exceeded my expectations! I would definitely recommend it.",
      author: "Jane Doe",
      role: "Product Manager",
      company: "TechFlow",
      image: "https://i.pravatar.cc/150?u=1",
    },
    {
      id: 2,
      quote:
        "Great quality and fast shipping. The customer service was also very helpful.",
      author: "John Smith",
      role: "Developer",
      company: "StartUp Inc",
      image: "https://i.pravatar.cc/150?u=2",
    },
    {
      id: 3,
      quote:
        "We reduced our onboarding time by 40% in the first month. The ROI was immediate.",
      author: "Sarah Jenkins",
      role: "CTO",
      company: "DataSystems",
      image: "https://i.pravatar.cc/150?u=3",
    },

    {
      id: 4,
      quote:
        "Finally, a tool that understands how designers work. It fits perfectly into our workflow.",
      author: "Marcus Chen",
      role: "Lead Designer",
      company: "Creative Studio",
      image: "https://i.pravatar.cc/150?u=4",
    },
    {
      id: 5,
      quote:
        "I've tried every similar service out there, and I keep coming back to this one. Simply the best.",
      author: "Emily Rodriguez",
      role: "Freelance Writer",
      company: "Self-Employed",
      image: "https://i.pravatar.cc/150?u=5",
    },
    {
      id: 6,
      quote:
        "The support team is incredible. They solved our integration issue in under 10 minutes.",
      author: "David Kim",
      role: "DevOps Engineer",
      company: "CloudScale",
      image: "https://i.pravatar.cc/150?u=6",
    },
    {
      id: 7,
      quote:
        "Our team communication improved drastically. We cut response time by 60% after switching.",
      author: "Lisa Thompson",
      role: "Operations Director",
      company: "LogiCorp",
      image: "https://i.pravatar.cc/150?u=7",
    },
    {
      id: 8,
      quote:
        "Clean code, great documentation, and zero headaches during implementation. A developer's dream.",
      author: "Alex Morgan",
      role: "Senior Software Engineer",
      company: "BuildFast",
      image: "https://i.pravatar.cc/150?u=8",
    },
    {
      id: 9,
      quote:
        "It just works. No complicated setup, no hidden fees. Exactly what we needed for our small business.",
      author: "Robert Taylor",
      role: "Small Business Owner",
      company: "Taylor's Goods",
      image: "https://i.pravatar.cc/150?u=9",
    },
    {
      id: 10,
      quote:
        "The analytics dashboard gave us insights we didn't even know we were missing. Game changer.",
      author: "Nina Patel",
      role: "Marketing Director",
      company: "GrowthHackers",
      image: "https://i.pravatar.cc/150?u=10",
    },
  ];

  return (
    <>
      <div className={styles.ts}>
        <img
          src={testimonialsData[currId].image}
          alt={testimonialsData[currId].id}
          className={styles.img}
        />
        <div className={styles.qt}>{testimonialsData[currId].quote}</div>
        <div className={styles.ar}> - {testimonialsData[currId].author}</div>

        <div className={styles.btr}>
          <button onClick={handlePrev}>prev</button>
          <button onClick={handleNext}>next</button>
        </div>
      </div>
    </>
  );
}
export default Testimonials;
