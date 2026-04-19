import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="128 160 176 208 224 160" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="32 64 176 64 176 208" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="128 160 176 208 224 160" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="32 64 176 64 176 208" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="128 160 176 208 224 160" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="32 64 176 64 176 208" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="128 160 176 208 224 160" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="32 64 176 64 176 208" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M229.66,165.66l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,128,152h40V72H32a8,8,0,0,1,0-16H176a8,8,0,0,1,8,8v88h40a8,8,0,0,1,5.66,13.66Z" fill="currentColor"/></>,
  duotone: <><polygon points="128 160 176 208 224 160 128 160" opacity="0.2" fill="currentColor"/><polygon points="128 160 176 208 224 160 128 160" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="32 64 176 64 176 160" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowElbowRightDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
