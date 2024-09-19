"use client";
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="p-8 sm:p-16 ml-0 mt-4 sm:mt-0 sm:ml-64 min-h-screen bg-white dark:bg-gray-900">
        <p className="text-4xl sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
          Nunoo-Mensah{" "}
          <span className="text-gray-800 dark:text-white">Robert</span>
        </p>
        <p className="text-gray-900 text-lg sm:text-xl dark:text-white">
          HNo 3 Jupiter Street, Christian Village, Tema. || popezoi192@gmail.com
        </p>
        <br />
        <br />
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
          I am a dedicated Web Application Developer with experience in building
          responsive, high-performance web apps using modern technologies.
          Skilled in both front-end and back-end development, I create seamless
          user experiences and scalable applications. My expertise includes
          working with JavaScript frameworks like React and Next.js for building
          dynamic UIs, and server-side technologies such as Node.js, Express,
          and MongoDB for managing databases and APIs. I focus on writing clean,
          maintainable code and optimizing applications for speed and security,
          delivering feature-rich, user-friendly solutions.
        </p>
        <br />
        <div className="grid grid-cols-5">
          <a
            target="_blank"
            href="https://github.com/GuyFromMars?tab=repositories"
            rel="noopener noreferrer"
          >
            <button
              type="link"
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-xl text-base px-6 py-3 inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mb-2"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="hidden sm:block ml-2">GuyFromMars</span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
