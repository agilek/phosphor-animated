import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,96V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M80,168V128a32,32,0,1,0-32,32h0v40a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V160h0a32,32,0,1,0-32-32v40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,96V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M80,168V128a32,32,0,1,0-32,32h0v40a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V160h0a32,32,0,1,0-32-32v40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,96V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M80,168V128a32,32,0,1,0-32,32h0v40a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V160h0a32,32,0,1,0-32-32v40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M164,164V128a40,40,0,1,1,44,39.8V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V167.8A40,40,0,1,1,92,128v36" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M48,88.2V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V88.2" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,96V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M80,168V128a32,32,0,1,0-32,32h0v40a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V160h0a32,32,0,1,0-32-32v40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ArmchairIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
