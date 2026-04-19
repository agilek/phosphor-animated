import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M60.1,208a72,72,0,0,1,135.8,0" strokeWidth="8" className="draw-line"/><circle cx="128" cy="120" r="40" strokeWidth="8" className="draw-line"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M60.1,208a72,72,0,0,1,135.8,0" strokeWidth="12" className="draw-line"/><circle cx="128" cy="120" r="40" strokeWidth="12" className="draw-line"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="128" cy="120" r="40" strokeWidth="16" className="draw-line"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line"/><path d="M60.1,208a72,72,0,0,1,135.8,0" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="128" cy="128" r="40" strokeWidth="24" className="draw-line"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="24" className="draw-line"/><path d="M63.48,208a72,72,0,0,1,129,0" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M172,120a44,44,0,1,1-44-44A44,44,0,0,1,172,120Zm60-64V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H54.68a80,80,0,0,1,29.41-34.84,4,4,0,0,1,4.83.31,59.82,59.82,0,0,0,78.16,0,4,4,0,0,1,4.83-.31A80,80,0,0,1,201.32,200H216Z" fill="currentColor"/></>,
  duotone: <><path d="M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H60.1A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,67.9,48H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48Z" opacity="0.2" fill="currentColor"/><circle cx="128" cy="120" r="40" strokeWidth="16" className="draw-line"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line"/><path d="M60.1,208a72,72,0,0,1,135.8,0" strokeWidth="16" className="draw-line"/></>,
};

export const UserRectangleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
