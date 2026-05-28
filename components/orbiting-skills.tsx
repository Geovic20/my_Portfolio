"use client"
import React, { useEffect, useState, memo } from 'react';

// --- Type Definitions ---
type IconType = 'python' | 'django' | 'docker' | 'flask' | 'java' | 'sql' | 'c' | 'cpp';

type GlowColor = 'cyan' | 'purple';

interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Improved SVG Icon Components ---
const iconComponents: Record<IconType, { component: () => React.JSX.Element; color: string }> = {
  python: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 3c-4.968 0-9 4.032-9 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9z" fill="#3776AB"/>
        <path d="M9.5 8a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm-5 7a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm5 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z" fill="#FFD43B"/>
      </svg>
    ),
    color: '#3776AB'
  },
  django: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M2 0h8v12H2V0zm8-2h6v14h-6V-2zm8 2h6v12h-6V0z" fill="#092E20"/>
        <path d="M12 12c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 30.627 0 24 5.373 12 12 12z" fill="#092E20" opacity="0.5"/>
      </svg>
    ),
    color: '#092E20'
  },
  docker: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.186v1.888c0 .102.083.185.185.185m-2.954-5.4h2.118a.186.186 0 0 0 .186-.186V3.608a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.186.186v1.884c0 .102.084.185.186.185m0 2.7h2.118a.186.186 0 0 0 .186-.186V6.31a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.186.186v1.884c0 .102.084.185.186.185m-2.952 0h2.119a.186.186 0 0 0 .186-.186V6.31a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.186v1.884c0 .102.083.185.185.185m-2.953 0h2.118a.186.186 0 0 0 .186-.186V6.31a.186.186 0 0 0-.186-.186H5.124a.185.185 0 0 0-.186.186v1.884c0 .102.084.185.186.185m5.928 2.697h2.118a.186.186 0 0 0 .186-.186V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.186.186v1.888c0 .102.084.185.186.185" fill="#2496ED"/>
      </svg>
    ),
    color: '#2496ED'
  },
  flask: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M13.4 2.3c0-1.2-1-2.3-2.2-2.3h-6c-1.2 0-2.2 1-2.2 2.3v2h10.4V2.3zm0 4H5v15.7c0 1.2 1 2.3 2.2 2.3h6c1.2 0 2.2-1 2.2-2.3V6.3z" fill="#000000" opacity="0.7"/>
        <path d="M3 22h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z" fill="#000000" opacity="0.7"/>
      </svg>
    ),
    color: '#000000'
  },
  java: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M8.851 13.75s-1.578 .918-.356 1.226c1.433.374 2.156.322 3.733-.365 0 0 .414.259 1.008.484-3.57 1.532-8.086-.883-4.385-1.345zm-.767-3.758s-1.77 1.312-.31 1.592c1.911.365 3.409.354 6.015-.486 0 0 .289.293.746.453-5.328 1.557-11.25-.821-6.451-1.559zM19.434 21.457c0 0 .921.759-1.013 1.348-3.617.943-15.05.625-18.228-.341-1.035-.658.912-1.572 1.528-1.762 .635-.201 .996-.165 .996-.165 1.189-.834 7.254 1.286 14.717.92z" fill="#ED8936"/>
        <path d="M11.286 8.75s.679-1.217-.358-2.177c-1.37-1.278-3.11-.916-4.884 1.058-2.262 2.515-1.296 4.95 1.273 4.95 2.657 0 3.969-1.631 3.969-3.831zm-7.306 9.08s-.563.46.388 1.387c3.232 3.326 11.875 4.394 15.625 1.521.949-.772-.261-1.862-1.169-1.725-.837.112-.937.631-2.007 1.496-3.437 2.782-12.671 2.344-12.837-.279z" fill="#ED8936"/>
      </svg>
    ),
    color: '#ED8936'
  },
  sql: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M18.561 13.158c-1.102 0-2.135.587-2.677 1.528.315-.087.64-.13.976-.13 1.846 0 3.342 1.497 3.342 3.343 0 .975-.423 1.847-1.091 2.458.437.764 1.266 1.279 2.218 1.279 1.45 0 2.625-1.175 2.625-2.625-.001-1.45-1.176-2.625-2.625-2.625zm-5.456 1.251c-.401.206-.755.524-1.018.922-.263-.398-.617-.716-1.018-.922 1.272-.752 2.127-2.125 2.127-3.707 0-2.345-1.901-4.246-4.246-4.246-2.346 0-4.247 1.901-4.247 4.246 0 1.581.855 2.955 2.127 3.707-.401.206-.755.524-1.018.922-.263-.398-.617-.716-1.018-.922 1.272-.752 2.127-2.125 2.127-3.707 0-2.345-1.901-4.246-4.246-4.246-2.346 0-4.247 1.901-4.247 4.246 0 1.581.855 2.955 2.127 3.707" fill="#336791"/>
      </svg>
    ),
    color: '#336791'
  },
  c: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#A8B9CC"/>
        <path d="M8.5 12c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5z" fill="#A8B9CC"/>
      </svg>
    ),
    color: '#A8B9CC'
  },
  cpp: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#00589B"/>
        <path d="M8 12c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4z" fill="#00589B"/>
      </svg>
    ),
    color: '#00589B'
  }
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

// --- Configuration for the Orbiting Skills ---
const skillsConfig: SkillConfig[] = [
  // Inner Orbit
  { 
    id: 'python',
    orbitRadius: 100, 
    size: 40, 
    speed: 1, 
    iconType: 'python', 
    phaseShift: 0, 
    glowColor: 'cyan',
    label: 'Python'
  },
  { 
    id: 'django',
    orbitRadius: 100, 
    size: 38, 
    speed: 1, 
    iconType: 'django', 
    phaseShift: Math.PI / 3, 
    glowColor: 'cyan',
    label: 'Django'
  },
  { 
    id: 'flask',
    orbitRadius: 100, 
    size: 38, 
    speed: 1, 
    iconType: 'flask', 
    phaseShift: (2 * Math.PI) / 3, 
    glowColor: 'cyan',
    label: 'Flask'
  },
  { 
    id: 'docker',
    orbitRadius: 100, 
    size: 40, 
    speed: 1, 
    iconType: 'docker', 
    phaseShift: Math.PI, 
    glowColor: 'cyan',
    label: 'Docker'
  },
  { 
    id: 'sql',
    orbitRadius: 100, 
    size: 38, 
    speed: 1, 
    iconType: 'sql', 
    phaseShift: (4 * Math.PI) / 3, 
    glowColor: 'cyan',
    label: 'SQL'
  },
  { 
    id: 'java',
    orbitRadius: 100, 
    size: 40, 
    speed: 1, 
    iconType: 'java', 
    phaseShift: (5 * Math.PI) / 3, 
    glowColor: 'cyan',
    label: 'Java'
  },
  // Outer Orbit
  { 
    id: 'c',
    orbitRadius: 180, 
    size: 36, 
    speed: -0.6, 
    iconType: 'c', 
    phaseShift: 0, 
    glowColor: 'purple',
    label: 'C'
  },
  { 
    id: 'cpp',
    orbitRadius: 180, 
    size: 36, 
    speed: -0.6, 
    iconType: 'cpp', 
    phaseShift: Math.PI, 
    glowColor: 'purple',
    label: 'C++'
  },
];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }: GlowingOrbitPathProps) => {
  const glowColors = {
    cyan: {
      primary: 'rgba(6, 182, 212, 0.4)',
      secondary: 'rgba(6, 182, 212, 0.2)',
      border: 'rgba(6, 182, 212, 0.3)'
    },
    purple: {
      primary: 'rgba(147, 51, 234, 0.4)',
      secondary: 'rgba(147, 51, 234, 0.2)',
      border: 'rgba(147, 51, 234, 0.3)'
    }
  };

  const colors = glowColors[glowColor] || glowColors.cyan;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      {/* Glowing background */}
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
          boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: `${animationDelay}s`,
        }}
      />

      {/* Static ring for depth */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${colors.border}`,
          boxShadow: `inset 0 0 20px ${colors.secondary}`,
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main App Component ---
export function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
    { radius: 100, glowColor: 'cyan', delay: 0 },
    { radius: 180, glowColor: 'purple', delay: 1.5 }
  ];

  return (
    <main className="w-full flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #374151 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #4B5563 0%, transparent 50%)`,
          }}
        />
      </div>

      <div 
        className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] md:w-[450px] md:h-[450px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Central "Code" Icon with enhanced glow */}
        <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting skill icons */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill
              key={config.id}
              config={config}
              angle={angle}
            />
          );
        })}
      </div>
    </main>
  );
}
