import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="96" cy="96" r="72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M167.6,88.4a72,72,0,1,1-79.2,79.2" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><circle cx="96" cy="96" r="72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M167.6,88.4a72,72,0,1,1-79.2,79.2" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><circle cx="96" cy="96" r="72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M167.6,88.4a72,72,0,1,1-79.2,79.2" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><circle cx="96" cy="96" r="72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M167.6,88.4a72,72,0,1,1-79.2,79.2" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="96" cy="96" r="72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M167.6,88.4a72,72,0,1,1-79.2,79.2" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const SubtractIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
