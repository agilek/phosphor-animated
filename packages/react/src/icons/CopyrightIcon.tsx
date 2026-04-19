import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M160,152a40,40,0,1,1,0-48" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M160,152a40,40,0,1,1,0-48" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M160,152a40,40,0,1,1,0-48" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M160,152a40,40,0,1,1,0-48" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M128,56a72,72,0,1,0,72,72A72.08,72.08,0,0,0,128,56Zm0,104a31.8,31.8,0,0,0,25.61-12.8,8,8,0,1,1,12.79,9.61,48,48,0,1,1,0-57.63,8,8,0,1,1-12.79,9.61A32,32,0,1,0,128,160Zm0-136A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M160,152a40,40,0,1,1,0-48" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CopyrightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
