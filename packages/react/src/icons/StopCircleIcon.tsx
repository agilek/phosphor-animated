import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="96" y="96" width="64" height="64" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="96" y="96" width="64" height="64" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeMiterlimit="10" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="96" y="96" width="64" height="64" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="88" y="88" width="80" height="80" rx="12" fill="currentColor"/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm32,132a4,4,0,0,1-4,4H100a4,4,0,0,1-4-4V100a4,4,0,0,1,4-4h56a4,4,0,0,1,4,4Z" fill="currentColor"/></>,
  duotone: <><path d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm32,128H96V96h64Z" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeMiterlimit="10" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="96" y="96" width="64" height="64" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const StopCircleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
