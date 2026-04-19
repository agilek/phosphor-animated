import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M208,104c0,44.18-35.82,96-80,96s-80-51.82-80-96a80,80,0,0,1,160,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M136,56a49.52,49.52,0,0,1,40,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="137.91 199.13 152 232 104 232 118.09 199.13" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M208,104c0,44.18-35.82,96-80,96s-80-51.82-80-96a80,80,0,0,1,160,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M136,56a49.52,49.52,0,0,1,40,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="137.91 199.13 152 232 104 232 118.09 199.13" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M208,104c0,44.18-35.82,96-80,96s-80-51.82-80-96a80,80,0,0,1,160,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M136,56a49.52,49.52,0,0,1,40,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="137.91 199.13 152 232 104 232 118.09 199.13" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M208,104c0,44.18-35.82,92-80,92s-80-47.82-80-92a80,80,0,0,1,160,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="143.7 193.97 160 232 96 232 112.3 193.97" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M140,65.84A40.1,40.1,0,0,1,167.8,100" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M208,104c0,44.18-35.82,96-80,96s-80-51.82-80-96a80,80,0,0,1,160,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M136,56a49.52,49.52,0,0,1,40,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="137.91 199.13 152 232 104 232 118.09 199.13" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const BalloonIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
