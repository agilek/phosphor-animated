import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M216,88v96a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8v-8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><polyline points="48 216 48 40 80 40 104 88 104 216" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M216,88v96a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8v-8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><polyline points="48 216 48 40 80 40 104 88 104 216" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M216,88v96a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8v-8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><polyline points="48 216 48 40 80 40 104 88 104 216" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M216,88v96a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8v-8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><polyline points="48 216 48 40 80 40 104 88 104 216" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M216,88v96a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8v-8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><polyline points="48 216 48 40 80 40 104 88 104 216" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const CraneTowerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
