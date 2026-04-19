import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="112 176 80 208 48 176" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="144 80 176 48 208 80" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="112 176 80 208 48 176" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="144 80 176 48 208 80" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="112 176 80 208 48 176" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="144 80 176 48 208 80" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="112 176 80 208 48 176" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="144 80 176 48 208 80" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M119.39,172.94a8,8,0,0,1-1.73,8.72l-32,32a8,8,0,0,1-11.32,0l-32-32A8,8,0,0,1,48,168H72V48a8,8,0,0,1,16,0V168h24A8,8,0,0,1,119.39,172.94Zm94.27-98.6-32-32a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,144,88h24V208a8,8,0,0,0,16,0V88h24a8,8,0,0,0,5.66-13.66Z" fill="currentColor"/></>,
  duotone: <><rect x="80" y="48" width="96" height="160" opacity="0.2" fill="currentColor"/><polyline points="112 176 80 208 48 176" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="144 80 176 48 208 80" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const ArrowsDownUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
