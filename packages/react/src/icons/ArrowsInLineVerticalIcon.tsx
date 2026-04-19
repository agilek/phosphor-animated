import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="160 64 128 96 96 64" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="96 192 128 160 160 192" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="160 64 128 96 96 64" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="96 192 128 160 160 192" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="160 64 128 96 96 64" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="96 192 128 160 160 192" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="160 56 128 88 96 56" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="96 200 128 168 160 200" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM122.34,101.66a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,160,56H136V16a8,8,0,0,0-16,0V56H96a8,8,0,0,0-5.66,13.66Zm11.32,52.68a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,96,200h24v40a8,8,0,0,0,16,0V200h24a8,8,0,0,0,5.66-13.66Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="16" width="176" height="224" rx="16" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="160 64 128 96 96 64" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="96 192 128 160 160 192" strokeWidth="16" className="draw-line"/></>,
};

export const ArrowsInLineVerticalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
