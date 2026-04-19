import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><rect x="40" y="88" width="176" height="80" rx="8" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><rect x="40" y="88" width="176" height="80" rx="8" strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="40" y="88" width="176" height="80" rx="8" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><rect x="40" y="88" width="176" height="80" rx="8" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,96v64a16,16,0,0,1-16,16H136v32a8,8,0,0,1-16,0V176H48a16,16,0,0,1-16-16V96A16,16,0,0,1,48,80h72V48a8,8,0,0,1,16,0V80h72A16,16,0,0,1,224,96Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="88" width="176" height="80" rx="8" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><rect x="40" y="88" width="176" height="80" rx="8" strokeWidth="16" className="draw-line"/></>,
};

export const AlignCenterHorizontalSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
