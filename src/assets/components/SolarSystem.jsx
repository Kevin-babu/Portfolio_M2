import "./SolarSystem.css";

export default function SolarSystem() {
  return (
    <div className="solar-system">
        <h2>SUN</h2>
      <div className="sun" />

      <div className="orbit orbit-1">
        <span className="planet planet-1" />
      </div>

      <div className="orbit orbit-2">
        <span className="planet planet-2" />
      </div>

      <div className="orbit orbit-3">
        <span className="planet planet-3" />
      </div>

      <div className="orbit orbit-4">
        <span className="planet planet-4" />
      </div>

      <div className="orbit orbit-5">
        <span className="planet planet-5" />
      </div>
    </div>
  );
}