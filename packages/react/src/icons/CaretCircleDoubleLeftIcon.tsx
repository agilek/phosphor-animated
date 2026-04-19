import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="168 160 136 128 168 96" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="112 160 80 128 112 96" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="168 160 136 128 168 96" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="112 160 80 128 112 96" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="168 160 136 128 168 96" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="112 160 80 128 112 96" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="168 160 136 128 168 96" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="112 160 80 128 112 96" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M201.57,54.42a104,104,0,1,0,0,147.15A104.17,104.17,0,0,0,201.57,54.42Zm-83.92,99.93a8,8,0,1,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,1,1,11.32,11.32L91.29,128Zm56,0a8,8,0,1,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,1,1,11.32,11.32L147.32,128Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="168 160 136 128 168 96" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="112 160 80 128 112 96" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const CaretCircleDoubleLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
