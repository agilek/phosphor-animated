import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M128,224a96,96,0,1,1,96-96" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M128,224s-40-32-40-96,40-96,40-96,40,32,40,96" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M128,224a96,96,0,1,1,96-96" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M128,224s-40-32-40-96,40-96,40-96,40,32,40,96" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M128,224a96,96,0,1,1,96-96" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M128,224s-40-32-40-96,40-96,40-96,40,32,40,96" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M128,224a96,96,0,1,1,96-96" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M128,224s-40-32-40-96,40-96,40-96,40,32,40,96" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M128,224a96,96,0,1,1,96-96" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M128,224s-40-32-40-96,40-96,40-96,40,32,40,96" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const GlobeSimpleXIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
