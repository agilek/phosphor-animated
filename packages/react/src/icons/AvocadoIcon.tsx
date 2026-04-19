import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="160" r="40" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M82.73,48a48,48,0,0,1,90.9,1l29.82,84.28a80,80,0,1,1-150.26-1.74Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="160" r="40" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M82.73,48a48,48,0,0,1,90.9,1l29.82,84.28a80,80,0,1,1-150.26-1.74Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="160" r="40" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M82.73,48a48,48,0,0,1,90.9,1l29.82,84.28a80,80,0,1,1-150.26-1.74Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="160" r="40" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M82.73,48a48,48,0,0,1,90.9,1l29.82,84.28a80,80,0,1,1-150.26-1.74Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M211,130.66,181.2,46.47a56,56,0,0,0-106-1.14h0l-29.51,83.5A88,88,0,1,0,211,130.66ZM128,200a40,40,0,1,1,40-40A40,40,0,0,1,128,200Z" fill="currentColor"/></>,
  duotone: <><path d="M203.45,133.33,173.63,49.05a48,48,0,0,0-90.9-1L53.19,131.59a80,80,0,1,0,150.26,1.74ZM128,200a40,40,0,1,1,40-40A40,40,0,0,1,128,200Z" opacity="0.2" fill="currentColor"/><circle cx="128" cy="160" r="40" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M82.73,48a48,48,0,0,1,90.9,1l29.82,84.28a80,80,0,1,1-150.26-1.74Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const AvocadoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
