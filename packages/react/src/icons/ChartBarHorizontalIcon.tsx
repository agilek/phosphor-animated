import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><polyline points="48 56 176 56 176 104" strokeWidth="8" className="draw-line"/><polyline points="48 104 224 104 224 152 48 152" strokeWidth="8" className="draw-line"/><polyline points="144 152 144 200 48 200" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><polyline points="48 56 176 56 176 104" strokeWidth="12" className="draw-line"/><polyline points="48 104 224 104 224 152 48 152" strokeWidth="12" className="draw-line"/><polyline points="144 152 144 200 48 200" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><polyline points="48 56 176 56 176 104" strokeWidth="16" className="draw-line"/><polyline points="48 104 224 104 224 152 48 152" strokeWidth="16" className="draw-line"/><polyline points="144 152 144 200 48 200" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><polyline points="48 56 176 56 176 104" strokeWidth="24" className="draw-line"/><polyline points="48 104 224 104 224 152 48 152" strokeWidth="24" className="draw-line"/><polyline points="144 152 144 200 48 200" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M232,112v32a8,8,0,0,1-8,8H56v16h88a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H56v8a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0v8H176a8,8,0,0,1,8,8V80a8,8,0,0,1-8,8H56v16H224A8,8,0,0,1,232,112Z" fill="currentColor"/></>,
  duotone: <><rect x="48" y="104" width="176" height="48" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><polyline points="48 56 176 56 176 104" strokeWidth="16" className="draw-line"/><polyline points="48 104 224 104 224 152 48 152" strokeWidth="16" className="draw-line"/><polyline points="144 152 144 200 48 200" strokeWidth="16" className="draw-line"/></>,
};

export const ChartBarHorizontalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
