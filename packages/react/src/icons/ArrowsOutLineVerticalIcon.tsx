import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="96 48 128 16 160 48" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="160 208 128 240 96 208" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="96 48 128 16 160 48" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="160 208 128 240 96 208" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="96 48 128 16 160 48" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="160 208 128 240 96 208" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="96 48 128 16 160 48" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="160 208 128 240 96 208" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM96,56h24V96a8,8,0,0,0,16,0V56h24a8,8,0,0,0,5.66-13.66l-32-32a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,96,56Zm64,144H136V160a8,8,0,0,0-16,0v40H96a8,8,0,0,0-5.66,13.66l32,32a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,160,200Z" fill="currentColor"/></>,
  duotone: <><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="96 48 128 16 160 48" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="160 208 128 240 96 208" strokeWidth="16" className="draw-line"/><rect x="40" y="16" width="176" height="224" rx="16" opacity="0.2" fill="currentColor"/></>,
};

export const ArrowsOutLineVerticalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
