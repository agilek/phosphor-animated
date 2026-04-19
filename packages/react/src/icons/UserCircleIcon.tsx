import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M63.8,199.37a72,72,0,0,1,128.4,0" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="120" r="40" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M63.8,199.37a72,72,0,0,1,128.4,0" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="120" r="40" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="120" r="40" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M63.8,199.37a72,72,0,0,1,128.4,0" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="120" r="40" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M63.8,199.37a72,72,0,0,1,128.4,0" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M172,120a44,44,0,1,1-44-44A44.05,44.05,0,0,1,172,120Zm60,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.09,88.09,0,0,0-91.47-87.93C77.43,41.89,39.87,81.12,40,128.25a87.65,87.65,0,0,0,22.24,58.16A79.71,79.71,0,0,1,84,165.1a4,4,0,0,1,4.83.32,59.83,59.83,0,0,0,78.28,0,4,4,0,0,1,4.83-.32,79.71,79.71,0,0,1,21.79,21.31A87.62,87.62,0,0,0,216,128Z" fill="currentColor"/></>,
  duotone: <><path d="M128,32A96,96,0,0,0,63.8,199.38h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.37A96,96,0,0,0,128,32Z" opacity="0.2" fill="currentColor"/><path d="M63.8,199.37a72,72,0,0,1,128.4,0" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="120" r="40" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const UserCircleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
