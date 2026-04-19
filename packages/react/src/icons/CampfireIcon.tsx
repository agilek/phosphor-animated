import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M152,136a24,24,0,0,1-48,0c0-24,24-40,24-40S152,112,152,136Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M180,108a52,52,0,0,1-104,0c0-44,52-76,52-76S180,64,180,108Z" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M152,136a24,24,0,0,1-48,0c0-24,24-40,24-40S152,112,152,136Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M180,108a52,52,0,0,1-104,0c0-44,52-76,52-76S180,64,180,108Z" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M152,136a24,24,0,0,1-48,0c0-24,24-40,24-40S152,112,152,136Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M180,108a52,52,0,0,1-104,0c0-44,52-76,52-76S180,64,180,108Z" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M152,132a24,24,0,0,1-48,0c0-24,24-36,24-36S152,108,152,132Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M180,104a52,52,0,0,1-104,0c0-44,52-72,52-72S180,60,180,104Z" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M180,108a52,52,0,0,1-104,0c0-44,52-76,52-76S180,64,180,108Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M152,136a24,24,0,0,1-48,0c0-24,24-40,24-40S152,112,152,136Z" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const CampfireIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
