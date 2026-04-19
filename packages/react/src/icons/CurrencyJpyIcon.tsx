import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="200 48 128 136 56 48" strokeWidth="8" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="200 48 128 136 56 48" strokeWidth="12" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="200 48 128 136 56 48" strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="200 48 128 136 56 48" strokeWidth="24" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm54.4,52.8L144,128h16a8,8,0,0,1,0,16H136v16h24a8,8,0,0,1,0,16H136v16a8,8,0,0,1-16,0V176H96a8,8,0,0,1,0-16h24V144H96a8,8,0,0,1,0-16h16L73.6,76.8a8,8,0,1,1,12.8-9.6L128,122.67,169.6,67.2a8,8,0,0,1,12.8,9.6Z" fill="currentColor"/></>,
  duotone: <><polygon points="200 48 128 136 56 48 200 48" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="200 48 128 136 56 48" strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
};

export const CurrencyJpyIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
