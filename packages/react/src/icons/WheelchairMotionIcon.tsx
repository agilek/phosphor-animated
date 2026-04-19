import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="176" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M160,168a56,56,0,1,1-56-56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M48,100.11a88,88,0,0,1,104-5.88L128,136h72l-16,80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="176" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M160,168a56,56,0,1,1-56-56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M48,100.11a88,88,0,0,1,104-5.88L128,136h72l-16,80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="176" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M160,168a56,56,0,1,1-56-56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M48,100.11a88,88,0,0,1,104-5.88L128,136h72l-16,80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="176" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M44,104.11a88,88,0,0,1,104-5.88L124,140h72l-16,80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M151.85,176A52,52,0,1,1,92,120.61" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="176" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M160,168a56,56,0,1,1-56-56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M48,100.11a88,88,0,0,1,104-5.88L128,136h72l-16,80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const WheelchairMotionIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
