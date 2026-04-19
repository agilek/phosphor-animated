import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="96" cy="96" r="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M56.69,216,166.34,106.34a8,8,0,0,1,11.32,0L216,144.69" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="96" cy="96" r="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M56.69,216,166.34,106.34a8,8,0,0,1,11.32,0L216,144.69" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="96" cy="96" r="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M56.69,216,166.34,106.34a8,8,0,0,1,11.32,0L216,144.69" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56.69,216,166.34,106.34a8,8,0,0,1,11.32,0L216,144.69" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="96" cy="96" r="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M56.69,216,166.34,106.34a8,8,0,0,1,11.32,0L216,144.69" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ImageSquareIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
