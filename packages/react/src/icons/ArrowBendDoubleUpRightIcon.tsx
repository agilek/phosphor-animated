import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="176 152 224 104 176 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 152 176 104 128 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M32,200a96,96,0,0,1,96-96h48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="176 152 224 104 176 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 152 176 104 128 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M32,200a96,96,0,0,1,96-96h48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="176 152 224 104 176 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 152 176 104 128 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M32,200a96,96,0,0,1,96-96h48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="176 152 224 104 176 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 152 168 104 120 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M32,200a96,96,0,0,1,96-96h40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="176 152 224 104 176 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="128 152 176 104 128 56 128 152" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M32,200a96,96,0,0,1,96-96" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ArrowBendDoubleUpRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
