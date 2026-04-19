import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M88,200a72,72,0,0,1-72-72.55C16.3,87.75,49.2,56,88.9,56H128a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M88,200a72,72,0,0,1-72-72.55C16.3,87.75,49.2,56,88.9,56H128a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M88,200a72,72,0,0,1-72-72.55C16.3,87.75,49.2,56,88.9,56H128a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M88,200a72,72,0,0,1-72-72.55C16.3,87.75,49.2,56,88.9,56H128a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M88,200a72,72,0,0,1-72-72.55C16.3,87.75,49.2,56,88.9,56H128a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const HeadlightsIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
