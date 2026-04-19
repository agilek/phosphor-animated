import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 168 128 136 160 168" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="96 112 128 80 160 112" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 168 128 136 160 168" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="96 112 128 80 160 112" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 168 128 136 160 168" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="96 112 128 80 160 112" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 168 128 136 160 168" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="96 112 128 80 160 112" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M201.58,201.57a104,104,0,1,0-147.15,0A104.17,104.17,0,0,0,201.58,201.57Zm-99.93-83.92a8,8,0,1,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,1,1-11.32,11.32L128,91.29Zm0,56a8,8,0,1,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32L128,147.32Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 168 128 136 160 168" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="96 112 128 80 160 112" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const CaretCircleDoubleUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
