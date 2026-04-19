import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="176 32 176 128 143.99 104 112 128 112 32" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="48 216 48 224 192 224" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="176 32 176 128 143.99 104 112 128 112 32" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="48 216 48 224 192 224" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="176 32 176 128 143.99 104 112 128 112 32" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="48 216 48 224 192 224" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="168 32 168 128 137.99 104 108 128 108 32" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M48,208a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="48 208 48 224 192 224" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-24,96-25.61-19.2a4,4,0,0,0-4.8,0L128,120V40h56Z" fill="currentColor"/></>,
  duotone: <><path d="M176,32v96l-32-24-32,24V32H72A24,24,0,0,0,48,56V216a24,24,0,0,1,24-24H208V32Z" opacity="0.2" fill="currentColor"/><polyline points="48 216 48 224 192 224" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="176 32 176 128 143.99 104 112 128 112 32" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const BookBookmarkIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
