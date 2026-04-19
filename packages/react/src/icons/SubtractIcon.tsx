import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="96" cy="96" r="72" strokeWidth="8" className="draw-line"/><path d="M167.6,88.4a72,72,0,1,1-79.2,79.2" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="96" cy="96" r="72" strokeWidth="12" className="draw-line"/><path d="M167.6,88.4a72,72,0,1,1-79.2,79.2" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="96" cy="96" r="72" strokeWidth="16" className="draw-line"/><path d="M167.6,88.4a72,72,0,1,1-79.2,79.2" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="96" cy="96" r="72" strokeWidth="24" className="draw-line"/><path d="M167.6,88.4a72,72,0,1,1-79.2,79.2" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M174.63,81.35a80,80,0,1,0-93.28,93.28,80,80,0,1,0,93.28-93.28ZM96,160a64,64,0,1,1,64-64A64.07,64.07,0,0,1,96,160Z" fill="currentColor"/></>,
  duotone: <><path d="M167.6,88.4h0A73.37,73.37,0,0,1,168,96a72,72,0,0,1-72,72,73.37,73.37,0,0,1-7.6-.4h0a72,72,0,1,0,79.2-79.2Z" opacity="0.2" fill="currentColor"/><circle cx="96" cy="96" r="72" strokeWidth="16" className="draw-line"/><path d="M167.6,88.4a72,72,0,1,1-79.2,79.2" strokeWidth="16" className="draw-line"/></>,
};

export const SubtractIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
