import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="114.12 65.16 160 16 144 96 208 120 185.7 143.9" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="163.79 167.37 96 240 112 160 48 136 92.21 88.63" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="114.12 65.16 160 16 144 96 208 120 185.7 143.9" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="163.79 167.37 96 240 112 160 48 136 92.21 88.63" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="114.12 65.16 160 16 144 96 208 120 185.7 143.9" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="163.79 167.37 96 240 112 160 48 136 92.21 88.63" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="119.59 59.29 160 16 148 96 208 120 191.17 138.03" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="163.79 167.37 96 240 108 160 48 136 92.21 88.63" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M105.72,67.81a4,4,0,0,1,0-5.42l48.39-51.85a8,8,0,0,1,13.7,7L153.18,90.9l57.43,21.53a8.24,8.24,0,0,1,4.22,3.4,8,8,0,0,1-1,9.63l-25.27,27.07a4,4,0,0,1-5.88,0Zm27.76,54.32L53.92,34.62A8,8,0,1,0,42.08,45.38L81.34,88.56l-39,41.83A8.15,8.15,0,0,0,40,135.31a8,8,0,0,0,5.16,8.18l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l61.86-66.28,38.37,42.2a8,8,0,1,0,11.84-10.76Z" fill="currentColor"/></>,
  duotone: <><polygon points="160 16 144 96 208 120 96 240 112 160 48 136 160 16" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="114.12 65.16 160 16 144 96 208 120 185.7 143.9" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="163.79 167.37 96 240 112 160 48 136 92.21 88.63" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const LightningSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
