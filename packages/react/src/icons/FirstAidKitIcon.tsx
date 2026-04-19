import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="64" width="192" height="144" rx="8" strokeWidth="8" className="draw-line"/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="32" y="64" width="192" height="144" rx="8" strokeWidth="12" className="draw-line"/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="32" y="64" width="192" height="144" rx="8" strokeWidth="16" className="draw-line"/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="32" y="64" width="192" height="144" rx="8" strokeWidth="24" className="draw-line"/><path d="M168,64V44a16,16,0,0,0-16-16H104A16,16,0,0,0,88,44V64" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56Zm-64,88H136v16a8,8,0,0,1-16,0V144H104a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16Zm8-88H96V48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z" fill="currentColor"/></>,
  duotone: <><rect x="32" y="64" width="192" height="144" rx="8" opacity="0.2" fill="currentColor"/><rect x="32" y="64" width="192" height="144" rx="8" strokeWidth="16" className="draw-line"/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const FirstAidKitIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
