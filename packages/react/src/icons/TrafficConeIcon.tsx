import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M48,216,110.13,37.37A8,8,0,0,1,117.69,32h20.62a8,8,0,0,1,7.56,5.37L208,216" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M48,216,110.13,37.37A8,8,0,0,1,117.69,32h20.62a8,8,0,0,1,7.56,5.37L208,216" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M48,216,110.13,37.37A8,8,0,0,1,117.69,32h20.62a8,8,0,0,1,7.56,5.37L208,216" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M48,216,110.13,37.37A8,8,0,0,1,117.69,32h20.62a8,8,0,0,1,7.56,5.37L208,216" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M232,208H213.69L153.42,34.75A16,16,0,0,0,138.31,24H117.69a16,16,0,0,0-15.11,10.74L42.31,208H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM95.43,104h65.14l16.7,48H78.73Z" fill="currentColor"/></>,
  duotone: <><polygon points="67.48 160 188.52 160 166.26 96 89.74 96 67.48 160" opacity="0.2" fill="currentColor"/><path d="M48,216,110.13,37.37A8,8,0,0,1,117.69,32h20.62a8,8,0,0,1,7.56,5.37L208,216" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const TrafficConeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
