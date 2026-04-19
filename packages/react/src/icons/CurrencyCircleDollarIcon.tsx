import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M104,168h36a20,20,0,0,0,0-40H116a20,20,0,0,1,0-40h36" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M104,168h36a20,20,0,0,0,0-40H116a20,20,0,0,1,0-40h36" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M104,168h36a20,20,0,0,0,0-40H116a20,20,0,0,1,0-40h36" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M104,168h36a20,20,0,0,0,0-40H116a20,20,0,0,1,0-40h36" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M104,168h36a20,20,0,0,0,0-40H116a20,20,0,0,1,0-40h36" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const CurrencyCircleDollarIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
