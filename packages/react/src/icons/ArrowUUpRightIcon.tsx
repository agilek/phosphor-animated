import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="176 136 224 88 176 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,200H88a56,56,0,0,1-56-56h0A56,56,0,0,1,88,88H224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="176 136 224 88 176 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,200H88a56,56,0,0,1-56-56h0A56,56,0,0,1,88,88H224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="176 136 224 88 176 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,200H88a56,56,0,0,1-56-56h0A56,56,0,0,1,88,88H224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="176 136 224 88 176 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,200H88a56,56,0,0,1-56-56h0A56,56,0,0,1,88,88H224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="176 136 224 88 176 40 176 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,200H88a56,56,0,0,1-56-56h0A56,56,0,0,1,88,88h88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowUUpRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
