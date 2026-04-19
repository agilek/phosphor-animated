import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="24" y="72" width="208" height="112" rx="8" strokeWidth="8" className="draw-line"/><circle cx="188" cy="128" r="8" fill="currentColor"/></>,
  light: <><rect x="24" y="72" width="208" height="112" rx="8" strokeWidth="12" className="draw-line"/><circle cx="188" cy="128" r="10" fill="currentColor"/></>,
  regular: <><rect x="24" y="72" width="208" height="112" rx="8" strokeWidth="16" className="draw-line"/><circle cx="188" cy="128" r="12" fill="currentColor"/></>,
  bold: <><rect x="24" y="72" width="208" height="112" rx="8" strokeWidth="24" className="draw-line"/><circle cx="180" cy="128" r="16" fill="currentColor"/></>,
  fill: <><path d="M224,64H32A16,16,0,0,0,16,80v96a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64Zm-36,76a12,12,0,1,1,12-12A12,12,0,0,1,188,140Z" fill="currentColor"/></>,
  duotone: <><rect x="24" y="72" width="208" height="112" rx="8" opacity="0.2" fill="currentColor"/><rect x="24" y="72" width="208" height="112" rx="8" strokeWidth="16" className="draw-line"/><circle cx="188" cy="128" r="12" fill="currentColor"/></>,
};

export const HardDriveIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
