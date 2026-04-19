import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,128V24a64,64,0,0,1,50,104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,128H24A64,64,0,0,1,128,78" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,128V232A64,64,0,0,1,78,128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M128,128H232a64,64,0,0,1-104,50" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M128,128V24a64,64,0,0,1,50,104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,128H24A64,64,0,0,1,128,78" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,128V232A64,64,0,0,1,78,128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M128,128H232a64,64,0,0,1-104,50" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M128,128V24a64,64,0,0,1,50,104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,128H24A64,64,0,0,1,128,78" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,128V232A64,64,0,0,1,78,128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M128,128H232a64,64,0,0,1-104,50" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M128,128V24a64,64,0,0,1,50,104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,128H24A64,64,0,0,1,128,78" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,128V232A64,64,0,0,1,78,128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M128,128H232a64,64,0,0,1-104,50" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M128,128V24a64,64,0,0,1,50,104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,128H24A64,64,0,0,1,128,78" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,128V232A64,64,0,0,1,78,128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M128,128H232a64,64,0,0,1-104,50" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const GooglePhotosLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
