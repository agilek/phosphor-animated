import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="136 176 88 224 40 176" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,176V88a56,56,0,0,0-56-56h0A56,56,0,0,0,88,88V224" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="136 176 88 224 40 176" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,176V88a56,56,0,0,0-56-56h0A56,56,0,0,0,88,88V224" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="136 176 88 224 40 176" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,176V88a56,56,0,0,0-56-56h0A56,56,0,0,0,88,88V224" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="136 176 88 224 40 176" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,176V88a56,56,0,0,0-56-56h0A56,56,0,0,0,88,88V224" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M208,88v88a8,8,0,0,1-16,0V88a48,48,0,0,0-96,0v80h40a8,8,0,0,1,5.66,13.66l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,40,168H80V88a64,64,0,0,1,128,0Z" fill="currentColor"/></>,
  duotone: <><polygon points="136 176 88 224 40 176 136 176" opacity="0.2" fill="currentColor"/><polygon points="136 176 88 224 40 176 136 176" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,176V88a56,56,0,0,0-56-56h0A56,56,0,0,0,88,88v88" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowULeftDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
