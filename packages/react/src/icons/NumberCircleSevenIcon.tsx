import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line"/><polyline points="104 88 152 88 120 176" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line"/><polyline points="104 88 152 88 120 176" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><polyline points="104 88 152 88 120 176" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line"/><polyline points="104 88 152 88 120 176" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm31.52,66.73-32,88A8,8,0,0,1,120,184a7.9,7.9,0,0,1-2.73-.48,8,8,0,0,1-4.79-10.25L140.58,96H104a8,8,0,0,1,0-16h48a8,8,0,0,1,7.52,10.73Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><polyline points="104 88 152 88 120 176" strokeWidth="16" className="draw-line"/></>,
};

export const NumberCircleSevenIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
