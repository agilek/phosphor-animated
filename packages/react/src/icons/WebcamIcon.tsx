import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="104" r="72" strokeWidth="8" className="draw-line"/><circle cx="128" cy="104" r="32" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="128" cy="104" r="72" strokeWidth="12" className="draw-line"/><circle cx="128" cy="104" r="32" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="128" cy="104" r="72" strokeWidth="16" className="draw-line"/><circle cx="128" cy="104" r="32" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="128" cy="104" r="72" strokeWidth="24" className="draw-line"/><circle cx="128" cy="104" r="28" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M160,104a32,32,0,1,1-32-32A32,32,0,0,1,160,104Zm72,104a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h88V183.6a80,80,0,1,1,16,0V200h88A8,8,0,0,1,232,208ZM128,152a48,48,0,1,0-48-48A48.05,48.05,0,0,0,128,152Z" fill="currentColor"/></>,
  duotone: <><path d="M128,32a72,72,0,1,0,72,72A72,72,0,0,0,128,32Zm0,104a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z" opacity="0.2" fill="currentColor"/><circle cx="128" cy="104" r="72" strokeWidth="16" className="draw-line"/><circle cx="128" cy="104" r="32" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const WebcamIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
