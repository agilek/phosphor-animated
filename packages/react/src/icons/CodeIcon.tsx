import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="64 88 16 128 64 168" strokeWidth="8" className="draw-line"/><polyline points="192 88 240 128 192 168" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="64 88 16 128 64 168" strokeWidth="12" className="draw-line"/><polyline points="192 88 240 128 192 168" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="64 88 16 128 64 168" strokeWidth="16" className="draw-line"/><polyline points="192 88 240 128 192 168" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="64 88 16 128 64 168" strokeWidth="24" className="draw-line"/><polyline points="192 88 240 128 192 168" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM92.8,145.6a8,8,0,1,1-9.6,12.8l-32-24a8,8,0,0,1,0-12.8l32-24a8,8,0,0,1,9.6,12.8L69.33,128Zm58.89-71.4-32,112a8,8,0,1,1-15.38-4.4l32-112a8,8,0,0,1,15.38,4.4Zm53.11,60.2-32,24a8,8,0,0,1-9.6-12.8L186.67,128,163.2,110.4a8,8,0,1,1,9.6-12.8l32,24a8,8,0,0,1,0,12.8Z" fill="currentColor"/></>,
  duotone: <><polygon points="192 168 240 128 192 88 64 88 16 128 64 168 192 168" opacity="0.2" fill="currentColor"/><polyline points="64 88 16 128 64 168" strokeWidth="16" className="draw-line"/><polyline points="192 88 240 128 192 168" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const CodeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
