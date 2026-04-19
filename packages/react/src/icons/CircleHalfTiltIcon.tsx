import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><circle cx="128.01" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.5s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><circle cx="128.01" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.5s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.5s"}}/></>,
  bold: <><circle cx="128.01" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CircleHalfTiltIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
