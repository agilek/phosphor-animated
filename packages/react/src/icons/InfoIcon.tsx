import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="124" cy="84" r="8" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="124" cy="84" r="10" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><circle cx="124" cy="84" r="12" fill="currentColor"/></>,
  bold: <><circle cx="124" cy="84" r="16" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M120,124a8,8,0,0,1,8,8v36a8,8,0,0,0,8,8" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><path d="M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><circle cx="124" cy="84" r="12" fill="currentColor"/></>,
};

export const InfoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
