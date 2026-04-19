import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><rect x="24" y="40" width="208" height="160" rx="24" fill="currentColor"/><path d="M160,216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z" fill="currentColor"/></>,
  duotone: <><rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" opacity="0.2" fill="currentColor"/><rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const MonitorIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
