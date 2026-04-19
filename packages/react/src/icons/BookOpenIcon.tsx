import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,88a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" strokeWidth="8" className="draw-line"/><path d="M24,200H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H24Z" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M128,88a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" strokeWidth="12" className="draw-line"/><path d="M24,200H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H24Z" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M128,88a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" strokeWidth="16" className="draw-line"/><path d="M24,200H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H24Z" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M128,88a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" strokeWidth="24" className="draw-line"/><path d="M24,200H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H24Z" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M240,56V200a8,8,0,0,1-8,8H160a24,24,0,0,0-24,23.94,7.9,7.9,0,0,1-5.12,7.55A8,8,0,0,1,120,232a24,24,0,0,0-24-24H24a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H88a32,32,0,0,1,32,32v87.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V80a32,32,0,0,1,32-32h64A8,8,0,0,1,240,56Z" fill="currentColor"/></>,
  duotone: <><path d="M160,56a32,32,0,0,0-32,32A32,32,0,0,0,96,56H24V200H96a32,32,0,0,1,32,32,32,32,0,0,1,32-32h72V56Z" opacity="0.2" fill="currentColor"/><path d="M128,88a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" strokeWidth="16" className="draw-line"/><path d="M24,200H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H24Z" strokeWidth="16" className="draw-line"/></>,
};

export const BookOpenIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
