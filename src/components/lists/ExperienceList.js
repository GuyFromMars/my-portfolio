"use client";
import React from "react";

function ExperienceList() {
  const expList = [
    {
      role: "Web Design Intern",
      company: "Paper Cup Inc.",
      duration: "MAR. 2017 - NOV. 2017",
      description:
        "During my internship at Paper Cup Inc., I worked closely with the design and development teams to create visually appealing and user-friendly websites. My responsibilities included designing website layouts, creating mockups, and assisting in front-end development using HTML, CSS, and JavaScript. I contributed to improving website usability, ensuring responsive design for mobile and desktop platforms, and adhering to brand guidelines. This experience helped me enhance my skills in design tools like WYSIWYG web builder, while gaining valuable exposure to web development workflows and best practices.",
    },
    {
      role: "Web Designer",
      company: "Paper Cup Inc.",
      duration: "NOV. 2017 - FEB. 2019",
      description:
        "As a Web Designer at Paper Cup Inc., I was responsible for designing and developing engaging, responsive websites that aligned with the company's brand identity and business objectives. I collaborated with cross-functional teams to create visually compelling layouts and user interfaces, ensuring an intuitive and seamless user experience. My role involved using front-end technologies such as HTML, CSS, and JavaScript to translate design concepts into functional websites. I also focused on optimizing website performance, improving accessibility, and maintaining consistency across various devices and platforms.",
    },
    {
      role: "Android Developer",
      company: "Moolre Limited",
      duration: "JUN. 2019 - DEC. 2020",
      description:
        "As an Android Developer, I specialized in developing the moolre Android application using Java and xml. With a strong foundation in Android SDK, I built a responsive and user-friendly app which adhere to best practices in mobile design. I used UI components, RESTful APIs, and SQLite databases to create feature-rich mobile experiences.",
    },
    {
      role: "Backend Developer",
      company: "Kospiah Legacy",
      duration: "JAN. 2021 - OCT. 2022",
      description:
        "As a Backend Developer at Kospiah Legacy Limited, I focus on building and maintaining the server-side architecture that powers our applications. My role involves designing and implementing robust APIs, managing databases, and ensuring secure, efficient data flow between the server and client-side applications. I work primarily with technologies such as Node.js, Express, and MongoDB (or other databases) to build scalable solutions that meet the company's business needs. Additionally, I collaborate closely with the front-end team to integrate user-facing elements, optimize performance, and implement best practices for security and reliability in our applications.",
    },
  ];
  const expData = expList?.map((exp, key) => {
    return (
      <span key={key}>
        <br />
        {/* ==========ITEM========== */}
        <span className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <p className="text-gray-900 text-2xl sm:text-xl lg:text-2xl dark:text-white">
            {exp.role}
          </p>
          <p className="text-gray-900 text-sm sm:text-base lg:text-sm ml-0 sm:ml-auto dark:text-white">
            {exp.duration}
          </p>
        </span>
        <p className="text-gray-500 text-xl sm:text-lg lg:text-xl dark:text-gray-500">
          {exp.company}
        </p>
        <br />
        <p className="text-base sm:text-lg lg:text-base">{exp.description}</p>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      </span>
    );
  });
  return <>{expData}</>;
}

export default ExperienceList;
