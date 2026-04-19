import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,80a32,32,0,0,1,32-32h16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,208H160a32,32,0,0,1-32-32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M80,208H96a32,32,0,0,0,32-32V80A32,32,0,0,0,96,48H80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M128,80a32,32,0,0,1,32-32h16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,208H160a32,32,0,0,1-32-32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M80,208H96a32,32,0,0,0,32-32V80A32,32,0,0,0,96,48H80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M128,80a32,32,0,0,1,32-32h16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,208H160a32,32,0,0,1-32-32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M80,208H96a32,32,0,0,0,32-32V80A32,32,0,0,0,96,48H80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M128,80a32,32,0,0,1,32-32h16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,208H160a32,32,0,0,1-32-32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M80,208H96a32,32,0,0,0,32-32V80A32,32,0,0,0,96,48H80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M128,80a32,32,0,0,1,32-32h16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,208H160a32,32,0,0,1-32-32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M80,208H96a32,32,0,0,0,32-32V80A32,32,0,0,0,96,48H80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const CursorTextIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
