import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="104" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="104" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="104" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="104" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="104" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const MapPinIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
