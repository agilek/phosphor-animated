import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="152" width="176" height="64" rx="8" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><circle cx="128" cy="56" r="32" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="40" y="152" width="176" height="64" rx="8" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><circle cx="128" cy="56" r="32" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="40" y="152" width="176" height="64" rx="8" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><circle cx="128" cy="56" r="32" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="40" y="156" width="176" height="60" rx="8" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><circle cx="128" cy="56" r="32" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,160v48a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V160a16,16,0,0,1,16-16h72V95.19a40,40,0,1,1,16,0V144h72A16,16,0,0,1,224,160Zm-64-40a8,8,0,0,0,8,8h32a8,8,0,0,0,0-16H168A8,8,0,0,0,160,120Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="152" width="176" height="64" rx="8" opacity="0.2" fill="currentColor"/><circle cx="128" cy="56" r="32" opacity="0.2" fill="currentColor"/><rect x="40" y="152" width="176" height="64" rx="8" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><circle cx="128" cy="56" r="32" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const JoystickIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
