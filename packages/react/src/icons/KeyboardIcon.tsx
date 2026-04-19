import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="24" y="56" width="208" height="144" rx="8" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="24" y="56" width="208" height="144" rx="8" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="24" y="56" width="208" height="144" rx="8" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="24" y="56" width="208" height="144" rx="8" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM64,168H48a8,8,0,0,1,0-16H64a8,8,0,0,1,0,16Zm96,0H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm48,0H192a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H48a8,8,0,0,1,0-16H208a8,8,0,0,1,0,16Zm0-32H48a8,8,0,0,1,0-16H208a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><rect x="24" y="56" width="208" height="144" rx="8" opacity="0.2" fill="currentColor"/><rect x="24" y="56" width="208" height="144" rx="8" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const KeyboardIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
