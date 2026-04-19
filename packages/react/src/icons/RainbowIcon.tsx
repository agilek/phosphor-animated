import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M176,184V168a48,48,0,0,0-96,0v16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,184V168a80,80,0,0,0-160,0v16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M240,184V168a112,112,0,0,0-224,0v16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M176,184V168a48,48,0,0,0-96,0v16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,184V168a80,80,0,0,0-160,0v16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M240,184V168a112,112,0,0,0-224,0v16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M176,184V168a48,48,0,0,0-96,0v16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,184V168a80,80,0,0,0-160,0v16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M240,184V168a112,112,0,0,0-224,0v16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M12,180v-8a116,116,0,0,1,232,0v8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,180v-4a24,24,0,0,0-48,0v4" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,180v-4a72,72,0,0,0-144,0v4" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M176,184V168a48,48,0,0,0-96,0v16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,184V168a80,80,0,0,0-160,0v16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M240,184V168a112,112,0,0,0-224,0v16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const RainbowIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
