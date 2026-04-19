import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48.66 154.31 128 112 128 224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M204.34,168A80,80,0,1,1,120.23,64.37" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M64.19,95.74A28,28,0,0,1,68,40L188,96a28,28,0,0,0,0-56" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48.66 154.31 128 112 128 224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M204.34,168A80,80,0,1,1,120.23,64.37" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M64.19,95.74A28,28,0,0,1,68,40L188,96a28,28,0,0,0,0-56" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48.66 154.31 128 112 128 224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M204.34,168A80,80,0,1,1,120.23,64.37" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M64.19,95.74A28,28,0,0,1,68,40L188,96a28,28,0,0,0,0-56" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M64.19,95.74A28,28,0,0,1,68,40L188,96a28,28,0,0,0,0-56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="48.94 156.3 132 112 132 224" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M199.46,180A80,80,0,1,1,120.23,64.37" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48.66 154.31 128 112 128 224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M204.34,168A80,80,0,1,1,120.23,64.37" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M64.19,95.74A28,28,0,0,1,68,40L188,96a28,28,0,0,0,0-56" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const NyTimesLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
