import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="200" cy="200" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="200" cy="200" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="200" cy="200" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="200" cy="200" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="200" cy="200" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const PathIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
