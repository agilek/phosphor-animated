import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="176 32 176 128 143.99 104 112 128 112 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="48 216 48 224 192 224" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="176 32 176 128 143.99 104 112 128 112 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="48 216 48 224 192 224" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="176 32 176 128 143.99 104 112 128 112 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="48 216 48 224 192 224" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="168 32 168 128 137.99 104 108 128 108 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,208a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="48 208 48 224 192 224" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="48 216 48 224 192 224" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 32 176 128 143.99 104 112 128 112 32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const BookBookmarkIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
