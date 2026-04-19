import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M240,112H200l-8,48a27.57,27.57,0,0,1,20-8,28,28,0,0,1,0,56,27.57,27.57,0,0,1-20-8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M240,112H200l-8,48a27.57,27.57,0,0,1,20-8,28,28,0,0,1,0,56,27.57,27.57,0,0,1-20-8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M240,112H200l-8,48a27.57,27.57,0,0,1,20-8,28,28,0,0,1,0,56,27.57,27.57,0,0,1-20-8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M240,112H200l-8,48a27.57,27.57,0,0,1,20-8,28,28,0,0,1,0,56,27.57,27.57,0,0,1-20-8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M240,112H200l-8,48a27.57,27.57,0,0,1,20-8,28,28,0,0,1,0,56,27.57,27.57,0,0,1-20-8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const TextHFiveIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
