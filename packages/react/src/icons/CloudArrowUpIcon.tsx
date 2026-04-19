import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M112,208H72A56,56,0,1,1,85.92,97.74" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 160 152 128 184 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M80,128a80,80,0,1,1,112,73.34" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M112,208H72A56,56,0,1,1,85.92,97.74" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 160 152 128 184 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M80,128a80,80,0,1,1,112,73.34" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M112,208H72A56,56,0,1,1,85.92,97.74" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 160 152 128 184 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M80,128a80,80,0,1,1,112,73.34" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M100,208H72A56,56,0,1,1,85.92,97.74" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="124 160 156 128 188 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M80,128a80,80,0,1,1,156,25.05" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M112,208H72A56,56,0,1,1,85.92,97.74" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 160 152 128 184 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M80,128a80,80,0,1,1,112,73.34" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const CloudArrowUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
