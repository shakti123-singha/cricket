"use client";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => (
  <nav className="bg-gray-800 text-white flex justify-between items-center px-6 py-4">
    <div className="flex items-center gap-2">
      {/* Logo image */}
      <Link href="/">
        <Image src="/image/reddylogo.png" alt="Logo" width={120} height={70} />
      </Link>
    </div>

    {/* Search Bar */}
    <div className="flex items-center bg-gray-700 px-3 py-1 rounded-lg">
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent text-white placeholder-gray-400 outline-none"
      />
      <button className="text-white hover:text-gray-300 ml-2">
        🔍
      </button>
    </div>

    {/* Navigation Links */}
    <div className="flex gap-4">
      <Link href="/home" className="hover:text-gray-300">
        Home
      </Link>
      
      <Link href="/blog" className="hover:text-gray-300">
        Blog
      </Link>
    </div>
  </nav>
);

export default Navbar;
