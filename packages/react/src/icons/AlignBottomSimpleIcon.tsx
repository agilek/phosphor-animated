import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><rect x="88" y="32" width="80" height="168" rx="8" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><rect x="88" y="32" width="80" height="168" rx="8" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><rect x="88" y="32" width="80" height="168" rx="8" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><rect x="88" y="32" width="80" height="160" rx="8" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M208,232a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,232ZM96,208h64a16,16,0,0,0,16-16V40a16,16,0,0,0-16-16H96A16,16,0,0,0,80,40V192A16,16,0,0,0,96,208Z" fill="currentColor"/></>,
  duotone: <><rect x="88" y="32" width="80" height="168" rx="8" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><rect x="88" y="32" width="80" height="168" rx="8" strokeWidth="16" className="draw-line"/></>,
};

export const AlignBottomSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
