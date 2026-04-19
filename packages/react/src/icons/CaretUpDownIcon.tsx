import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="80 176 128 224 176 176" strokeWidth="8" className="draw-line"/><polyline points="80 80 128 32 176 80" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="80 176 128 224 176 176" strokeWidth="12" className="draw-line"/><polyline points="80 80 128 32 176 80" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="80 176 128 224 176 176" strokeWidth="16" className="draw-line"/><polyline points="80 80 128 32 176 80" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="80 176 128 224 176 176" strokeWidth="24" className="draw-line"/><polyline points="80 80 128 32 176 80" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M183.39,172.94a8,8,0,0,1-1.73,8.72l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,80,168h96A8,8,0,0,1,183.39,172.94ZM80,88h96a8,8,0,0,0,5.66-13.66l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,80,88Z" fill="currentColor"/></>,
  duotone: <><polygon points="80 176 128 224 176 176 80 176" opacity="0.2" fill="currentColor"/><polygon points="80 80 128 32 176 80 80 80" opacity="0.2" fill="currentColor"/><polygon points="80 176 128 224 176 176 80 176" strokeWidth="16" className="draw-line"/><polygon points="80 80 128 32 176 80 80 80" strokeWidth="16" className="draw-line"/></>,
};

export const CaretUpDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
