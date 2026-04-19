import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><circle cx="156" cy="132" r="8" fill="currentColor"/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><circle cx="156" cy="132" r="10" fill="currentColor"/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><circle cx="156" cy="132" r="12" fill="currentColor"/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><circle cx="156" cy="132" r="16" fill="currentColor"/></>,
  fill: <><path d="M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-68-72a12,12,0,1,1,12-12A12,12,0,0,1,164,144Z" fill="currentColor"/></>,
  duotone: <><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><circle cx="156" cy="132" r="12" fill="currentColor"/></>,
};

export const DoorIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
