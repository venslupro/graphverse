type P = { className?: string };
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const IconLibrary = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H9v16H5.5A1.5 1.5 0 0 1 4 18.5z" />
    <path d="M9 4h4v16H9zM14.5 5.2l3.6-.9 3 14.6-3.6.8z" />
  </svg>
);
export const IconPulse = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M3 12h4l2.5-6 5 12 2.5-6h4" />
  </svg>
);
export const IconCube = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
    <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
  </svg>
);
export const IconRobot = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="5" y="8" width="14" height="10" rx="3" />
    <path d="M12 4v4M9 13h.01M15 13h.01M3 12v3M21 12v3" />
  </svg>
);
export const IconFactory = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M3 20V10l6 4V10l6 4V6l6-2v16z" />
    <path d="M7 17h2M12 17h2M17 17h1" />
  </svg>
);
export const IconMolecule = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="6" r="2.2" />
    <circle cx="6" cy="17" r="2.2" />
    <circle cx="18" cy="17" r="2.2" />
    <path d="M11 8l-4 7M13 8l4 7M8.2 17h7.6" />
  </svg>
);
export const IconGrid = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M13 3L5 13h6l-1 8 8-10h-6z" />
  </svg>
);
export const IconArrow = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const IconCheck = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);
export const IconMail = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="M4 7l8 6 8-6" />
  </svg>
);
