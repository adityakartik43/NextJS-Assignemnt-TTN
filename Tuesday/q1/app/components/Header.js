"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  const linkStyle = (path) =>
    `hover:text-blue-200 ${
      pathname === path || pathname.startsWith(path + "/")
        ? "text-blue-400 font-semibold"
        : "text-white"
    }`;

  return (
    <nav className="bg-gray-900 text-white p-3 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl">To The New</div>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className={linkStyle("/")}>
              Home
            </Link>

            <Link href="/users" className={linkStyle("/users")}>
              Users
            </Link>

            <Link href="/todos" className={linkStyle("/todos")}>
              Todos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;