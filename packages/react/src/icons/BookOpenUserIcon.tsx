import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,112a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,200H96a32,32,0,0,1,32,32V112A32,32,0,0,0,96,80H24Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M96,48a40,40,0,0,1,64,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M128,112a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,200H96a32,32,0,0,1,32,32V112A32,32,0,0,0,96,80H24Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M96,48a40,40,0,0,1,64,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M128,112a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,200H96a32,32,0,0,1,32,32V112A32,32,0,0,0,96,80H24Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M96,48a40,40,0,0,1,64,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M128,116a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,200H96a32,32,0,0,1,32,32V116A32,32,0,0,0,96,84H24Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M96,48a40,40,0,0,1,64,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M128,112a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,200H96a32,32,0,0,1,32,32V112A32,32,0,0,0,96,80H24Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M96,48a40,40,0,0,1,64,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const BookOpenUserIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
