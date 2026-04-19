import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="104" r="32" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="104" r="32" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="104" r="32" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="104" r="32" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z" fill="currentColor"/></>,
  duotone: <><path d="M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z" opacity="0.2" fill="currentColor"/><circle cx="128" cy="104" r="32" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const MapPinIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
