import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M91.25,40H208a8,8,0,0,1,8,8V177.23" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M91.25,40H208a8,8,0,0,1,8,8V177.23" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,40,208,216H48a8,8,0,0,1-8-8V48A8,8,0,0,1,48,40Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M91.25,40H208a8,8,0,0,1,8,8V177.23" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,40,208,216H48a8,8,0,0,1-8-8V48A8,8,0,0,1,48,40Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M102.06,40H208a8,8,0,0,1,8,8V165.34" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M91.25,40H208a8,8,0,0,1,8,8V177.23" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const CalendarSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
