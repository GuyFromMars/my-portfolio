"use client";
import React from "react";

function ProjectList() {
  const proList = [
    {
      name: "Feedbackpro",
      webstack: "Firebase, NextJs",
      wwwlink: "https://ffeedbackpro.vercel.app",
      description:
        "A web app for creating and sharing feedback forms, built with Next.js and Firebase for real-time data and authentication."
      },
      {
      name: "PLM-notes",
      webstack: "Next.js",
      wwwlink: "https://plm-notes.vercel.app/",
      description: "A web application for creating, storing, and sharing notes with friends. Built with Next.js, it offers a responsive, user-friendly interface for managing personal and collaborative notes. Features include note creation, editing, and sharing, with a focus on simplicity and performance.",
    },
    {
      name: "Consignment Tracking",
      webstack: "Next.js",
      wwwlink: "https://vianovalogistics.vercel.app/",
      description:
        "A web application for tracking packages and providing logistics solutions, built with Next.js. Features include real-time shipment tracking, a services overview (freight forwarding, supply chain management, international shipping), and a responsive UI. Focused on performance and SEO optimization using Next.js.",
    },
    {
      name: "Todo List App",
      webstack: "Mongo, Express, React, NodeJs",
      wwwlink: "https://todo-app-henna-two.vercel.app/",
      description:
        "A full-stack task management app with user authentication and CRUD operations. Built login/signup and todo tracking with React, Node.js, Express, and MongoDB. Added JWT for secure access.",
    },
    {
      name: "POS System",
      webstack: "React, Redux",
      wwwlink: "https://pos-system-iota.vercel.app/",
      description:
        "A front-end web app for point-of-sale operations, using React and Redux for state management. Implemented data storage and modification across components for a seamless user experience.",
    },
    {
      name: "GalopePetrol Website",
      webstack: "HTML5, CSS3, PHP",
      wwwlink: "https://galopepetrol.com/",
      description:
        "This is the official website of Galope Petrol Ghana Limited.",
    },
    {
      name: "Greenimee Ghana Limited",
      webstack: "Next.js",
      wwwlink: "https://greenimee.com",
      description: "Official website for Greenimee Ghana Limited, built with Next.js for a responsive, SEO-optimized experience. Focused on performance and user engagement.",
    },
    {
      name: "TampaCar Services",
      webstack: "Next.js",
      wwwlink: "https://tampacar.services",
      description:
        "This is the official website of TampaCar Services. Want a car? Do the booking and leave the rest to us.",
    },
    {
      name: "Wise Wealth Solution",
      webstack: "Next.js",
      wwwlink: "https://wisewealthsolution.com",
      description: "This is the official website of Wise Wealth Solution.",
    },
    {
      name: "My Portfolio",
      webstack: "Next.js",
      wwwlink: "https://my-portfolio-ten-mocha-84.vercel.app/",
      description: "My Portfolio with NextJs",
    },
  ];
  const proData = proList?.map((pro, key) => {
    return (
      <span key={key}>
        <br />
        {/* ==========ITEM========== */}
        <span className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <p className="text-gray-900 text-2xl sm:text-xl lg:text-2xl dark:text-white">
            {pro.name}
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={pro.wwwlink}
            className="text-blue-900 text-sm sm:text-base lg:text-sm ml-0 sm:ml-auto dark:text-blue-400"
          >
            Live demo
          </a>
        </span>
        <p className="text-gray-500 text-xl sm:text-lg lg:text-xl dark:text-gray-500">
          {pro.webstack}
        </p>
        <br />
        <p className="text-base sm:text-lg lg:text-base">{pro.description}</p>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      </span>
    );
  });
  return <>{proData}</>;
}

export default ProjectList;