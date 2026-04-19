import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><polyline points="216 104 215.99 40.01 152 40" strokeWidth="8" className="draw-line"/><path d="M184,136v72a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h72" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><polyline points="216 104 215.99 40.01 152 40" strokeWidth="12" className="draw-line"/><path d="M184,136v72a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h72" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="216 104 215.99 40.01 152 40" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M184,136v72a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h72" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><polyline points="216 104 215.99 40.01 152 40" strokeWidth="24" className="draw-line"/><path d="M184,140v68a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h68" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,104a8,8,0,0,1-13.66,5.66L184,83.31l-42.34,42.35a8,8,0,0,1-11.32-11.32L172.69,72,146.34,45.66A8,8,0,0,1,152,32h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="72" width="144" height="144" rx="8" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><polyline points="216 104 215.99 40.01 152 40" strokeWidth="16" className="draw-line"/><path d="M184,136v72a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h72" strokeWidth="16" className="draw-line"/></>,
};

export const ArrowSquareOutIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
