import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line"/><path d="M104,84h48l-28,40a28,28,0,1,1-20,47.6" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line"/><path d="M104,84h48l-28,40a28,28,0,1,1-20,47.6" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><path d="M104,84h48l-28,40a28,28,0,1,1-20,47.6" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line"/><path d="M104,84h48l-28,40a28,28,0,1,1-20,47.6" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,164a35.71,35.71,0,0,1-25.71-10.81A8,8,0,1,1,109.71,166,20,20,0,1,0,124,132a8,8,0,0,1-6.55-12.59L136.63,92H104a8,8,0,0,1,0-16h48a8,8,0,0,1,6.55,12.59l-21,30A36,36,0,0,1,124,188Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><path d="M104,84h48l-28,40a28,28,0,1,1-20,47.6" strokeWidth="16" className="draw-line"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/></>,
};

export const NumberCircleThreeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
