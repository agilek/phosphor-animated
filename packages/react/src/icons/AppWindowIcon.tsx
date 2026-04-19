import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="8" className="draw-line"/><circle cx="68" cy="84" r="8" fill="currentColor"/><circle cx="108" cy="84" r="8" fill="currentColor"/></>,
  light: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="12" className="draw-line"/><circle cx="68" cy="84" r="10" fill="currentColor"/><circle cx="108" cy="84" r="10" fill="currentColor"/></>,
  regular: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line"/><circle cx="68" cy="84" r="12" fill="currentColor"/><circle cx="108" cy="84" r="12" fill="currentColor"/></>,
  bold: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="24" className="draw-line"/><circle cx="76" cy="92" r="16" fill="currentColor"/><circle cx="124" cy="92" r="16" fill="currentColor"/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM68,96A12,12,0,1,1,80,84,12,12,0,0,1,68,96Zm40,0a12,12,0,1,1,12-12A12,12,0,0,1,108,96Z" fill="currentColor"/></>,
  duotone: <><rect x="32" y="48" width="192" height="160" rx="8" opacity="0.2" fill="currentColor"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line"/><circle cx="68" cy="84" r="12" fill="currentColor"/><circle cx="108" cy="84" r="12" fill="currentColor"/></>,
};

export const AppWindowIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
