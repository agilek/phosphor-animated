import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="104" r="72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="104" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="128" cy="104" r="72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="104" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="128" cy="104" r="72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="104" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="128" cy="104" r="72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="104" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="104" r="72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="104" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const WebcamIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
