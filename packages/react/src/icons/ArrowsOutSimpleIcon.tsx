import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="160 48 208 48 208 96" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="96 208 48 208 48 160" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="160 48 208 48 208 96" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="96 208 48 208 48 160" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="160 48 208 48 208 96" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="96 208 48 208 48 160" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="160 48 208 48 208 96" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="96 208 48 208 48 160" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,48V96a8,8,0,0,1-13.66,5.66L184,83.31l-34.34,34.35a8,8,0,0,1-11.32-11.32L172.69,72,154.34,53.66A8,8,0,0,1,160,40h48A8,8,0,0,1,216,48ZM106.34,138.34,72,172.69,53.66,154.34A8,8,0,0,0,40,160v48a8,8,0,0,0,8,8H96a8,8,0,0,0,5.66-13.66L83.31,184l34.35-34.34a8,8,0,0,0-11.32-11.32Z" fill="currentColor"/></>,
  duotone: <><rect x="32" y="32" width="192" height="192" rx="16" opacity="0.2" fill="currentColor"/><polyline points="160 48 208 48 208 96" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="96 208 48 208 48 160" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const ArrowsOutSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
