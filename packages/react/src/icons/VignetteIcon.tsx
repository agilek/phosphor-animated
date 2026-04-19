import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="8" className="draw-line"/><ellipse cx="128" cy="128" rx="64" ry="48" strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="12" className="draw-line"/><ellipse cx="128" cy="128" rx="64" ry="48" strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line"/><ellipse cx="128" cy="128" rx="64" ry="48" strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="24" className="draw-line"/><ellipse cx="128" cy="128" rx="56" ry="40" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-16,88c0,30.93-32.24,56-72,56s-72-25.07-72-56,32.24-56,72-56S200,97.07,200,128Z" fill="currentColor"/></>,
  duotone: <><path d="M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM128,176c-35.35,0-64-21.49-64-48s28.65-48,64-48,64,21.49,64,48S163.35,176,128,176Z" opacity="0.2" fill="currentColor"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line"/><ellipse cx="128" cy="128" rx="64" ry="48" strokeWidth="16" className="draw-line"/></>,
};

export const VignetteIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
