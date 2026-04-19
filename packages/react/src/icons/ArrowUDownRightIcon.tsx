import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="176 120 224 168 176 216" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,56H88a56,56,0,0,0-56,56h0a56,56,0,0,0,56,56H224" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="176 120 224 168 176 216" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,56H88a56,56,0,0,0-56,56h0a56,56,0,0,0,56,56H224" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="176 120 224 168 176 216" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,56H88a56,56,0,0,0-56,56h0a56,56,0,0,0,56,56H224" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="176 120 224 168 176 216" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,56H88a56,56,0,0,0-56,56h0a56,56,0,0,0,56,56H224" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M229.66,173.66l-48,48A8,8,0,0,1,168,216V176H88A64,64,0,0,1,88,48h88a8,8,0,0,1,0,16H88a48,48,0,0,0,0,96h80V120a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,229.66,173.66Z" fill="currentColor"/></>,
  duotone: <><polygon points="176 120 224 168 176 216 176 120" opacity="0.2" fill="currentColor"/><polygon points="176 120 224 168 176 216 176 120" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,56H88a56,56,0,0,0-56,56h0a56,56,0,0,0,56,56h88" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowUDownRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
