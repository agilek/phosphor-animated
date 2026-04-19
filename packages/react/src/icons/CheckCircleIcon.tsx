import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="88 136 112 160 168 104" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="88 136 112 160 168 104" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="88 136 112 160 168 104" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="88 136 112 160 168 104" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><polyline points="88 136 112 160 168 104" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CheckCircleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
