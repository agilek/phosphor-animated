import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="80 136 32 88 80 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,200h88a56,56,0,0,0,56-56h0a56,56,0,0,0-56-56H32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="80 136 32 88 80 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,200h88a56,56,0,0,0,56-56h0a56,56,0,0,0-56-56H32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="80 136 32 88 80 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,200h88a56,56,0,0,0,56-56h0a56,56,0,0,0-56-56H32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="80 136 32 88 80 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,200h88a56,56,0,0,0,56-56h0a56,56,0,0,0-56-56H32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="80 136 32 88 80 40 80 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,200h88a56,56,0,0,0,56-56h0a56,56,0,0,0-56-56H80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowUUpLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
