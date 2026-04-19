import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="176 120 224 168 176 216" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,56H88a56,56,0,0,0-56,56h0a56,56,0,0,0,56,56H224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="176 120 224 168 176 216" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,56H88a56,56,0,0,0-56,56h0a56,56,0,0,0,56,56H224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="176 120 224 168 176 216" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,56H88a56,56,0,0,0-56,56h0a56,56,0,0,0,56,56H224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="176 120 224 168 176 216" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,56H88a56,56,0,0,0-56,56h0a56,56,0,0,0,56,56H224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="176 120 224 168 176 216 176 120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,56H88a56,56,0,0,0-56,56h0a56,56,0,0,0,56,56h88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowUDownRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
