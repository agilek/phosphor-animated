import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="136 168 88 216 40 168" strokeWidth="8" className="draw-line"/><polyline points="232 72 88 72 88 216" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="136 168 88 216 40 168" strokeWidth="12" className="draw-line"/><polyline points="232 72 88 72 88 216" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="136 168 88 216 40 168" strokeWidth="16" className="draw-line"/><polyline points="232 72 88 72 88 216" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="136 168 88 216 40 168" strokeWidth="24" className="draw-line"/><polyline points="232 72 88 72 88 216" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M240,72a8,8,0,0,1-8,8H96v80h40a8,8,0,0,1,5.66,13.66l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,40,160H80V72a8,8,0,0,1,8-8H232A8,8,0,0,1,240,72Z" fill="currentColor"/></>,
  duotone: <><polygon points="136 168 88 216 40 168 136 168" opacity="0.2" fill="currentColor"/><polygon points="136 168 88 216 40 168 136 168" strokeWidth="16" className="draw-line"/><polyline points="232 72 88 72 88 168" strokeWidth="16" className="draw-line"/></>,
};

export const ArrowElbowLeftDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
