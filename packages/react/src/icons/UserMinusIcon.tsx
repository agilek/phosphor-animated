import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><circle cx="108" cy="100" r="60" strokeWidth="8" className="draw-line"/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><circle cx="108" cy="100" r="60" strokeWidth="12" className="draw-line"/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><circle cx="108" cy="100" r="60" strokeWidth="16" className="draw-line"/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><circle cx="108" cy="100" r="60" strokeWidth="24" className="draw-line"/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M198.13,194.85A8,8,0,0,1,192,208H24a8,8,0,0,1-6.12-13.15c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM248,128H200a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z" fill="currentColor"/></>,
  duotone: <><circle cx="108" cy="100" r="60" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><circle cx="108" cy="100" r="60" strokeWidth="16" className="draw-line"/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" strokeWidth="16" className="draw-line"/></>,
};

export const UserMinusIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
