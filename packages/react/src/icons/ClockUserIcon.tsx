import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="176 104 128 128 128 72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,224a96,96,0,1,1,96-96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M160,224c3.67-13.8,16.6-24,32-24s28.33,10.2,32,24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="192" cy="176" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><polyline points="176 104 128 128 128 72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,224a96,96,0,1,1,96-96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M160,224c3.67-13.8,16.6-24,32-24s28.33,10.2,32,24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="192" cy="176" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><polyline points="176 104 128 128 128 72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,224a96,96,0,1,1,96-96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="192" cy="176" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M160,224c3.67-13.8,16.6-24,32-24s28.33,10.2,32,24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><polyline points="176 104 128 128 128 72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M160,224c3.67-13.8,16.6-24,32-24s28.33,10.2,32,24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="192" cy="176" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M116,223.26A96,96,0,1,1,223.26,116" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="176 104 128 128 128 72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,224a96,96,0,1,1,96-96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M160,224c3.67-13.8,16.6-24,32-24s28.33,10.2,32,24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="192" cy="176" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ClockUserIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
