const BottomNav: React.FC = () => {
  const handleScroll = (id: string) => {
    console.log(id);
    switch (id) {
      case "Home":
        document
          .querySelector<HTMLDivElement>(".topnav")!
          .scrollIntoView({ behavior: "smooth" });
        break;
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
        console.log("test case fired");
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
    <div className="btm-nav sticky">
      <button onClick={(e) => handleScroll("Home")}>
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span className="btm-nav-label">Home</span>
      </button>
      <button onClick={(e) => handleScroll("Setup")}>
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
            d="M12 4v16m-4-4h8M6 12h12"
          />
        </svg>
        <span className="btm-nav-label">Setup</span>
      </button>
      <button onClick={(e) => handleScroll("Usage")}>
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
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 15a2 2 0 11-4 0 2 2 0 014 0zM15 19a2 2 0 11-4 0 2 2 0 014 0zM15 9a2 2 0 11-4 0 2 2 0 014 0zM19 5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span className="btm-nav-label">Usage</span>
      </button>
      <button onClick={(e) => handleScroll("Resources")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
        >
          <path
            d="M7 21V9H3V21C3 21.55 3.45 22 4 22H6C6.55 22 7 21.55 7 21Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 21V9H17V21C17 21.55 17.45 22 18 22H20C20.55 22 21 21.55 21 21Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 9H17V5C17 4.45 16.55 4 16 4H8C7.45 4 7 4.45 7 5V9Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 5V19C5 19.55 5.45 20 6 20H18C18.55 20 19 19.55 19 19V5C19 4.45 18.55 4 18 4H6C5.45 4 5 4.45 5 5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="btm-nav-label">Resources</span>
      </button>
    </div>
  );
};

export default BottomNav;
