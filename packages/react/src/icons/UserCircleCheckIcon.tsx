import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="120" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M63.8,199.37a72,72,0,0,1,128.4,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M222.67,112A95.92,95.92,0,1,1,144,33.33" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="184 56 200 72 232 40" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="128" cy="120" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M63.8,199.37a72,72,0,0,1,128.4,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M222.67,112A95.92,95.92,0,1,1,144,33.33" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="184 56 200 72 232 40" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="128" cy="120" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M63.8,199.37a72,72,0,0,1,128.4,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M222.67,112A95.92,95.92,0,1,1,144,33.33" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="184 56 200 72 232 40" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="128" cy="120" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M63.8,199.37a72,72,0,0,1,128.4,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M222.67,112A95.92,95.92,0,1,1,144,33.33" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="184 56 200 72 232 40" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="120" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M63.8,199.37a72,72,0,0,1,128.4,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M222.67,112A95.92,95.92,0,1,1,144,33.33" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="184 56 200 72 232 40" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const UserCircleCheckIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
