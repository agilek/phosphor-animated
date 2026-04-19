import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="120 176 168 224 216 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,176V88a56,56,0,0,1,56-56h0a56,56,0,0,1,56,56V224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="120 176 168 224 216 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,176V88a56,56,0,0,1,56-56h0a56,56,0,0,1,56,56V224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="120 176 168 224 216 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,176V88a56,56,0,0,1,56-56h0a56,56,0,0,1,56,56V224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="120 176 168 224 216 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,176V88a56,56,0,0,1,56-56h0a56,56,0,0,1,56,56V224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="120 176 168 224 216 176 120 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,176V88a56,56,0,0,1,56-56h0a56,56,0,0,1,56,56v88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowURightDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
