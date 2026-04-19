import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M208,128v80a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="196" cy="60" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M208,128v80a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="196" cy="60" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M208,128v80a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="196" cy="60" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M208,132v76a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h76" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="196" cy="60" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M208,128v80a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="196" cy="60" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const NotificationIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
