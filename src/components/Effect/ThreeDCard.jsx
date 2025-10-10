"use client";

import React, { useState, useRef, useCallback } from "react";

function ThreeDCard({
  children,
  className = "",
  maxRotation = 10,
  glowOpacity = 0.25,
  shadowBlur = 30,
  parallaxOffset = 40,
  transitionDuration = "0.6s",
  backgroundImage = null,
  enableGlow = true,
  enableShadow = true,
  enableParallax = true,
}) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    glowX: 50,
    glowY: 50,
    shadowX: 0,
    shadowY: 20,
    isHovered: false,
  });

  const handleMouseMove = useCallback(
    (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const { width, height, left, top } = rect;
      const mouseX = e.clientX - left;
      const mouseY = e.clientY - top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      const newRotateX = yPct * -1 * maxRotation;
      const newRotateY = xPct * maxRotation;

      setTransform({
        rotateX: newRotateX,
        rotateY: newRotateY,
        glowX: (mouseX / width) * 100,
        glowY: (mouseY / height) * 100,
        shadowX: enableShadow ? newRotateY * 0.8 : 0,
        shadowY: enableShadow ? 20 - newRotateX * 0.6 : 20,
        isHovered: true,
      });
    },
    [maxRotation, enableShadow]
  );

  const handleMouseLeave = () => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
      glowX: 50,
      glowY: 50,
      shadowX: 0,
      shadowY: 20,
      isHovered: false,
    });
  };

  const cardStyle = {
    transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
    boxShadow: enableShadow
      ? `${transform.shadowX}px ${transform.shadowY}px ${shadowBlur}px rgba(0, 0, 0, 0.5)`
      : "none",
    transition: `transform ${transitionDuration} ease, box-shadow ${transitionDuration} ease`,
  };

  const glowStyle = enableGlow
    ? {
        background: `radial-gradient(circle at ${transform.glowX}% ${transform.glowY}%, rgba(255,255,255,${glowOpacity}), transparent 80%)`,
        opacity: transform.isHovered ? 1 : 0,
        transition: "opacity 0.4s ease",
      }
    : {};

  const contentStyle = enableParallax
    ? { transform: `translateZ(${parallaxOffset}px)` }
    : {};

  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${className}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      {enableGlow && (
        <div className="absolute inset-0 pointer-events-none" style={glowStyle} />
      )}
      <div className="relative z-10" style={contentStyle}>
        {children}
      </div>
    </div>
  );
}

export default ThreeDCard;
