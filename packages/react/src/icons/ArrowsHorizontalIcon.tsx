import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="56 96 24 128 56 160" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="200 96 232 128 200 160" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="56 96 24 128 56 160" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="200 96 232 128 200 160" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="56 96 24 128 56 160" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="200 96 232 128 200 160" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="56 96 24 128 56 160" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="200 96 232 128 200 160" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M237.66,133.66l-32,32A8,8,0,0,1,192,160V136H64v24a8,8,0,0,1-13.66,5.66l-32-32a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,64,96v24H192V96a8,8,0,0,1,13.66-5.66l32,32A8,8,0,0,1,237.66,133.66Z" fill="currentColor"/></>,
  duotone: <><polygon points="200 160 232 128 200 96 56 96 24 128 56 160 200 160" opacity="0.2" fill="currentColor"/><polyline points="56 96 24 128 56 160" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="200 96 232 128 200 160" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const ArrowsHorizontalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
