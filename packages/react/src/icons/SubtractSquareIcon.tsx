import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="120" height="120" strokeWidth="8" className="draw-line"/><polyline points="160 96 216 96 216 216 96 216 96 160" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="40" y="40" width="120" height="120" strokeWidth="12" className="draw-line"/><polyline points="160 96 216 96 216 216 96 216 96 160" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="40" y="40" width="120" height="120" strokeWidth="16" className="draw-line"/><polyline points="160 96 216 96 216 216 96 216 96 160" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="40" y="40" width="120" height="120" strokeWidth="24" className="draw-line"/><polyline points="160 96 216 96 216 216 96 216 96 160" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,88H168V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V160a8,8,0,0,0,8,8H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96A8,8,0,0,0,216,88ZM48,48H152V152H48Z" fill="currentColor"/></>,
  duotone: <><polygon points="160 96 160 160 96 160 96 216 216 216 216 96 160 96" opacity="0.2" fill="currentColor"/><rect x="40" y="40" width="120" height="120" strokeWidth="16" className="draw-line"/><polyline points="160 96 216 96 216 216 96 216 96 160" strokeWidth="16" className="draw-line"/></>,
};

export const SubtractSquareIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
