import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="24" y="56" width="208" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M232,168H216a40,40,0,0,1,0-80h16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M24,168H40a40,40,0,0,0,0-80H24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><rect x="24" y="56" width="208" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M232,168H216a40,40,0,0,1,0-80h16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M24,168H40a40,40,0,0,0,0-80H24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><rect x="24" y="56" width="208" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M232,168H216a40,40,0,0,1,0-80h16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M24,168H40a40,40,0,0,0,0-80H24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><rect x="24" y="56" width="208" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M232,168H216a40,40,0,0,1,0-80h16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M24,168H40a40,40,0,0,0,0-80H24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><rect x="24" y="56" width="208" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M232,168H216a40,40,0,0,1,0-80h16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M24,168H40a40,40,0,0,0,0-80H24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const CourtBasketballIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
