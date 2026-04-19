import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M195.88,60.12a95.88,95.88,0,1,0,18.77,26.49" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M161.94,94.06a48,48,0,1,0,14,31.2" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M195.88,60.12a95.88,95.88,0,1,0,18.77,26.49" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M161.94,94.06a48,48,0,1,0,14,31.2" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M195.88,60.12a95.88,95.88,0,1,0,18.77,26.49" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M161.94,94.06a48,48,0,1,0,14,31.2" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M195.88,60.12A95.92,95.92,0,1,0,218,94.56" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M161.94,94.06a48,48,0,1,0,13.11,43.46" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M211.2,79.39a8,8,0,0,0-3.77,10.67A88.09,88.09,0,1,1,184.3,60.39L161.53,83.16A56,56,0,0,0,88.4,167.59h0a56,56,0,0,0,95.5-42.79,8,8,0,1,0-16,.9,40,40,0,0,1-62,35.67l23.95-23.95L167.6,99.72h0l62.06-62a8,8,0,0,0-11.32-11.32L195.67,49A104,104,0,0,0,54.46,201.54,104,104,0,0,0,221.87,83.16,8,8,0,0,0,211.2,79.39Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="48" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M195.88,60.12a95.88,95.88,0,1,0,18.77,26.49" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M161.94,94.06a48,48,0,1,0,14,31.2" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const TargetIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
