"use client";
import React from "react";

function ProjectList() {
  const proList = [
    {
      name: "Todo List App",
      webstack: "Mongo, Express, React, NodeJs",
      wwwlink: "https://todo-app-henna-two.vercel.app/",
      description:
        "My Todo list app has a login and signup page, can allow users create todos, edit and delete todos as well as update totos. It also allows users to complete todos and shows completed todos and ones which are yet to be completed. It's connected to a mongo database and performs all the basic CRUD operations of a fullstack app.",
    },
    {
      name: "POS System",
      webstack: "React, Redux",
      wwwlink: "https://pos-system-iota.vercel.app/",
      description:
        "My POS system webapp is a front end application built with React and works with the implementation of the redux toolkit and how data is stored, accessed and modified by different components of the app.",
    },
    {
      name: "GalopePetrol Website",
      webstack: "HTML5, CSS3, PHP",
      wwwlink: "https://galopepetrol.com/",
      description:
        "This is the official website of the Galope Petrol Ghana Limited.",
    },
    {
      name: "My Portfolio",
      webstack: "Next.js",
      wwwlink: "#",
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
            Visit Link
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
