"use client";
import ExperienceList from "@/components/lists/ExperienceList";
import React from "react";

function Experience() {
  return (
    <>
      <div className="p-4 sm:p-8 lg:p-16 ml-0 sm:ml-16 lg:ml-64 mt-4 sm:mt-0 min-h-screen bg-white dark:bg-gray-900">
        <p className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white">
          Experience
        </p>

        <br />
        <ExperienceList />
      </div>
    </>
  );
}

export default Experience;
