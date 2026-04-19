import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="56 232 128 88 200 232" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88.64,95.17a40,40,0,1,1,78.72,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M70.53,131.38a72,72,0,1,1,114.94,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><polyline points="56 232 128 88 200 232" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88.64,95.17a40,40,0,1,1,78.72,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M70.53,131.38a72,72,0,1,1,114.94,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><polyline points="56 232 128 88 200 232" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88.64,95.17a40,40,0,1,1,78.72,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M70.53,131.38a72,72,0,1,1,114.94,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><polyline points="56 232 128 92 200 232" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M91.85,74.85a40,40,0,0,1,71.93-.74" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M60.11,138.34a80,80,0,1,1,135.78,0" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="56 232 128 88 200 232" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88.64,95.17a40,40,0,1,1,78.72,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M70.53,131.38a72,72,0,1,1,114.94,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const CellTowerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
