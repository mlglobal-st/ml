"use client";

import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navLinks = [
    {
      label: "Operations",
      href: "#operations",
      sublinks: [
        { label: "Oil & Gas", href: "/oil" },
        { label: "IPD & Maintenance", href: "/mainten" },
        { label: "GM & Consultancy", href: "/projects" },
        { label: "Projects", href: "#projects" },
        { label: "Pipeline Engineering", href: "/pipeline" },
        { label: "Renewable & HEP", href: "/Renewable" },
        { label: "Nuclear & AEI", href: "/Nuclear" },
        { label: "Rig Construction & OE", href: "/rig" },
        { label: "Fuel Depot & Storage Facilities", href: "/fueldepot" },
      ],
    },
    {
      label: "ESG",
      href: "#esg",
      sublinks: [
        { label: "Environment", href: "/environment" },
        { label: "Governance", href: "/governance" },
      ],
    },
    { label: "Investors", href: "#investors" },
    { label: "About Us", href: "/aboutus" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-emerald-600" />
            <span className="font-semibold">Ml global</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, href, sublinks }) => (
              <div
                key={label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={href}
                  className={`inline-flex items-center gap-2 ${
                    label === "Contact"
                      ? "px-3 py-1.5 rounded-full bg-gray-900 text-white hover:bg-gray-700"
                      : "hover:text-emerald-600"
                  }`}
                >
                  {label}
                  {sublinks && (
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.2l3.71-2.97a.75.75 0 111.04 1.08l-4.24 3.4a.75.75 0 01-.94 0l-4.24-3.4a.75.75 0 01-.02-1.1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown inside same hover zone */}
                {sublinks && openDropdown === label && (
                  <div className="absolute left-0 top-full bg-white border rounded shadow-lg min-w-[200px] z-50">
                    {sublinks.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2 whitespace-nowrap hover:bg-gray-100"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setMobileOpen((s) => !s)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded hover:bg-gray-100"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map(({ label, href, sublinks }) => (
              <div key={label}>
                <div
                  className="flex justify-between items-center px-3 py-2 rounded hover:bg-gray-100 cursor-pointer"
                  onClick={() =>
                    setOpenDropdown(openDropdown === label ? null : label)
                  }
                >
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="flex-1"
                  >
                    {label}
                  </Link>
                  {sublinks && (
                    <span className="ml-2">
                      {openDropdown === label ? "−" : "+"}
                    </span>
                  )}
                </div>
                {sublinks && openDropdown === label && (
                  <div className="pl-6">
                    {sublinks.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1 hover:bg-gray-100"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
