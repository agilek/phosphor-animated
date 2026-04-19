import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="104 80 152 32 200 80" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M56,224a96,96,0,0,0,96-96V32" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="104 80 152 32 200 80" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M56,224a96,96,0,0,0,96-96V32" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="104 80 152 32 200 80" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M56,224a96,96,0,0,0,96-96V32" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="104 80 152 32 200 80" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M56,224a96,96,0,0,0,96-96V32" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M207.39,83.06A8,8,0,0,1,200,88H160v40A104.11,104.11,0,0,1,56,232a8,8,0,0,1,0-16,88.1,88.1,0,0,0,88-88V88H104a8,8,0,0,1-5.66-13.66l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,207.39,83.06Z" fill="currentColor"/></>,
  duotone: <><polygon points="104 80 152 32 200 80 104 80" opacity="0.2" fill="currentColor"/><polygon points="104 80 152 32 200 80 104 80" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M56,224a96,96,0,0,0,96-96V80" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowBendRightUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
