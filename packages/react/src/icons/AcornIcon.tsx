import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M216,112v16c0,53-88,88-88,112,0-24-88-59-88-112V112" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,56h96a48,48,0,0,1,48,48v0a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v0A48,48,0,0,1,80,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,56V48a32,32,0,0,1,32-32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M216,112v16c0,53-88,88-88,112,0-24-88-59-88-112V112" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,56h96a48,48,0,0,1,48,48v0a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v0A48,48,0,0,1,80,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,56V48a32,32,0,0,1,32-32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M216,112v16c0,53-88,88-88,112,0-24-88-59-88-112V112" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,56h96a48,48,0,0,1,48,48v0a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v0A48,48,0,0,1,80,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,56V48a32,32,0,0,1,32-32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M216,112v16c0,53-88,88-88,112,0-24-88-59-88-112V112" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,56h96a48,48,0,0,1,48,48v0a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v0A48,48,0,0,1,80,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,56V48a32,32,0,0,1,32-32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M216,112v16c0,53-88,88-88,112,0-24-88-59-88-112V112" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,56h96a48,48,0,0,1,48,48v0a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v0A48,48,0,0,1,80,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,56V48a32,32,0,0,1,32-32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const AcornIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
