import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M160,152a16,16,0,0,1-16,16h-8V136h8A16,16,0,0,1,160,152Zm72-24A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-56,24a32,32,0,0,0-32-32h-8V88h4a16,16,0,0,1,16,16,8,8,0,0,0,16,0,32,32,0,0,0-32-32h-4V64a8,8,0,0,0-16,0v8h-4a32,32,0,0,0,0,64h4v32h-8a16,16,0,0,1-16-16,8,8,0,0,0-16,0,32,32,0,0,0,32,32h8v8a8,8,0,0,0,16,0v-8h8A32,32,0,0,0,176,152Zm-76-48a16,16,0,0,0,16,16h4V88h-4A16,16,0,0,0,100,104Z" fill="currentColor"/></>,
  duotone: <><path d="M128,128h24a40,40,0,0,1,0,80H128Z" opacity="0.2" fill="currentColor"/><path d="M128,48H112a40,40,0,0,0,0,80h16Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" strokeWidth="16" className="draw-line"/></>,
};

export const CurrencyDollarIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
