import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="24" y="56" width="208" height="40" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="24" y="56" width="208" height="40" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="24" y="56" width="208" height="40" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="24" y="56" width="208" height="40" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><rect x="24" y="56" width="208" height="40" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ArchiveIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
