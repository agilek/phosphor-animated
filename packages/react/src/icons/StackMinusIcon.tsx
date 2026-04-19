import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><polyline points="32 128 128 184 224 128" strokeWidth="8" className="draw-line"/><polygon points="32 80 128 136 224 80 128 24 32 80" strokeWidth="8" className="draw-line"/><polyline points="32 176 128 232 144 222.67" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><polyline points="32 128 128 184 224 128" strokeWidth="12" className="draw-line"/><polygon points="32 80 128 136 224 80 128 24 32 80" strokeWidth="12" className="draw-line"/><polyline points="32 176 128 232 144 222.67" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="32 128 128 184 224 128" strokeWidth="16" className="draw-line"/><polygon points="32 80 128 136 224 80 128 24 32 80" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="32 176 128 232 144 222.67" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><polyline points="32 128 128 184 224 128" strokeWidth="24" className="draw-line"/><polygon points="32 80 128 136 224 80 128 24 32 80" strokeWidth="24" className="draw-line"/><polyline points="32 176 128 232 144 222.67" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M230.91,124A8,8,0,0,1,228,134.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,121.09l92,53.65,92-53.65A8,8,0,0,1,230.91,124ZM28,86.91l96,56a8,8,0,0,0,8.06,0l96-56a8,8,0,0,0,0-13.82l-96-56a8,8,0,0,0-8.06,0l-96,56a8,8,0,0,0,0,13.82ZM232,192H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm-92,23.76-12,7L36,169.09A8,8,0,0,0,28,182.91l96,56a8,8,0,0,0,8.06,0l16-9.33A8,8,0,1,0,140,215.76Z" fill="currentColor"/></>,
  duotone: <><line strokeWidth="16" className="draw-line"/><polygon points="32 80 128 136 224 80 128 24 32 80" opacity="0.2" fill="currentColor"/><polyline points="32 128 128 184 224 128" strokeWidth="16" className="draw-line"/><polygon points="32 80 128 136 224 80 128 24 32 80" strokeWidth="16" className="draw-line"/><polyline points="32 176 128 232 144 222.67" strokeWidth="16" className="draw-line"/></>,
};

export const StackMinusIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
