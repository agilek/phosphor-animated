import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="92" cy="108" r="8" fill="currentColor"/><circle cx="164" cy="108" r="8" fill="currentColor"/></>,
  light: <><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="92" cy="108" r="10" fill="currentColor"/><circle cx="164" cy="108" r="10" fill="currentColor"/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="92" cy="108" r="12" fill="currentColor"/><circle cx="164" cy="108" r="12" fill="currentColor"/><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="92" cy="108" r="16" fill="currentColor"/><circle cx="164" cy="108" r="16" fill="currentColor"/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm82.92,60c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8ZM164,120a12,12,0,1,1,12-12A12,12,0,0,1,164,120Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="92" cy="108" r="12" fill="currentColor"/><circle cx="164" cy="108" r="12" fill="currentColor"/><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const SmileyIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
