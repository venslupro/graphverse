export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="gwm-logo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38e1ff" />
          <stop offset="0.6" stopColor="#8b7bff" />
          <stop offset="1" stopColor="#ff6fb5" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="14" fill="none" stroke="url(#gwm-logo)" strokeOpacity="0.45" strokeWidth="1" />
      <path d="M9 21 L16 8 L23 21 Z M16 8 L16 16 M9 21 L16 16 L23 21" fill="none" stroke="url(#gwm-logo)" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="16" cy="8" r="2.4" fill="#38e1ff" />
      <circle cx="9" cy="21" r="2.4" fill="#8b7bff" />
      <circle cx="23" cy="21" r="2.4" fill="#ff6fb5" />
      <circle cx="16" cy="16" r="1.8" fill="#fff" />
    </svg>
  );
}
