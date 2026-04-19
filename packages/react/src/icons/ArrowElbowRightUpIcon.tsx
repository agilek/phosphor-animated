import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="120 96 168 48 216 96" strokeWidth="8" className="draw-line"/><polyline points="24 192 168 192 168 48" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="120 96 168 48 216 96" strokeWidth="12" className="draw-line"/><polyline points="24 192 168 192 168 48" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="120 96 168 48 216 96" strokeWidth="16" className="draw-line"/><polyline points="24 192 168 192 168 48" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="120 96 168 48 216 96" strokeWidth="24" className="draw-line"/><polyline points="24 192 168 192 168 48" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M223.39,99.06A8,8,0,0,1,216,104H176v88a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H160V104H120a8,8,0,0,1-5.66-13.66l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,223.39,99.06Z" fill="currentColor"/></>,
  duotone: <><polygon points="120 96 168 48 216 96 120 96" opacity="0.2" fill="currentColor"/><polygon points="120 96 168 48 216 96 120 96" strokeWidth="16" className="draw-line"/><polyline points="24 192 168 192 168 96" strokeWidth="16" className="draw-line"/></>,
};

export const ArrowElbowRightUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
