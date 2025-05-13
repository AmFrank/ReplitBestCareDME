import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  variant?: "default" | "white";
}

const Logo: React.FC<LogoProps> = ({ 
  width = 150, 
  height = 50, 
  className = "",
  variant = "default" 
}) => {
  // Logo SVG code based on the provided image
  const fillColor = variant === "white" ? "#FFFFFF" : undefined;
  const textColor = variant === "white" ? "#FFFFFF" : "#4a5568";
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 900 150" 
      className={className}
    >
      {/* BestCare DME Logo */}
      <g>
        {/* Best text in teal */}
        <text 
          x="0" 
          y="120" 
          fontFamily="Inter, sans-serif" 
          fontSize="130" 
          fontWeight="700" 
          fill={fillColor || "#00d2c1"}
        >
          Best
        </text>
        
        {/* Care text in white */}
        <text 
          x="300" 
          y="120" 
          fontFamily="Inter, sans-serif" 
          fontSize="130" 
          fontWeight="700" 
          fill={fillColor || "#FFFFFF"}
        >
          Care
        </text>
        
        {/* DME text in white */}
        <text 
          x="580" 
          y="120" 
          fontFamily="Inter, sans-serif" 
          fontSize="130" 
          fontWeight="700" 
          fill={textColor}
        >
          DME
        </text>
        
        {/* Medical Supplies text in white */}
        <text 
          x="580" 
          y="145" 
          fontFamily="Inter, sans-serif" 
          fontSize="40" 
          fontWeight="500" 
          fill={textColor}
        >
          Medical Supplies
        </text>
        
        {/* Cross icon for medical symbol */}
        <path 
          d="M40,0 L40,30 L10,30 L10,50 L40,50 L40,80 L60,80 L60,50 L90,50 L90,30 L60,30 L60,0 Z" 
          fill={fillColor || "#00d2c1"} 
          transform="translate(-20, 0) scale(0.6)"
        />
      </g>
    </svg>
  );
};

export default Logo;
