import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="80" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M208,120c-14.57,28.49-45.8,48-80,48a87.71,87.71,0,0,1-35.75-7.56" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><circle cx="128" cy="80" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M208,120c-14.57,28.49-45.8,48-80,48a87.71,87.71,0,0,1-35.75-7.56" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><circle cx="128" cy="80" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M208,120c-14.57,28.49-45.8,48-80,48a87.71,87.71,0,0,1-35.75-7.56" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><circle cx="128" cy="80" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M208,120c-14.57,28.49-45.8,48-80,48a87.71,87.71,0,0,1-35.75-7.56" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="80" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M208,120c-14.57,28.49-45.8,48-80,48a87.71,87.71,0,0,1-35.75-7.56" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const CompassToolIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
