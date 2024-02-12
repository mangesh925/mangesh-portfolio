"use client";
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref, inView } = useSectionInView("Experience");
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            visible={isVisible}
            contentStyle={{
              background: theme === "light" ? "#f3f4f6" : "#2D3748",
              boxShadow: "none",
              border:
                theme === "light"
                  ? "1px solid rgba(0, 0, 0, 0.05)"
                  : "1px solid rgba(255, 255, 255, 0.1)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid #fff",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: theme === "light" ? "white" : "#10B981",
              color: theme === "light" ? "#4B5563" : "white",
              boxShadow: "0 2px 4px 0 rgba(0,0,0,0.10)",
              fontSize: "1.5rem",
            }}
          >
            <h3
              className={`font-semibold capitalize ${
                theme === "dark" ? "timeline-text-dark" : ""
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`font-normal !mt-0 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {item.location}
            </p>
            <p
              className={`!mt-1 !font-normal ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
