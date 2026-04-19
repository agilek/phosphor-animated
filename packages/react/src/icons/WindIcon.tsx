import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,192c3.39,9.15,13.67,16,24,16a24,24,0,0,0,0-48H40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M96,64c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,96c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M128,192c3.39,9.15,13.67,16,24,16a24,24,0,0,0,0-48H40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M96,64c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,96c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M128,192c3.39,9.15,13.67,16,24,16a24,24,0,0,0,0-48H40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M96,64c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,96c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M101.22,52A27.1,27.1,0,0,1,120,44a24,24,0,0,1,0,48H24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M189.22,88A27.1,27.1,0,0,1,208,80a24,24,0,0,1,0,48H32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M133.22,204A27.1,27.1,0,0,0,152,212a24,24,0,0,0,0-48H40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M128,192c3.39,9.15,13.67,16,24,16a24,24,0,0,0,0-48H40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M96,64c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,96c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const WindIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
