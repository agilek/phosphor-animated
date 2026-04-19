import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="96 80 24 80 24 152" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="232 96 136 192 24 80" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="96 80 24 80 24 152" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="232 96 136 192 24 80" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="96 80 24 80 24 152" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="232 96 136 192 24 80" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="96 80 24 80 24 152" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="232 96 136 192 24 80" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M237.66,101.66l-96,96a8,8,0,0,1-11.32,0L60,127.31,29.66,157.66A8,8,0,0,1,16,152V80a8,8,0,0,1,8-8H96a8,8,0,0,1,5.66,13.66L71.31,116,136,180.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" fill="currentColor"/></>,
  duotone: <><polygon points="96 80 24 80 24 152 96 80" opacity="0.2" fill="currentColor"/><polygon points="96 80 24 80 24 152 96 80" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="232 96 136 192 60 116" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowElbowLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
