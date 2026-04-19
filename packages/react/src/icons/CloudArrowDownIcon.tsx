import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M96,208H72A56,56,0,1,1,85.92,97.74" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,128a80,80,0,1,1,144,48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="120 176 152 208 184 176" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M96,208H72A56,56,0,1,1,85.92,97.74" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,128a80,80,0,1,1,144,48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="120 176 152 208 184 176" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M96,208H72A56,56,0,1,1,85.92,97.74" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,128a80,80,0,1,1,144,48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="120 176 152 208 184 176" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M84,208H72A56,56,0,1,1,85.92,97.74" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 176 152 208 184 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M80,128a80,80,0,1,1,151.46,36" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M96,208H72A56,56,0,1,1,85.92,97.74" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,128a80,80,0,1,1,144,48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="120 176 152 208 184 176" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const CloudArrowDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
