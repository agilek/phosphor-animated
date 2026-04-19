import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 216 48 224 192 224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 216 48 224 192 224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 216 48 224 192 224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M48,208a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 208 48 224 192 224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 216 48 224 192 224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const BookIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
