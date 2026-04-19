import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="128 232 128 160 72 104 72 40" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="160 200 128 232 96 200" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="184 40 184 104 128 160" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="128 232 128 160 72 104 72 40" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="160 200 128 232 96 200" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="184 40 184 104 128 160" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="128 232 128 160 72 104 72 40" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="160 200 128 232 96 200" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="184 40 184 104 128 160" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="128 232 128 160 72 104 72 40" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="160 200 128 232 96 200" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="184 40 184 104 128 160" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M192,40v64a8,8,0,0,1-2.34,5.66L136,163.31V192h24a8,8,0,0,1,5.66,13.66l-32,32a8,8,0,0,1-11.32,0l-32-32A8,8,0,0,1,96,192h24V163.31L66.34,109.66A8,8,0,0,1,64,104V40a8,8,0,0,1,16,0v60.69l48,48,48-48V40a8,8,0,0,1,16,0Z" fill="currentColor"/></>,
  duotone: <><polygon points="128 160 72 104 72 40 184 40 184 104 128 160" opacity="0.2" fill="currentColor"/><polyline points="128 232 128 160 72 104 72 40" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="160 200 128 232 96 200" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="184 40 184 104 128 160" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const ArrowsMergeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
