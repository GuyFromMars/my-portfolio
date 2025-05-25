"use client";
import ExperienceList from "@/components/lists/ExperienceList";
import React from "react";

function Experience() {
  return (
    <>
      <div className="p-8 sm:p-16 ml-0 mt-8 sm:mt-0 sm:ml-64 min-h-screen bg-white dark:bg-gray-900">
        <p className="text-4xl sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
          Experience
        </p>

        <br />
        <ExperienceList />
      </div>
    </>
  );
}

export default Experience;
