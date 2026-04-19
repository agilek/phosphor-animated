import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 216 48 224 192 224" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 216 48 224 192 224" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 216 48 224 192 224" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M48,208a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 208 48 224 192 224" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M216,32V192a8,8,0,0,1-8,8H72a16,16,0,0,0-16,16H192a8,8,0,0,1,0,16H48a8,8,0,0,1-8-8V56A32,32,0,0,1,72,24H208A8,8,0,0,1,216,32Z" fill="currentColor"/></>,
  duotone: <><path d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" opacity="0.2" fill="currentColor"/><path d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 216 48 224 192 224" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const BookIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
