import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><polyline points="168 192 64 192 64 88" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><polyline points="168 192 64 192 64 88" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><polyline points="168 192 64 192 64 88" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><polyline points="168 192 64 192 64 88" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M197.66,69.66,127.31,140l46.35,46.34A8,8,0,0,1,168,200H64a8,8,0,0,1-8-8V88a8,8,0,0,1,13.66-5.66L116,128.69l70.34-70.35a8,8,0,0,1,11.32,11.32Z" fill="currentColor"/></>,
  duotone: <><polygon points="168 192 64 192 64 88 168 192" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><polygon points="168 192 64 192 64 88 168 192" strokeWidth="16" className="draw-line"/></>,
};

export const ArrowDownLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
