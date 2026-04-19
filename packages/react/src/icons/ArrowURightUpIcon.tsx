import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="120 80 168 32 216 80" strokeWidth="8" className="draw-line"/><path d="M56,80v88a56,56,0,0,0,56,56h0a56,56,0,0,0,56-56V32" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="120 80 168 32 216 80" strokeWidth="12" className="draw-line"/><path d="M56,80v88a56,56,0,0,0,56,56h0a56,56,0,0,0,56-56V32" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="120 80 168 32 216 80" strokeWidth="16" className="draw-line"/><path d="M56,80v88a56,56,0,0,0,56,56h0a56,56,0,0,0,56-56V32" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="120 80 168 32 216 80" strokeWidth="24" className="draw-line"/><path d="M56,80v88a56,56,0,0,0,56,56h0a56,56,0,0,0,56-56V32" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M223.39,83.06A8,8,0,0,1,216,88H176v80a64,64,0,0,1-128,0V80a8,8,0,0,1,16,0v88a48,48,0,0,0,96,0V88H120a8,8,0,0,1-5.66-13.66l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,223.39,83.06Z" fill="currentColor"/></>,
  duotone: <><polygon points="120 80 168 32 216 80 120 80" opacity="0.2" fill="currentColor"/><polygon points="120 80 168 32 216 80 120 80" strokeWidth="16" className="draw-line"/><path d="M56,80v88a56,56,0,0,0,56,56h0a56,56,0,0,0,56-56V80" strokeWidth="16" className="draw-line"/></>,
};

export const ArrowURightUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
