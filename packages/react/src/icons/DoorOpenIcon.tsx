import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="132" cy="132" r="8" fill="currentColor"/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="132" cy="132" r="10" fill="currentColor"/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="132" cy="132" r="12" fill="currentColor"/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="120" cy="128" r="16" fill="currentColor"/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-64,0H64V40H168Zm-40-84a12,12,0,1,1,12,12A12,12,0,0,1,128,132Z" fill="currentColor"/></>,
  duotone: <><path d="M168,32V224h32V40a8,8,0,0,0-8-8Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="132" cy="132" r="12" fill="currentColor"/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const DoorOpenIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
