import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M63.8,199.37a72,72,0,0,1,128.4,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="120" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M63.8,199.37a72,72,0,0,1,128.4,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="120" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="120" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M63.8,199.37a72,72,0,0,1,128.4,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="120" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M63.8,199.37a72,72,0,0,1,128.4,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M63.8,199.37a72,72,0,0,1,128.4,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="120" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const UserCircleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
