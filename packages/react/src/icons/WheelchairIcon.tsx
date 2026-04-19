import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="104 72 104 136 192 136 224 200 248 192" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="104" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,96H112a64,64,0,0,0,0,128c29.82,0,56.9-20.4,64-48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="104 72 104 136 192 136 224 200 248 192" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="104" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,96H112a64,64,0,0,0,0,128c29.82,0,56.9-20.4,64-48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="104 72 104 136 192 136 224 200 248 192" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="104" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,96H112a64,64,0,0,0,0,128c29.82,0,56.9-20.4,64-48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="104 68 104 136 192 136 224 200 244 192" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="104" cy="46" r="22" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,96H112a64,64,0,1,0,57.57,92" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="104 72 104 136 192 136 224 200 248 192" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="104" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,96H112a64,64,0,0,0,0,128c29.82,0,56.9-20.4,64-48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const WheelchairIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
