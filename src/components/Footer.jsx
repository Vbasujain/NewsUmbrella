import React from "react";
import { Link } from "react-router-dom";
import useTheme from "../contexts/theme"; // Import useTheme

export default function Footer() {
  const { themeMode } = useTheme(); // Access themeMode from the context

  return (
    <footer
      className={`${
        themeMode === "dark"
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      } border-t`}
    >
      <div className="mx-auto w-full max-w-screen-xl p-3 py-3 lg:py-6">
        <div className="md:flex md:justify-between">
          <div className="mb-3 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="src/components/icon2.png"
                className="mr-3 h-12 rounded-3xl"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:gap-2 sm:grid-cols-3">
            <div>
              <h2 className="mb-1 text-sm font-semibold uppercase">
                Resources
              </h2>
              <ul className="text-sm">
                <li className="mb-2">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase">
                Follow us
              </h2>
              <ul className="text-sm">
                <li className="mb-2">
                  <a
                    href="https://github.com/hiteshchoudhary"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase">Legal</h2>
              <ul className="text-sm">
                <li className="mb-2">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto lg:my-6" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            Â© 2024{" "}
            <a href="https://hiteshchoudhary.com/" className="hover:underline">
              NewsUmbrella By Basu
            </a>
            . All Rights Reserved.
          </span>
        
        </div>
      </div>
    </footer>
  );
}
