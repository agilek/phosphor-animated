import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><path d="M114.32,136,96.54,53A24,24,0,0,1,120,24h16a24,24,0,0,1,23.47,29l-17.78,83" strokeWidth="8" className="draw-line"/><rect x="40" y="136" width="176" height="56" rx="8" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><path d="M114.32,136,96.54,53A24,24,0,0,1,120,24h16a24,24,0,0,1,23.47,29l-17.78,83" strokeWidth="12" className="draw-line"/><rect x="40" y="136" width="176" height="56" rx="8" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><path d="M114.32,136,96.54,53A24,24,0,0,1,120,24h16a24,24,0,0,1,23.47,29l-17.78,83" strokeWidth="16" className="draw-line"/><rect x="40" y="136" width="176" height="56" rx="8" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><path d="M110.32,136l-15-83.78A24,24,0,0,1,119,24h18a24,24,0,0,1,23.63,28.22l-15,83.78" strokeWidth="24" className="draw-line"/><rect x="40" y="136" width="176" height="48" rx="8" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,224a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,224Zm-16-96H151.57l15.71-73.29A32,32,0,0,0,136,16H120A32,32,0,0,0,88.72,54.71L104.43,128H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V144A16,16,0,0,0,208,128Z" fill="currentColor"/></>,
  duotone: <><path d="M114.32,136,96.54,53A24,24,0,0,1,120,24h16a24,24,0,0,1,23.47,29l-17.78,83Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><path d="M114.32,136,96.54,53A24,24,0,0,1,120,24h16a24,24,0,0,1,23.47,29l-17.78,83" strokeWidth="16" className="draw-line"/><rect x="40" y="136" width="176" height="56" rx="8" strokeWidth="16" className="draw-line"/></>,
};

export const StampIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
