import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="56 168 240 104 56 40 56 216" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="56 168 240 104 56 40 56 216" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="56 168 240 104 56 40 56 216" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="56 168 240 104 56 40 56 216" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M248,104a8,8,0,0,1-5.37,7.56L64,173.69V216a8,8,0,0,1-16,0V40a8,8,0,0,1,10.63-7.56l184,64A8,8,0,0,1,248,104Z" fill="currentColor"/></>,
  duotone: <><polygon points="56 168 240 104 56 40 56 168" opacity="0.2" fill="currentColor"/><polyline points="56 168 240 104 56 40 56 216" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const FlagPennantIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
