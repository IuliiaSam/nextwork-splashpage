import React, { useState, useEffect } from "react";
import { Theme } from "../../types/instructions";
import Image from "next/image";
// renders server-side, so we need to check if localStorage is available
const loadTheme = (): Theme => {
  const defaultTheme = { theme: "light", checked: false };
  if (typeof localStorage === "undefined") {
    return defaultTheme;
  }
  const value = localStorage.getItem("theme");
  return value === null ? defaultTheme : JSON.parse(value);
};

const NavBar: React.FC = () => {
  const [theme, setTheme] = useState(loadTheme);

  useEffect(() => {
    if (typeof theme === "object") {
      localStorage.setItem("theme", JSON.stringify(theme));
    }
    const localTheme = JSON.parse(localStorage.getItem("theme")!).theme;

    if (typeof localTheme == "string") {
      document.documentElement.setAttribute("data-theme", localTheme);
    }
  }, [theme]);

  const handleThemeChange = () => {
    localStorage.setItem(
      "theme",
      theme.theme === "dark"
        ? JSON.stringify({ theme: "light", checked: false })
        : JSON.stringify({ theme: "dark", checked: true })
    );
    setTheme(
      theme.theme === "dark"
        ? { theme: "light", checked: false }
        : { theme: "dark", checked: true }
    );
  };

  const handleScroll = (id: string) => {
    switch (id) {
      case "Setup":
        document
          .querySelector<HTMLDivElement>(".setup")!
          .scrollIntoView({ behavior: "smooth" });
        break;
      case "Usage":
        document
          .querySelector<HTMLDivElement>(".usage")!
          .scrollIntoView({ behavior: "smooth" });
        break;
      case "Resources":
        document
          .querySelector<HTMLDivElement>(".resources")!
          .scrollIntoView({ behavior: "smooth" });
        break;
      case "About":
        document
          .querySelector(".about")
          ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="topnav navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button
                onClick={(e) =>
                  handleScroll((e.target as HTMLButtonElement).innerHTML)
                }
              >
                Setup
              </button>
            </li>
            <li>
              <button
                onClick={(e) =>
                  handleScroll((e.target as HTMLButtonElement).innerHTML)
                }
              >
                Usage
              </button>
            </li>
            <li>
              <button
                onClick={(e) =>
                  handleScroll((e.target as HTMLButtonElement).innerHTML)
                }
              >
                Resources
              </button>
            </li>
            <li>
              <button
                onClick={(e) =>
                  handleScroll((e.target as HTMLButtonElement).innerHTML)
                }
              >
                About
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        {/* <a className="btn btn-ghost normal-case text-3xl">
          NextWork
        </a> */}
        <Image
          alt="NextWork logo"
          src="/NextWork_logo.png"
          width={150}
          height={30}
        ></Image>
      </div>
      <div className="navbar-end">
        <input
          type="checkbox"
          className="toggle"
          onClick={handleThemeChange}
          checked={theme.checked}
        />
      </div>
    </div>
  );
};

export default NavBar;
