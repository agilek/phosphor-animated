import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="40 48 64 48 152 208 192 208 192 48" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="192 208 104 48 64 48 64 208" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="40 48 64 48 152 208 192 208 192 48" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="192 208 104 48 64 48 64 208" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="40 48 64 48 152 208 192 208 192 48" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="192 208 104 48 64 48 64 208" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="40 48 60 48 148 208 196 208 196 48" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="196 208 108 48 60 48 60 208" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,48a8,8,0,0,1-8,8H200V208a8,8,0,0,1-8,8H152a8,8,0,0,1-7-4.14L72,79.15V200H88a8,8,0,0,1,0,16H40a8,8,0,0,1,0-16H56V56H40a8,8,0,0,1,0-16h64a8,8,0,0,1,7,4.14l73,132.71V56H168a8,8,0,0,1,0-16h48A8,8,0,0,1,224,48Z" fill="currentColor"/></>,
  duotone: <><polygon points="64 48 152 208 192 208 104 48 64 48" opacity="0.2" fill="currentColor"/><polyline points="40 48 64 48 152 208 192 208 192 48" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="192 208 104 48 64 48 64 208" strokeWidth="16" className="draw-line"/></>,
};

export const NotionLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
