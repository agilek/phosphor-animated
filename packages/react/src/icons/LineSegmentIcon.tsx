import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="64" cy="192" r="24" strokeWidth="8" className="draw-line"/><circle cx="192" cy="64" r="24" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="64" cy="192" r="24" strokeWidth="12" className="draw-line"/><circle cx="192" cy="64" r="24" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="64" cy="192" r="24" strokeWidth="16" className="draw-line"/><circle cx="192" cy="64" r="24" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="64" cy="192" r="24" strokeWidth="24" className="draw-line"/><circle cx="192" cy="64" r="24" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M211.81,83.79a28,28,0,0,1-33.12,4.83L88.62,178.69a28,28,0,1,1-44.43-6.48h0a28,28,0,0,1,33.12-4.83l90.07-90.07a28,28,0,1,1,44.43,6.48Z" fill="currentColor"/></>,
  duotone: <><circle cx="64" cy="192" r="24" opacity="0.2" fill="currentColor"/><circle cx="192" cy="64" r="24" opacity="0.2" fill="currentColor"/><circle cx="64" cy="192" r="24" strokeWidth="16" className="draw-line"/><circle cx="192" cy="64" r="24" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const LineSegmentIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
