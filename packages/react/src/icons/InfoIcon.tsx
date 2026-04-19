import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M120,124a8,8,0,0,1,8,8v36a8,8,0,0,0,8,8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const InfoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
