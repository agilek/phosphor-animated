import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="160" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M82.73,48a48,48,0,0,1,90.9,1l29.82,84.28a80,80,0,1,1-150.26-1.74Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="160" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M82.73,48a48,48,0,0,1,90.9,1l29.82,84.28a80,80,0,1,1-150.26-1.74Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="160" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M82.73,48a48,48,0,0,1,90.9,1l29.82,84.28a80,80,0,1,1-150.26-1.74Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="160" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M82.73,48a48,48,0,0,1,90.9,1l29.82,84.28a80,80,0,1,1-150.26-1.74Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="160" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M82.73,48a48,48,0,0,1,90.9,1l29.82,84.28a80,80,0,1,1-150.26-1.74Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const AvocadoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
