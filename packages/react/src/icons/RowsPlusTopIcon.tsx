import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="168" width="176" height="40" rx="8" strokeWidth="8" className="draw-line"/><rect x="40" y="96" width="176" height="40" rx="8" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="40" y="168" width="176" height="40" rx="8" strokeWidth="12" className="draw-line"/><rect x="40" y="96" width="176" height="40" rx="8" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="40" y="168" width="176" height="40" rx="8" strokeWidth="16" className="draw-line"/><rect x="40" y="96" width="176" height="40" rx="8" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="40" y="168" width="176" height="40" rx="8" strokeWidth="24" className="draw-line"/><rect x="40" y="92" width="176" height="40" rx="8" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,176v24a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16H208A16,16,0,0,1,224,176ZM208,88H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104A16,16,0,0,0,208,88ZM104,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H136V16a8,8,0,0,0-16,0V32H104a8,8,0,0,0,0,16Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="168" width="176" height="40" rx="8" opacity="0.2" fill="currentColor"/><rect x="40" y="96" width="176" height="40" rx="8" opacity="0.2" fill="currentColor"/><rect x="40" y="168" width="176" height="40" rx="8" strokeWidth="16" className="draw-line"/><rect x="40" y="96" width="176" height="40" rx="8" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const RowsPlusTopIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
