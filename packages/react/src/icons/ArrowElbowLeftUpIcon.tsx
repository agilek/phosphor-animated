import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="136 96 88 48 40 96" strokeWidth="8" className="draw-line"/><polyline points="232 192 88 192 88 48" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="136 96 88 48 40 96" strokeWidth="12" className="draw-line"/><polyline points="232 192 88 192 88 48" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="136 96 88 48 40 96" strokeWidth="16" className="draw-line"/><polyline points="232 192 88 192 88 48" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="136 96 88 48 40 96" strokeWidth="24" className="draw-line"/><polyline points="232 192 88 192 88 48" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M240,192a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V104H40a8,8,0,0,1-5.66-13.66l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,136,104H96v80H232A8,8,0,0,1,240,192Z" fill="currentColor"/></>,
  duotone: <><polygon points="136 96 88 48 40 96 136 96" opacity="0.2" fill="currentColor"/><polygon points="136 96 88 48 40 96 136 96" strokeWidth="16" className="draw-line"/><polyline points="232 192 88 192 88 96" strokeWidth="16" className="draw-line"/></>,
};

export const ArrowElbowLeftUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
