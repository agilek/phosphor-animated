import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 168 128 136 160 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="96 112 128 80 160 112" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 168 128 136 160 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="96 112 128 80 160 112" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 168 128 136 160 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="96 112 128 80 160 112" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 168 128 136 160 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="96 112 128 80 160 112" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 168 128 136 160 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="96 112 128 80 160 112" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const CaretCircleDoubleUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
