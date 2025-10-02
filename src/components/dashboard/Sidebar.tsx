"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Sidebar = () => {
  return (
    <div className="flex h-screen w-24 flex-col justify-between border-e border-gray-100 bg-white">
      <div>

        <div className="border-t border-gray-100">
          <div className="px-2">

            <ul className="space-y-5 border-t border-gray-100 pt-4">
              {/* link to home */}
              <Link href="/" className="group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">

                {/* icon */}
                <Image width={30} height={30} alt="" src={"https://img.icons8.com/?size=100&id=73&format=png&color=000000"}></Image>
                {/* hover text */}
                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                  Manage Project
                </span>
              </Link>

              {/* link to dashboard */}
              <Link href="/dashboard" className="group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">

                {/* icon */}
                <Image width={30} height={30} alt="" src={"https://img.icons8.com/?size=100&id=udjU_YS4lMXL&format=png&color=000000"}></Image>
                {/* hover text */}
                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                  Manage Project
                </span>
              </Link>

              {/* manage project navigation */}
              <Link href="/dashboard/create-blog" className="group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">

                {/* icon */}
                <Image width={30} height={30} alt="" src={"https://img.icons8.com/?size=100&id=N9ekZ8QNfGM5&format=png&color=000000"}></Image>
                {/* hover text */}
                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                  Manage Blogs
                </span>
              </Link>

              <Link href="/dashboard/add-project" className="group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">

                {/* icon */}
                <Image width={30} height={30} alt="" src={"https://img.icons8.com/?size=100&id=105286&format=png&color=000000"}></Image>
                {/* hover text */}
                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                  Manage Project
                </span>
              </Link>

            </ul>
          </div>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
        <a
          href="#"
          className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>

          <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
            Logout
          </span>
        </a>
      </div>
    </div>
  );
};
