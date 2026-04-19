import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><circle cx="128" cy="128" r="80" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><circle cx="128" cy="128" r="32" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><circle cx="128" cy="128" r="80" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><circle cx="128" cy="128" r="32" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><circle cx="128" cy="128" r="80" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><circle cx="128" cy="128" r="32" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><circle cx="128" cy="128" r="80" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><circle cx="128" cy="128" r="32" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M240,120H215.63A88.13,88.13,0,0,0,136,40.37V16a8,8,0,0,0-16,0V40.37A88.13,88.13,0,0,0,40.37,120H16a8,8,0,0,0,0,16H40.37A88.13,88.13,0,0,0,120,215.63V240a8,8,0,0,0,16,0V215.63A88.13,88.13,0,0,0,215.63,136H240a8,8,0,0,0,0-16ZM128,200a72,72,0,1,1,72-72A72.08,72.08,0,0,1,128,200Zm40-72a40,40,0,1,1-40-40A40,40,0,0,1,168,128Z" fill="currentColor"/></>,
  duotone: <><path d="M128,48a80,80,0,1,0,80,80A80,80,0,0,0,128,48Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><circle cx="128" cy="128" r="80" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><circle cx="128" cy="128" r="32" strokeWidth="16" className="draw-line"/></>,
};

export const GpsFixIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
