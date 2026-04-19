import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="96 56 128 24 160 56" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="160 200 128 232 96 200" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="96 56 128 24 160 56" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="160 200 128 232 96 200" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="96 56 128 24 160 56" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="160 200 128 232 96 200" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="96 56 128 24 160 56" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="160 200 128 232 96 200" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M167.39,196.94a8,8,0,0,1-1.73,8.72l-32,32a8,8,0,0,1-11.32,0l-32-32A8,8,0,0,1,96,192h24V64H96a8,8,0,0,1-5.66-13.66l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,160,64H136V192h24A8,8,0,0,1,167.39,196.94Z" fill="currentColor"/></>,
  duotone: <><polygon points="96 56 128 24 160 56 160 200 128 232 96 200 96 56" opacity="0.2" fill="currentColor"/><polyline points="96 56 128 24 160 56" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="160 200 128 232 96 200" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ArrowsVerticalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
