import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="96 104 128 72 160 104" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="160 152 128 184 96 152" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="96 104 128 72 160 104" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="160 152 128 184 96 152" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="96 104 128 72 160 104" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="160 152 128 184 96 152" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="96 104 128 72 160 104" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="160 152 128 184 96 152" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,133.66-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L128,172.69l26.34-26.35a8,8,0,0,1,11.32,11.32Zm0-48a8,8,0,0,1-11.32,0L128,83.31l-26.34,26.35A8,8,0,0,1,90.34,98.34l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,165.66,109.66Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="96 104 128 72 160 104" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="160 152 128 184 96 152" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const CaretCircleUpDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
