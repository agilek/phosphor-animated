import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="24" y="160" width="208" height="40" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,160V40a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,160V136a88,88,0,0,0-64-84.69" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M40,160V136a88,88,0,0,1,64-84.69" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><rect x="24" y="160" width="208" height="40" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,160V40a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,160V136a88,88,0,0,0-64-84.69" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M40,160V136a88,88,0,0,1,64-84.69" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><rect x="24" y="160" width="208" height="40" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,160V40a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,160V136a88,88,0,0,0-64-84.69" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M40,160V136a88,88,0,0,1,64-84.69" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><rect x="24" y="160" width="208" height="40" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,160V40a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,160V136a88,88,0,0,0-64-84.69" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M40,160V136a88,88,0,0,1,64-84.69" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><rect x="24" y="160" width="208" height="40" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,160V40a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,160V136a88,88,0,0,0-64-84.69" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M40,160V136a88,88,0,0,1,64-84.69" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const HardHatIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
