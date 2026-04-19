import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="80 40 24 128 80 216" strokeWidth="8" className="draw-line"/><polyline points="176 40 232 128 176 216" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="80 40 24 128 80 216" strokeWidth="12" className="draw-line"/><polyline points="176 40 232 128 176 216" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="80 40 24 128 80 216" strokeWidth="16" className="draw-line"/><polyline points="176 40 232 128 176 216" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="80 40 24 128 80 216" strokeWidth="24" className="draw-line"/><polyline points="176 40 232 128 176 216" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM103,180A8,8,0,0,1,89.05,188l-32-56a8,8,0,0,1,0-7.94l32-56A8,8,0,0,1,103,76L73.21,128ZM199,132l-32,56a8,8,0,0,1-13.9-7.94l29.74-52L153.05,76A8,8,0,1,1,167,68l32,56A8,8,0,0,1,199,132Z" fill="currentColor"/></>,
  duotone: <><polygon points="176 216 232 128 176 40 80 40 24 128 80 216 176 216" opacity="0.2" fill="currentColor"/><polyline points="80 40 24 128 80 216" strokeWidth="16" className="draw-line"/><polyline points="176 40 232 128 176 216" strokeWidth="16" className="draw-line"/></>,
};

export const BracketsAngleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
