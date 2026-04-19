import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 200 119.99 136.01 56 136" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M160,184h48a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V96" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 200 119.99 136.01 56 136" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M160,184h48a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V96" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="120 200 119.99 136.01 56 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M160,184h48a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V96" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 200 119.99 136.01 56 136" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M164,184h44a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V92" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="120 200 119.99 136.01 56 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M160,184h48a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ArrowSquareInIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
