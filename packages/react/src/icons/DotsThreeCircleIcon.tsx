import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="8" fill="currentColor"/><circle cx="84" cy="128" r="8" fill="currentColor"/><circle cx="172" cy="128" r="8" fill="currentColor"/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="10" fill="currentColor"/><circle cx="84" cy="128" r="10" fill="currentColor"/><circle cx="172" cy="128" r="10" fill="currentColor"/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeMiterlimit="10" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="12" fill="currentColor"/><circle cx="172" cy="128" r="12" fill="currentColor"/><circle cx="84" cy="128" r="12" fill="currentColor"/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="96" cy="128" r="16" fill="currentColor"/><circle cx="160" cy="128" r="16" fill="currentColor"/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24ZM84,140a12,12,0,1,1,12-12A12,12,0,0,1,84,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,140Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeMiterlimit="10" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="172" cy="128" r="12" fill="currentColor"/><circle cx="128" cy="128" r="12" fill="currentColor"/><circle cx="84" cy="128" r="12" fill="currentColor"/></>,
};

export const DotsThreeCircleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
