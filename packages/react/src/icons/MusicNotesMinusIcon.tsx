import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><circle cx="180" cy="164" r="28" strokeWidth="8" className="draw-line"/><circle cx="52" cy="196" r="28" strokeWidth="8" className="draw-line"/><polyline points="80 196 80 56 136 42" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><circle cx="180" cy="164" r="28" strokeWidth="12" className="draw-line"/><circle cx="52" cy="196" r="28" strokeWidth="12" className="draw-line"/><polyline points="80 196 80 56 136 42" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><circle cx="180" cy="164" r="28" strokeWidth="16" className="draw-line"/><circle cx="52" cy="196" r="28" strokeWidth="16" className="draw-line"/><polyline points="80 196 80 56 136 42" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><circle cx="180" cy="164" r="28" strokeWidth="24" className="draw-line"/><circle cx="52" cy="196" r="28" strokeWidth="24" className="draw-line"/><polyline points="80 196 80 56 136 42" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,40H176a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z" fill="currentColor"/><path d="M162.13,76.5a31.57,31.57,0,0,1-16.44-38.76A4,4,0,0,0,141,32.53L78.06,48.25A8,8,0,0,0,72,56V166.1A36,36,0,1,0,52.42,232C72.25,231.77,88,215.13,88,195.3V102.25l73.26-18.31A4,4,0,0,0,162.13,76.5Z" fill="currentColor"/><path d="M212,80h-8a4,4,0,0,0-4,4v50.1A36,36,0,1,0,180.42,200c19.83-.23,35.58-16.86,35.58-36.7V84A4,4,0,0,0,212,80Z" fill="currentColor"/></>,
  duotone: <><circle cx="180" cy="164" r="28" opacity="0.2" fill="currentColor"/><circle cx="52" cy="196" r="28" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><circle cx="180" cy="164" r="28" strokeWidth="16" className="draw-line"/><circle cx="52" cy="196" r="28" strokeWidth="16" className="draw-line"/><polyline points="80 196 80 56 136 42" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const MusicNotesMinusIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
