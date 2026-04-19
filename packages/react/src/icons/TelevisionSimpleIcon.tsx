import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="72" width="192" height="136" rx="8" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="80 24 128 72 176 24" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="32" y="72" width="192" height="136" rx="8" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="80 24 128 72 176 24" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="32" y="72" width="192" height="136" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="80 24 128 72 176 24" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="32" y="72" width="192" height="136" rx="8" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="80 24 128 72 176 24" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M216,64H147.31l34.35-34.34a8,8,0,1,0-11.32-11.32L128,60.69,85.66,18.34A8,8,0,0,0,74.34,29.66L108.69,64H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,136H40V80H216V200ZM200,100v80a4,4,0,0,1-4,4H60a4,4,0,0,1-4-4V100a4,4,0,0,1,4-4H196A4,4,0,0,1,200,100Z" fill="currentColor"/></>,
  duotone: <><rect x="32" y="72" width="192" height="136" rx="8" opacity="0.2" fill="currentColor"/><rect x="32" y="72" width="192" height="136" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="80 24 128 72 176 24" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const TelevisionSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
