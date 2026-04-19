import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="72" width="144" height="144" strokeWidth="8" className="draw-line"/><polyline points="72 40 216 40 216 184" strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="40" y="72" width="144" height="144" strokeWidth="12" className="draw-line"/><polyline points="72 40 216 40 216 184" strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="40" y="72" width="144" height="144" strokeWidth="16" className="draw-line"/><polyline points="72 40 216 40 216 184" strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="40" y="76" width="140" height="140" strokeWidth="24" className="draw-line"/><polyline points="76 40 216 40 216 180" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M192,72V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H184A8,8,0,0,1,192,72Zm24-40H72a8,8,0,0,0,0,16H208V184a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="72" width="144" height="144" opacity="0.2" fill="currentColor"/><rect x="40" y="72" width="144" height="144" strokeWidth="16" className="draw-line"/><polyline points="72 40 216 40 216 184" strokeWidth="16" className="draw-line"/></>,
};

export const CopySimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
