import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M104,72a96,96,0,0,1,96,96" strokeWidth="8" className="draw-line"/><polyline points="72 32 72 200 240 200" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M104,72a96,96,0,0,1,96,96" strokeWidth="12" className="draw-line"/><polyline points="72 32 72 200 240 200" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M104,72a96,96,0,0,1,96,96" strokeWidth="16" className="draw-line"/><polyline points="72 32 72 200 240 200" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="72 32 72 200 240 200" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><path d="M112,72.33A96,96,0,0,1,199.67,160" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM112,88a64.07,64.07,0,0,1,64,64,8,8,0,0,1-16,0,48.05,48.05,0,0,0-48-48,8,8,0,0,1,0-16Zm88,104H80a8,8,0,0,1-8-8V104H56a8,8,0,0,1,0-16H72V72a8,8,0,0,1,16,0V176H200a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><path d="M200,200H72V72h32a96,96,0,0,1,96,96Z" opacity="0.2" fill="currentColor"/><path d="M104,72a96,96,0,0,1,96,96" strokeWidth="16" className="draw-line"/><polyline points="72 32 72 200 240 200" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const AngleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
