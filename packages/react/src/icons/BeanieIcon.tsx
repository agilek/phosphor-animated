import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="168" width="192" height="48" rx="8" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><path d="M40,168V144a88,88,0,0,1,176,0v24" strokeWidth="8" className="draw-line"/><circle cx="128" cy="36" r="20" strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="32" y="168" width="192" height="48" rx="8" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><path d="M40,168V144a88,88,0,0,1,176,0v24" strokeWidth="12" className="draw-line"/><circle cx="128" cy="36" r="20" strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="32" y="168" width="192" height="48" rx="8" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M40,168V144a88,88,0,0,1,176,0v24" strokeWidth="16" className="draw-line"/><circle cx="128" cy="36" r="20" strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="32" y="168" width="192" height="48" rx="8" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><path d="M40,168V144a88,88,0,0,1,176,0v24" strokeWidth="24" className="draw-line"/><circle cx="128" cy="36" r="20" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,162.16V144a96.18,96.18,0,0,0-72.34-93,28,28,0,1,0-47.32,0A96.18,96.18,0,0,0,32,144v18.16A16,16,0,0,0,24,176v32a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V176A16,16,0,0,0,224,162.16ZM120,176v32H80V176Zm16,0h40v32H136ZM116,36a12,12,0,1,1,12,12A12,12,0,0,1,116,36ZM40,176H64v32H40Zm176,32H192V176h24v32Z" fill="currentColor"/></>,
  duotone: <><path d="M40,168V144a88,88,0,0,1,176,0v24Z" opacity="0.2" fill="currentColor"/><rect x="32" y="168" width="192" height="48" rx="8" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M40,168V144a88,88,0,0,1,176,0v24" strokeWidth="16" className="draw-line"/><circle cx="128" cy="36" r="20" strokeWidth="16" className="draw-line"/></>,
};

export const BeanieIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
