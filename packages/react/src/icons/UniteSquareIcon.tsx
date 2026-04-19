import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="96 216 216 216 216 96 160 96 160 40 40 40 40 160 96 160 96 216" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><polygon points="96 216 216 216 216 96 160 96 160 40 40 40 40 160 96 160 96 216" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><polygon points="96 216 216 216 216 96 160 96 160 40 40 40 40 160 96 160 96 216" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><polygon points="96 216 216 216 216 96 160 96 160 40 40 40 40 160 96 160 96 216" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <><path d="M224,96V216a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V168H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H160a8,8,0,0,1,8,8V88h48A8,8,0,0,1,224,96Z" fill="currentColor"/></>,
  duotone: <><polygon points="96 216 216 216 216 96 160 96 160 40 40 40 40 160 96 160 96 216" opacity="0.2" fill="currentColor"/><polygon points="96 216 216 216 216 96 160 96 160 40 40 40 40 160 96 160 96 216" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const UniteSquareIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
