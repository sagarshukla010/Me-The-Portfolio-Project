import React, { useState, useEffect } from "react";
import { TOTAL_SCREEN, GET_SCREEN_INDEX } from "../../utilities/CommonUtils";
import ScrollService from "../../utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Listen to scroll to update progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle screen selection
  useEffect(() => {
    const subscription = ScrollService.currentScreenBroadCaster.subscribe((currentScreen) => {
      if (!currentScreen || !currentScreen.screenInView) return;
      const index = GET_SCREEN_INDEX(currentScreen.screenInView);
      if (index >= 0) setSelectedScreen(index);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleSwitchScreen = (index, screen) => {
    const target = document.getElementById(screen.screen_name);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setSelectedScreen(index);
      setShowMenu(false);
    }
  };

  const renderHeaderOptions = () =>
    TOTAL_SCREEN.map((screen, index) => (
      <div
        key={screen.screen_name}
        className={`header-option${
          index < TOTAL_SCREEN.length - 1 ? " header-option-separator" : ""
        }${selectedScreen === index ? " selected-header-option" : ""}`}
        onClick={() => handleSwitchScreen(index, screen)}
      >
        {screen.screen_name}
      </div>
    ));

  return (
    <header className="header-container">
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div className="header-parent">
        <div className="header-logo">SAGAR~</div>

        <div className="header-hamburger" onClick={() => setShowMenu(!showMenu)}>
          <FontAwesomeIcon icon={faBars} className="header-hamburger-bars" />
        </div>

        <nav className={`header-options ${showMenu ? "show-menu" : ""}`}>
          {renderHeaderOptions()}
        </nav>
      </div>
    </header>
  );
}
