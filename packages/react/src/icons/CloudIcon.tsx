import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.92,97.74" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.92,97.74" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.92,97.74" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.92,97.74" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.92,97.74" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const CloudIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
