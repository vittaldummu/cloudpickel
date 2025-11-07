import React from "react";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div>
          <img
            src="/assets/logo/cp-cloud.svg"
            className="w-10 h-10"
            alt="logo"
          />
          <p className="text-sm mt-3">
            Cloudpickel builds cloud products, trains talent, and connects
            hires.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="/training" className="hover:text-white">
                Training
              </a>
            </li>
            <li>
              <a href="/placement" className="hover:text-white">
                Placement
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <p className="text-sm">Email: vittalrao@cloudpickel.com</p>
          <p className="text-sm">Phone: +91 9448298630</p>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 mt-6">
        © 2025 Cloudpickel. All rights reserved.
      </p>
    </footer>
  );
}

