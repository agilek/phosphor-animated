import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="24 128 56 128 96 40 160 208 200 128 232 128" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="24 128 56 128 96 40 160 208 200 128 232 128" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="24 128 56 128 96 40 160 208 200 128 232 128" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="24 128 56 128 96 40 160 208 200 128 232 128" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-8,96H188.64L159,188a8,8,0,0,1-6.95,4h-.46a8,8,0,0,1-6.89-4.84L103,89.92,79,132a8,8,0,0,1-7,4H48a8,8,0,0,1,0-16H67.36L97.05,68a8,8,0,0,1,14.3.82L153,166.08l24-42.05a8,8,0,0,1,6.95-4h24a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><polygon points="56 128 96 40 160 208 200 128 56 128" opacity="0.2" fill="currentColor"/><polyline points="24 128 56 128 96 40 160 208 200 128 232 128" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const PulseIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
