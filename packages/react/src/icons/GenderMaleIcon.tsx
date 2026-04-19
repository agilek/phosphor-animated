import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="104" cy="152" r="72" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="168 40 216 40 216 88" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="104" cy="152" r="72" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="168 40 216 40 216 88" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="104" cy="152" r="72" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="168 40 216 40 216 88" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="104" cy="152" r="72" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="168 40 216 40 216 88" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M152,140a36,36,0,1,1-36-36A36,36,0,0,1,152,140ZM216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40ZM192,72a8,8,0,0,0-8-8H152a8,8,0,0,0,0,16h12.69l-18,18A52.08,52.08,0,1,0,158,109.35l18-18V104a8,8,0,0,0,16,0Z" fill="currentColor"/></>,
  duotone: <><circle cx="104" cy="152" r="72" opacity="0.2" fill="currentColor"/><circle cx="104" cy="152" r="72" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="168 40 216 40 216 88" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const GenderMaleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
