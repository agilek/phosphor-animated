import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M40,56H216V176a8,8,0,0,1-8,8H168a8,8,0,0,1-8-8V152H96v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><path d="M40,56H216V176a8,8,0,0,1-8,8H168a8,8,0,0,1-8-8V152H96v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><path d="M40,56H216V176a8,8,0,0,1-8,8H168a8,8,0,0,1-8-8V152H96v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><path d="M40,56H216V176a8,8,0,0,1-8,8H168a8,8,0,0,1-8-8V152H96v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><path d="M40,56H216V176a8,8,0,0,1-8,8H168a8,8,0,0,1-8-8V152H96v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const KanbanIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
