import React, { useState } from "react";
import "./CircularNav.css";

const items = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function CircularNav() {
  const [active, setActive] = useState(0);

  const step = 360 / items.length;

  const rotate = -active * step;

  const handleSelect = (index) => {
    setActive(index);

    const target = document.getElementById(items[index].id);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handlePrevious = () => {
    const next =
      (active - 1 + items.length) % items.length;

    handleSelect(next);
  };

  const handleNext = () => {
    const next =
      (active + 1) % items.length;

    handleSelect(next);
  };

  return (
    <div className="circular-nav">

      {/* Fixed pointer */}
      <div className="circular-nav__pointer" />

      <div className="circular-nav__machine">

        {/* Rotating wheel */}
        <ul
          className="circular-nav__wheel"
          style={{
            "--rotation": `${rotate}deg`,
          }}
        >

          {items.map((item, index) => {
            const angle =
              (360 / items.length) * index - 90;

            return (
              <li
                key={item.id}
                style={{
                  "--angle": `${angle}deg`,
                }}
              >
                <button
                  type="button"
                  className={`circular-nav__item ${
                    active === index
                      ? "is-active"
                      : ""
                  }`}
                  onClick={() => handleSelect(index)}
                  aria-label={`Navigate to ${item.label}`}
                  aria-pressed={active === index}
                  style={{
                    "--counter-rotation": `${-rotate}deg`,
                  }}
                >
                  {item.label}
                </button>
              </li>
            );
          })}

        </ul>

        {/* Center */}
        <div className="circular-nav__center">

          <span className="circular-nav__eyebrow">
            CURRENTLY VIEWING
          </span>

          <strong className="circular-nav__current">
            {items[active].label}
          </strong>

          <div className="circular-nav__controls">

            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous section"
            >
              ←
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next section"
            >
              →
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}