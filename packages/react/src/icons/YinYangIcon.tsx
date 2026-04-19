import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="176" r="8" fill="currentColor"/><path d="M128,224a48,48,0,0,1,0-96,48,48,0,0,0,0-96" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="80" r="8" fill="currentColor"/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="176" r="10" fill="currentColor"/><path d="M128,224a48,48,0,0,1,0-96,48,48,0,0,0,0-96" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="80" r="10" fill="currentColor"/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="176" r="12" fill="currentColor"/><path d="M128,224a48,48,0,0,1,0-96,48,48,0,0,0,0-96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="80" r="12" fill="currentColor"/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="176" r="16" fill="currentColor"/><path d="M128,224a48,48,0,0,1,0-96,48,48,0,0,0,0-96" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="80" r="16" fill="currentColor"/></>,
  fill: <><path d="M140,80a12,12,0,1,1-12-12A12,12,0,0,1,140,80Zm92,48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-92,48a12,12,0,1,0-12,12A12,12,0,0,0,140,176Zm32-92a44.05,44.05,0,0,0-44-44A88,88,0,0,0,81.09,202.42,52,52,0,0,1,128,128,44.05,44.05,0,0,0,172,84Z" fill="currentColor"/></>,
  duotone: <><path d="M128,224a48,48,0,0,1,0-96,48,48,0,0,0,0-96,96,96,0,0,1,0,192Z" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="176" r="12" fill="currentColor"/><path d="M128,224a48,48,0,0,1,0-96,48,48,0,0,0,0-96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="80" r="12" fill="currentColor"/></>,
};

export const YinYangIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
