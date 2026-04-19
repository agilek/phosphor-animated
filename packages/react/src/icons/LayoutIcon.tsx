import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H216V96H40ZM216,200H112V112H216v88Z" fill="currentColor"/></>,
  duotone: <><path d="M104,208V104H32v96a8,8,0,0,0,8,8H96" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line"/></>,
};

export const LayoutIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
