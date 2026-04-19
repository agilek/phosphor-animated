import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="176 152 224 104 176 56" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="128 152 176 104 128 56" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M32,200a96,96,0,0,1,96-96h48" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="176 152 224 104 176 56" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="128 152 176 104 128 56" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M32,200a96,96,0,0,1,96-96h48" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="176 152 224 104 176 56" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="128 152 176 104 128 56" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M32,200a96,96,0,0,1,96-96h48" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="176 152 224 104 176 56" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="120 152 168 104 120 56" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M32,200a96,96,0,0,1,96-96h40" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L212.69,104,170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Zm-48-11.32-48-48A8,8,0,0,0,120,56V96.3A104.15,104.15,0,0,0,24,200a8,8,0,0,0,16,0,88.11,88.11,0,0,1,80-87.63V152a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,181.66,98.34Z" fill="currentColor"/></>,
  duotone: <><polygon points="128 152 176 104 128 56 128 152" opacity="0.2" fill="currentColor"/><polyline points="176 152 224 104 176 56" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polygon points="128 152 176 104 128 56 128 152" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M32,200a96,96,0,0,1,96-96" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const ArrowBendDoubleUpRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
