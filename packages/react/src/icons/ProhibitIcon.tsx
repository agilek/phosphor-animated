import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeMiterlimit="10" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M200,128a71.69,71.69,0,0,1-15.78,44.91L83.09,71.78A71.95,71.95,0,0,1,200,128ZM56,128a71.95,71.95,0,0,0,116.91,56.22L71.78,83.09A71.69,71.69,0,0,0,56,128Zm180,0A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-20,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeMiterlimit="10" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const ProhibitIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
