import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M104,32h48" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M40,176V152a88,88,0,0,1,176,0v24" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M104,32h48" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M40,176V152a88,88,0,0,1,176,0v24" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M104,32h48" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M40,176V152a88,88,0,0,1,176,0v24" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M104,32h48" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M40,168v-8a88,88,0,0,1,176,0v8" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M104,32h48" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M40,176V152a88,88,0,0,1,176,0v24" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const CallBellIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
