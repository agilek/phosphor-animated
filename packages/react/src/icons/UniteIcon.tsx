import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><circle cx="96" cy="96" r="72" strokeWidth="8" className="draw-line"/><circle cx="160" cy="160" r="72" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><circle cx="96" cy="96" r="72" strokeWidth="12" className="draw-line"/><circle cx="160" cy="160" r="72" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><circle cx="96" cy="96" r="72" strokeWidth="16" className="draw-line"/><circle cx="160" cy="160" r="72" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><circle cx="96" cy="96" r="72" strokeWidth="24" className="draw-line"/><circle cx="160" cy="160" r="72" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M240,164a76,76,0,0,1-151.9,3.9,76,76,0,1,1,79.8-79.8A76.1,76.1,0,0,1,240,164Z" fill="currentColor"/></>,
  duotone: <><path d="M167.6,88.4a72,72,0,1,0-79.2,79.2,72,72,0,1,0,79.2-79.2Z" opacity="0.2" fill="currentColor"/><circle cx="96" cy="96" r="72" strokeWidth="16" className="draw-line"/><circle cx="160" cy="160" r="72" strokeWidth="16" className="draw-line"/></>,
};

export const UniteIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
