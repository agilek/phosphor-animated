import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M193.89,200.49A79.66,79.66,0,0,1,160,208H72A56,56,0,1,1,85.92,97.74" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M112.63,63.52A80,80,0,0,1,219.68,181.28" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M80,128A79.68,79.68,0,0,1,91.07,87.37" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M193.89,200.49A79.66,79.66,0,0,1,160,208H72A56,56,0,1,1,85.92,97.74" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M112.63,63.52A80,80,0,0,1,219.68,181.28" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M80,128A79.68,79.68,0,0,1,91.07,87.37" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M193.89,200.49A79.66,79.66,0,0,1,160,208H72A56,56,0,1,1,85.92,97.74" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M112.63,63.52A80,80,0,0,1,219.68,181.28" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M80,128A79.68,79.68,0,0,1,91.07,87.37" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M193.89,200.49A79.66,79.66,0,0,1,160,208H72A56,56,0,1,1,85.92,97.74" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M80,128A79.68,79.68,0,0,1,91.07,87.37" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M119.39,59.06A80,80,0,0,1,224.76,175" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M193.89,200.49A79.66,79.66,0,0,1,160,208H72A56,56,0,1,1,85.92,97.74" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M112.63,63.52A80,80,0,0,1,219.68,181.28" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M80,128A79.68,79.68,0,0,1,91.07,87.37" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const CloudSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
