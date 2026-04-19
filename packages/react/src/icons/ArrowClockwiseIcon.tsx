import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="184 104 232 104 232 56" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M188.4,192a88,88,0,1,1,1.83-126.23L232,104" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="184 104 232 104 232 56" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M188.4,192a88,88,0,1,1,1.83-126.23L232,104" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="184 104 232 104 232 56" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M188.4,192a88,88,0,1,1,1.83-126.23L232,104" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="184 104 232 104 232 56" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M188.4,192a88,88,0,1,1,1.83-126.23L232,104" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1-5.66-13.66l17-17-10.55-9.65-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60l10.93,10L226.34,50.3A8,8,0,0,1,240,56Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="88" opacity="0.2" fill="currentColor"/><polyline points="184 104 232 104 232 56" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M188.4,192a88,88,0,1,1,1.83-126.23L232,104" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowClockwiseIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
