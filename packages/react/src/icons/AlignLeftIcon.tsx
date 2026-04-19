import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="72" y="56" width="112" height="56" rx="8" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="72" y="144" width="152" height="56" rx="8" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="72" y="56" width="112" height="56" rx="8" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="72" y="144" width="152" height="56" rx="8" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="72" y="56" width="112" height="56" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="72" y="144" width="152" height="56" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="80" y="56" width="104" height="52" rx="8" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="80" y="148" width="144" height="52" rx="8" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M232,152v40a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V152a16,16,0,0,1,16-16H216A16,16,0,0,1,232,152ZM40,32a8,8,0,0,0-8,8V216a8,8,0,0,0,16,0V40A8,8,0,0,0,40,32Zm40,88h96a16,16,0,0,0,16-16V64a16,16,0,0,0-16-16H80A16,16,0,0,0,64,64v40A16,16,0,0,0,80,120Z" fill="currentColor"/></>,
  duotone: <><rect x="72" y="56" width="112" height="56" rx="8" opacity="0.2" fill="currentColor"/><rect x="72" y="144" width="152" height="56" rx="8" opacity="0.2" fill="currentColor"/><rect x="72" y="144" width="152" height="56" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="72" y="56" width="112" height="56" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const AlignLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
