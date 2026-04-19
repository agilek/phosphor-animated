import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M208,128v80a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h80" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="196" cy="60" r="28" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M208,128v80a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h80" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="196" cy="60" r="28" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M208,128v80a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h80" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="196" cy="60" r="28" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M208,132v76a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h76" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="196" cy="60" r="28" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M216,128v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V56A16,16,0,0,1,48,40h80a8,8,0,0,1,0,16H48V208H200V128a8,8,0,0,1,16,0ZM196,24a36,36,0,1,0,36,36A36,36,0,0,0,196,24Z" fill="currentColor"/></>,
  duotone: <><circle cx="196" cy="60" r="28" opacity="0.2" fill="currentColor"/><path d="M208,128v80a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h80" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="196" cy="60" r="28" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const NotificationIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
