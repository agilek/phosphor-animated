import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M104,144a24,24,0,0,0,48,0V56a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8v87c0,44.11-35.28,80.67-79.39,81A80,80,0,0,1,48,144V56a8,8,0,0,1,8-8H96a8,8,0,0,1,8,8Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M104,144a24,24,0,0,0,48,0V56a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8v87c0,44.11-35.28,80.67-79.39,81A80,80,0,0,1,48,144V56a8,8,0,0,1,8-8H96a8,8,0,0,1,8,8Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M104,144a24,24,0,0,0,48,0V56a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8v87c0,44.11-35.28,80.67-79.39,81A80,80,0,0,1,48,144V56a8,8,0,0,1,8-8H96a8,8,0,0,1,8,8Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M104,144a24,24,0,0,0,48,0V56a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8v87c0,44.11-35.28,80.67-79.39,81A80,80,0,0,1,48,144V56a8,8,0,0,1,8-8H96a8,8,0,0,1,8,8Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M200,40H160a16,16,0,0,0-16,16v88a16,16,0,0,1-32,0V56A16,16,0,0,0,96,40H56A16,16,0,0,0,40,56v88a88,88,0,0,0,88,88h.67c48.15-.36,87.33-40.29,87.33-89V56A16,16,0,0,0,200,40Zm0,16V96H160V56ZM96,56V96H56V56Z" fill="currentColor"/></>,
  duotone: <><path d="M48,56a8,8,0,0,1,8-8H96a8,8,0,0,1,8,8V96H48Z" opacity="0.2" fill="currentColor"/><path d="M152,56a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V96H152Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M104,144a24,24,0,0,0,48,0V56a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8v87c0,44.11-35.28,80.67-79.39,81A80,80,0,0,1,48,144V56a8,8,0,0,1,8-8H96a8,8,0,0,1,8,8Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const MagnetStraightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
