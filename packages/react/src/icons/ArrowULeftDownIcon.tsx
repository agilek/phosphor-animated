import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="136 176 88 224 40 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,176V88a56,56,0,0,0-56-56h0A56,56,0,0,0,88,88V224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="136 176 88 224 40 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,176V88a56,56,0,0,0-56-56h0A56,56,0,0,0,88,88V224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="136 176 88 224 40 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,176V88a56,56,0,0,0-56-56h0A56,56,0,0,0,88,88V224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="136 176 88 224 40 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,176V88a56,56,0,0,0-56-56h0A56,56,0,0,0,88,88V224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="136 176 88 224 40 176 136 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,176V88a56,56,0,0,0-56-56h0A56,56,0,0,0,88,88v88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowULeftDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
