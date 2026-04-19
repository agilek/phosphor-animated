import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="132" r="36" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="132" r="36" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="132" r="36" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="132" r="36" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="132" r="36" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CameraIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
