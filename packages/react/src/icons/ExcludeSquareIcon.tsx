import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="120" height="120" strokeWidth="8" className="draw-line"/><rect x="96" y="96" width="120" height="120" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="40" y="40" width="120" height="120" strokeWidth="12" className="draw-line"/><rect x="96" y="96" width="120" height="120" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="40" y="40" width="120" height="120" strokeWidth="16" className="draw-line"/><rect x="96" y="96" width="120" height="120" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="40" y="40" width="120" height="120" strokeWidth="24" className="draw-line"/><rect x="96" y="96" width="120" height="120" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M88,88v80H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H160a8,8,0,0,1,8,8V88Zm128,0H168v80H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96A8,8,0,0,0,216,88Z" fill="currentColor"/></>,
  duotone: <><polygon points="160 96 160 40 40 40 40 160 96 160 96 96 160 96" opacity="0.2" fill="currentColor"/><polygon points="160 96 160 160 96 160 96 216 216 216 216 96 160 96" opacity="0.2" fill="currentColor"/><rect x="40" y="40" width="120" height="120" strokeWidth="16" className="draw-line"/><rect x="96" y="96" width="120" height="120" strokeWidth="16" className="draw-line"/></>,
};

export const ExcludeSquareIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
