import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,216H48a8,8,0,0,1-8-8V184" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M184,216h24a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V72" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,216H48a8,8,0,0,1-8-8V184" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M184,216h24a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V72" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,216H48a8,8,0,0,1-8-8V184" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M184,216h24a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V72" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,216H48a8,8,0,0,1-8-8V184" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M184,216h24a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V72" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,216H48a8,8,0,0,1-8-8V184" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M184,216h24a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V72" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const SelectionInverseIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
