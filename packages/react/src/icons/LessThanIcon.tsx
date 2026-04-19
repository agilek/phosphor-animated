import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="200 56 48 128 200 200" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="200 56 48 128 200 200" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="200 56 48 128 200 200" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="200 56 48 128 200 200" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM179.35,168.74a8,8,0,1,1-6.7,14.52l-104-48a8,8,0,0,1,0-14.52l104-48a8,8,0,0,1,6.7,14.52L91.09,128Z" fill="currentColor"/></>,
  duotone: <><polygon points="200 56 48 128 200 200 200 56" opacity="0.2" fill="currentColor"/><polyline points="200 56 48 128 200 200" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const LessThanIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
