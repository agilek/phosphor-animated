import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="132" r="56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,207.83A52,52,0,1,1,232,164" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M24,164a52,52,0,1,1,24,43.83" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M152,27.79a52,52,0,1,1-48,0" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="128" cy="132" r="56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,207.83A52,52,0,1,1,232,164" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M24,164a52,52,0,1,1,24,43.83" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M152,27.79a52,52,0,1,1-48,0" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="128" cy="132" r="56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,207.83A52,52,0,1,1,232,164" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M24,164a52,52,0,1,1,24,43.83" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M152,27.79a52,52,0,1,1-48,0" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="128" cy="132" r="56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,207.83A52,52,0,1,1,232,164" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M24,164a52,52,0,1,1,24,43.83" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M152,27.79a52,52,0,1,1-48,0" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="132" r="56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,207.83A52,52,0,1,1,232,164" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M24,164a52,52,0,1,1,24,43.83" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M152,27.79a52,52,0,1,1-48,0" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const BiohazardIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
