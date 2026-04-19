import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,112a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" strokeWidth="8" className="draw-line"/><path d="M24,200H96a32,32,0,0,1,32,32V112A32,32,0,0,0,96,80H24Z" strokeWidth="8" className="draw-line"/><path d="M96,48a40,40,0,0,1,64,0" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M128,112a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" strokeWidth="12" className="draw-line"/><path d="M24,200H96a32,32,0,0,1,32,32V112A32,32,0,0,0,96,80H24Z" strokeWidth="12" className="draw-line"/><path d="M96,48a40,40,0,0,1,64,0" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M128,112a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" strokeWidth="16" className="draw-line"/><path d="M24,200H96a32,32,0,0,1,32,32V112A32,32,0,0,0,96,80H24Z" strokeWidth="16" className="draw-line"/><path d="M96,48a40,40,0,0,1,64,0" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M128,116a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" strokeWidth="24" className="draw-line"/><path d="M24,200H96a32,32,0,0,1,32,32V116A32,32,0,0,0,96,84H24Z" strokeWidth="24" className="draw-line"/><path d="M96,48a40,40,0,0,1,64,0" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M240,80V200a8,8,0,0,1-8,8H160a24,24,0,0,0-24,23.94,7.9,7.9,0,0,1-5.12,7.55A8,8,0,0,1,120,232a24,24,0,0,0-24-24H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H88a32,32,0,0,1,32,32v63.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V104a32,32,0,0,1,32-32h64A8,8,0,0,1,240,80ZM88.81,56H89a47.92,47.92,0,0,1,36,17.4,4,4,0,0,0,6.08,0A47.92,47.92,0,0,1,167,56h.19a4,4,0,0,0,3.54-5.84,48,48,0,0,0-85.46,0A4,4,0,0,0,88.81,56Z" fill="currentColor"/></>,
  duotone: <><path d="M160,80a32,32,0,0,0-32,32A32,32,0,0,0,96,80H24V200H96a32,32,0,0,1,32,32,32,32,0,0,1,32-32h72V80Z" opacity="0.3" fill="currentColor"/><path d="M128,112a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" strokeWidth="16" className="draw-line"/><path d="M24,200H96a32,32,0,0,1,32,32V112A32,32,0,0,0,96,80H24Z" strokeWidth="16" className="draw-line"/><path d="M96,48a40,40,0,0,1,64,0" strokeWidth="16" className="draw-line"/></>,
};

export const BookOpenUserIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
