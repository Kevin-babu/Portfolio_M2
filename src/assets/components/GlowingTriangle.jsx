import { useEffect, useRef } from "react";
import "./GlowingTriangle.css";

export default function GlowingTriangle() {
  const containerRef = useRef(null);
  const triangleRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const triangle = triangleRef.current;
    // const glow = glowRef.current;

    if (!container || !triangle || !glow) return;

    let mouseX = 0;
    let mouseY = 0;

    // let glowX = 0;
    // let glowY = 0;

    let rotateX = 0;
    let rotateY = 0;

    let animationFrame;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();

      // Cursor position relative to container
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const animate = () => {
      /*
       * Glow smoothing
       *
       * Higher number = faster response
       * Lower number = smoother/slower
       */
    //   glowX += (mouseX - glowX) * 0.18;
    //   glowY += (mouseY - glowY) * 0.18;

    //   /*
    //    * Use translate3d for GPU acceleration
    //    */
    //   glow.style.transform = `
    //     translate3d(
    //       ${glowX}px,
    //       ${glowY}px,
    //       0
    //     )
    //   `;

      /*
       * Triangle tilt
       */
      const centerX = container.clientWidth / 2;
      const centerY = container.clientHeight / 2;

      const mouseOffsetX = mouseX - centerX;
      const mouseOffsetY = mouseY - centerY;

      const targetRotateY = mouseOffsetX * 0.025;
      const targetRotateX = mouseOffsetY * -0.025;

      rotateX += (targetRotateX - rotateX) * 0.08;
      rotateY += (targetRotateY - rotateY) * 0.08;

      triangle.style.transform = `
        perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;

      animationFrame = requestAnimationFrame(animate);
    };

    container.addEventListener("mousemove", handleMouseMove);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="triangle-container"
    >
      {/* <div
        ref={glowRef}
        className="mouse-glow"
      /> */}

      <svg
        ref={triangleRef}
        className="glowing-triangle"
        viewBox="0 0 300 260"
      >
        <defs>
          <linearGradient
            id="triangleGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#8be9ff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur
              stdDeviation="4"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <polygon
          points="150,15 285,245 15,245"
          fill="none"
          stroke="rgba(120,220,255,0.25)"
          strokeWidth="8"
          filter="url(#glow)"
        />

        <polygon
          points="150,15 285,245 15,245"
          fill="rgba(255,255,255,0.01)"
          stroke="url(#triangleGradient)"
          strokeWidth="2"
          filter="url(#glow)"
        />

        <polygon
          points="150,35 265,230 35,230"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}