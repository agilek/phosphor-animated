import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="120 200 119.99 136.01 56 136" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M160,184h48a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V96" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="120 200 119.99 136.01 56 136" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M160,184h48a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V96" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="120 200 119.99 136.01 56 136" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M160,184h48a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V96" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="120 200 119.99 136.01 56 136" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M164,184h44a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V92" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M128,136v64a8,8,0,0,1-13.66,5.66L88,179.31,45.66,221.66a8,8,0,0,1-11.32-11.32L76.69,168,50.34,141.66A8,8,0,0,1,56,128h64A8,8,0,0,1,128,136ZM208,32H80A16,16,0,0,0,64,48V96a8,8,0,0,0,16,0V48H208V176H160a8,8,0,0,0,0,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z" fill="currentColor"/></>,
  duotone: <><rect x="72" y="40" width="144" height="144" rx="8" opacity="0.2" fill="currentColor"/><polyline points="120 200 119.99 136.01 56 136" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M160,184h48a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V96" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const ArrowSquareInIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
