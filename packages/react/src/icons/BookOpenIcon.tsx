import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,88a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,200H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H24Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M128,88a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,200H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H24Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M128,88a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,200H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H24Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M128,88a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,200H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H24Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M128,88a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,200H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H24Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const BookOpenIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
