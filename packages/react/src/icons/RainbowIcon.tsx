import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M176,184V168a48,48,0,0,0-96,0v16" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M208,184V168a80,80,0,0,0-160,0v16" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M240,184V168a112,112,0,0,0-224,0v16" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M176,184V168a48,48,0,0,0-96,0v16" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M208,184V168a80,80,0,0,0-160,0v16" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M240,184V168a112,112,0,0,0-224,0v16" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M176,184V168a48,48,0,0,0-96,0v16" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M208,184V168a80,80,0,0,0-160,0v16" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M240,184V168a112,112,0,0,0-224,0v16" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M12,180v-8a116,116,0,0,1,232,0v8" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M152,180v-4a24,24,0,0,0-48,0v4" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M200,180v-4a72,72,0,0,0-144,0v4" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M128,48A120.13,120.13,0,0,0,8,168v16a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V168A120.13,120.13,0,0,0,128,48Zm32,128a8,8,0,0,1-8-8,24,24,0,0,0-48,0,8,8,0,0,1-16,0,40,40,0,0,1,80,0A8,8,0,0,1,160,176Zm32,0a8,8,0,0,1-8-8,56,56,0,0,0-112,0,8,8,0,0,1-16,0,72,72,0,0,1,144,0A8,8,0,0,1,192,176Zm32,0a8,8,0,0,1-8-8,88,88,0,0,0-176,0,8,8,0,0,1-16,0,104,104,0,0,1,208,0A8,8,0,0,1,224,176Z" fill="currentColor"/></>,
  duotone: <><path d="M240,184V168a112,112,0,0,0-224,0v16H80V168a48,48,0,0,1,96,0v16Z" opacity="0.2" fill="currentColor"/><path d="M176,184V168a48,48,0,0,0-96,0v16" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M208,184V168a80,80,0,0,0-160,0v16" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M240,184V168a112,112,0,0,0-224,0v16" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const RainbowIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
