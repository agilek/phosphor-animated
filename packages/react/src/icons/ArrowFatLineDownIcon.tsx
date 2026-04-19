import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polygon points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polygon points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polygon points="32 136 128 232 224 136 176 136 176 80 80 80 80 136 32 136" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M229.66,141.66l-96,96a8,8,0,0,1-11.32,0l-96-96A8,8,0,0,1,32,128H72V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v56h40a8,8,0,0,1,5.66,13.66ZM184,40a8,8,0,0,0-8-8H80a8,8,0,0,0,0,16h96A8,8,0,0,0,184,40Z" fill="currentColor"/></>,
  duotone: <><polygon points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136" opacity="0.2" fill="currentColor"/><polygon points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowFatLineDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
