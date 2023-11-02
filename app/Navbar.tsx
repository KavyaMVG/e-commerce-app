import React from "react";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-4 border-b px-8 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-4">
        {links.map((link) => (
          <Link
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            href={link.href}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;