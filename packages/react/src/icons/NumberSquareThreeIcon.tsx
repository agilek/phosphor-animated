import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M104,80h48l-28,40a28,28,0,1,1-20,47.6" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M104,80h48l-28,40a28,28,0,1,1-20,47.6" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M104,80h48l-28,40a28,28,0,1,1-20,47.6" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M104,80h48l-28,40a28,28,0,1,1-20,47.6" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM124,184a35.71,35.71,0,0,1-25.71-10.81A8,8,0,1,1,109.71,162,20,20,0,1,0,124,128a8,8,0,0,1-6.55-12.59L136.63,88H104a8,8,0,0,1,0-16h48a8,8,0,0,1,6.55,12.59l-21,30A36,36,0,0,1,124,184Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2" fill="currentColor"/><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M104,80h48l-28,40a28,28,0,1,1-20,47.6" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const NumberSquareThreeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
