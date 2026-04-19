import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><circle cx="128" cy="172" r="8" fill="currentColor"/><line strokeWidth="8" className="draw-line"/><rect x="64" y="40" width="128" height="200" rx="16" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><circle cx="128" cy="172" r="10" fill="currentColor"/><line strokeWidth="12" className="draw-line"/><rect x="64" y="40" width="128" height="200" rx="16" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><circle cx="128" cy="172" r="12" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><rect x="64" y="40" width="128" height="200" rx="16" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><circle cx="128" cy="176" r="16" fill="currentColor"/><line strokeWidth="24" className="draw-line"/><rect x="64" y="44" width="128" height="200" rx="16" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M88,8a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,8ZM200,56V224a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V56A24,24,0,0,1,80,32h96A24,24,0,0,1,200,56Zm-80,80a8,8,0,0,0,16,0V96a8,8,0,0,0-16,0Zm20,36a12,12,0,1,0-12,12A12,12,0,0,0,140,172Z" fill="currentColor"/></>,
  duotone: <><rect x="64" y="40" width="128" height="200" rx="16" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><rect x="64" y="40" width="128" height="200" rx="16" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><circle cx="128" cy="172" r="12" fill="currentColor"/></>,
};

export const BatteryWarningVerticalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
