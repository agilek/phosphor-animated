import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="104" cy="80" r="24" strokeWidth="8" className="draw-line"/><circle cx="168" cy="176" r="24" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="104" cy="80" r="24" strokeWidth="12" className="draw-line"/><circle cx="168" cy="176" r="24" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="104" cy="80" r="24" strokeWidth="16" className="draw-line"/><circle cx="168" cy="176" r="24" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="104" cy="80" r="24" strokeWidth="24" className="draw-line"/><circle cx="168" cy="176" r="24" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M32,80a8,8,0,0,1,8-8H77.17a28,28,0,0,1,53.66,0H216a8,8,0,0,1,0,16H130.83a28,28,0,0,1-53.66,0H40A8,8,0,0,1,32,80Zm184,88H194.83a28,28,0,0,0-53.66,0H40a8,8,0,0,0,0,16H141.17a28,28,0,0,0,53.66,0H216a8,8,0,0,0,0-16Z" fill="currentColor"/></>,
  duotone: <><circle cx="104" cy="80" r="24" opacity="0.2" fill="currentColor"/><circle cx="168" cy="176" r="24" opacity="0.2" fill="currentColor"/><circle cx="104" cy="80" r="24" strokeWidth="16" className="draw-line"/><circle cx="168" cy="176" r="24" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const SlidersHorizontalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
