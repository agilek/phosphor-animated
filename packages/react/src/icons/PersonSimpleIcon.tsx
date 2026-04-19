import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="64 224 128 152 192 224" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M32,128s40-24,96-24,96,24,96,24" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/><circle cx="128" cy="48" r="24" strokeWidth="8" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="128" cy="48" r="24" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="64 224 128 152 192 224" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/><path d="M32,128s40-24,96-24,96,24,96,24" strokeWidth="12" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="128" cy="48" r="24" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="64 224 128 152 192 224" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><path d="M32,128s40-24,96-24,96,24,96,24" strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="128" cy="48" r="24" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="64 224 128 152 192 224" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/><path d="M32,132s40-24,96-24,96,24,96,24" strokeWidth="24" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  fill: <><path d="M95.89,48a32,32,0,1,1,32,32A32,32,0,0,1,95.89,48Zm132.23,73.14C226.4,120.11,185.55,96,128,96S29.6,120.11,27.88,121.14a8,8,0,0,0,8.24,13.72c.36-.22,34.91-20.6,83.88-22.68V149L58,218.69a8,8,0,1,0,12,10.62L128,164l58,65.27a8,8,0,0,0,12-10.62L136,149V112.19c48.77,2.08,83.53,22.46,83.88,22.67a8,8,0,1,0,8.24-13.72Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="48" r="24" opacity="0.2" fill="currentColor"/><circle cx="128" cy="48" r="24" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="64 224 128 152 192 224" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><path d="M32,128s40-24,96-24,96,24,96,24" strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
};

export const PersonSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
