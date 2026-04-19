import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="48" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="48" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="48" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="44" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm56-88a56,56,0,1,1-56-56A56.06,56.06,0,0,1,184,128Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="48" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="48" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const RadioButtonIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
