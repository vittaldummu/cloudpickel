import React from "react";
import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();
  const links = [
    { p: "/", l: "Home" },
    { p: "/about", l: "About" },
    { p: "/products", l: "Products" },
    { p: "/training", l: "Training" },
    { p: "/placement", l: "Placement" },
    { p: "/why", l: "Why Choose Us" },
  ];
  return (
    <nav className="bg-white/80 backdrop-blur sticky top-0 z-50 shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/logo/cp-cloud.svg"
            className="w-11 h-11"
            alt="logo"
          />
          <span className="text-2xl font-bold text-gray-800">Cloudpickel</span>
        </Link>
        <div className="hidden md:flex items-center gap-4">
          {links.map((item) => {
            const active = location.pathname === item.p;
            return (
              <Link
                key={item.p}
                to={item.p}
                className={
                  active
                    ? "px-3 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-[var(--grad-start)] via-[var(--grad-mid)] to-[var(--grad-end)] text-white shadow-md"
                    : "px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[var(--grad-start)]"
                }
              >
                {item.l}
              </Link>
            );
          })}
        </div>
        <div className="md:hidden">
          <details className="relative">
            <summary className="cursor-pointer px-3 py-2 rounded-md bg-gray-100">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg p-3">
              {links.map((item) => (
                <a key={item.p} href={item.p} className="block py-1">
                  {item.l}
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
