import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M32,80H95.06a8,8,0,0,1,7.15,4.42l51.58,103.16a8,8,0,0,0,7.15,4.42H224" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M32,80H95.06a8,8,0,0,1,7.15,4.42l51.58,103.16a8,8,0,0,0,7.15,4.42H224" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M32,80H95.06a8,8,0,0,1,7.15,4.42l51.58,103.16a8,8,0,0,0,7.15,4.42H224" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M32,80H95.06a8,8,0,0,1,7.15,4.42l51.58,103.16a8,8,0,0,0,7.15,4.42H224" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM200,176H152.94a15.92,15.92,0,0,1-14.31-8.84L103.06,96H56a8,8,0,0,1,0-16h47.06a15.92,15.92,0,0,1,14.31,8.84L152.94,160H200a8,8,0,0,1,0,16Zm0-80H152a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><path d="M32,80H224a0,0,0,0,1,0,0V192a0,0,0,0,1,0,0H48a16,16,0,0,1-16-16V80A0,0,0,0,1,32,80Z" opacity="0.2" fill="currentColor"/><path d="M32,80H95.06a8,8,0,0,1,7.15,4.42l51.58,103.16a8,8,0,0,0,7.15,4.42H224" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const OptionIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
