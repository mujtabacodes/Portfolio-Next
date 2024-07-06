import React, { useState } from 'react';

const Card3D = ({ image }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [transformStyle, setTransformStyle] = useState('');
  const [glowStyle, setGlowStyle] = useState('');

  const handleMouseEnter = (e: any) => {
    setIsHovered(true);
  };

  const handleMouseMove = (e: any) => {
    if (!isHovered) return;

    const bounds = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    setTransformStyle(`
        scale3d(1.02, 1.02, 1.02)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `);

    setGlowStyle(`
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('');
    setGlowStyle('');
  };

  return (
    <div
      className={`card w-full object-cover md:w-1/2 h-full ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transitionDuration: isHovered ? '300ms' : '150ms', // Adjust transition duration based on hover state
        boxShadow: isHovered
          ? '0 5px 20px 5px #00000044'
          : '0 1px 5px #00000099', // Adjust box-shadow based on hover state
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="glow" style={{ backgroundImage: glowStyle }} />
    </div>
  );
};

export default Card3D;
