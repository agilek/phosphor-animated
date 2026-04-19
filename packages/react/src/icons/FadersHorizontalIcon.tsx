import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M184,80a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16H192A8,8,0,0,1,184,80ZM40,88h96v16a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H144a8,8,0,0,0-8,8V72H40a8,8,0,0,0,0,16Zm176,80H128a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16ZM96,144H80a8,8,0,0,0-8,8v16H40a8,8,0,0,0,0,16H72v16a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V152A8,8,0,0,0,96,144Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="80" width="176" height="96" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const FadersHorizontalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
